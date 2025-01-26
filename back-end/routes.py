from flask import request, send_from_directory, jsonify
from app import db, app
from db_models import User, Message

import Gemini
from API_key_loader import api_key

from predictor_model.predictor import predict


model = Gemini.Gemini(api_key)

@app.route("/", methods=["GET"])
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/<path:subpath>",methods=["GET"])
def getResource(subpath):
    if not subpath: return jsonify({"error: resource not found"}),404
    return send_from_directory(app.static_folder, subpath)


#Abigail's code
#account creating and login
@app.route('/create-account', methods=['POST'])
def create_account():
    data = request.get_json()
    username = data.get('username')
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    password = data.get('password')
    email = data.get('email')

    #handling missing fields from serverside
    missing_fields = []
    if not username:
        missing_fields.append("username")
    if not first_name:
        missing_fields.append("firstName")
    if not password:
        missing_fields.append("password")
    if not email:
        missing_fields.append("email")

    if missing_fields:
        return jsonify({'error': f"The following fields are required: {', '.join(missing_fields)}"}), 400

    #verifying no double user with same email, and username too
    if User.query.filter_by(email=email).first() :
        return jsonify({'error': 'User already exists'}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({'error': "username already exist please choose another"}), 400
    
    #create new user instance on the database
    new_user = User(username=username, first_name=first_name, last_name=last_name, password=password, email=email)
    db.session.add(new_user)
    db.session.commit()

    #get new created instance of the user
    user = User.query.filter_by(email=email).first()
    return jsonify({"user":user.to_json(),'message': 'Account has been created successfully!'}), 201

#login by using previously existing account
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    username = email
    password = data.get('password')

    user_email = User.query.filter_by(email=email, password=password).first()
    user_username = User.query.filter_by(username =username, password=password).first()
    if not user_email and not user_username:
        return jsonify({'error': 'Invalid credentials. Check username or password'}), 401
    user = user_username or user_email
    
    # access_token = create_access_token(identity={'id': user.id, 'email': user.email})
    return jsonify({"user":user.to_json(),'access_token': "access_token created"}), 200

#Abigail's code ends here


@app.route("/chat-service", methods=["POST"])
def ask_model():
    question = request.json
    if not question or "parts" not in question:
        return jsonify({"error":"missing part value"}),400
    return jsonify(model.ask_gemini_text(question.get('parts')))


@app.route("/diagnose", methods=["POST"])
def diagnose():
    data = request.json
    if not data:
        return jsonify({"error":"missing patient ecg data"})
    patient_ecg = data.get('patient_ecg')

    age = patient_ecg.get('age')
    gender= patient_ecg.get('gender')
    heart_rate= patient_ecg.get('heartRate')
    qrs_duration = patient_ecg.get('qrsDuration')
    qt_interval = patient_ecg.get('qt')
    qt_corrected = patient_ecg.get('qtc')
    qrs_count = patient_ecg.get('qrsCount')
    r_axis = patient_ecg.get('rAxis')
    t_axis = patient_ecg.get('tAxis')
    missing_values =f"age:{age}, gender:{gender}, heart_rate:{heart_rate}, qrs_duration:{qrs_duration}, qt_interval:{qt_interval},qt_corrected:{qt_corrected},qrs_count:{qrs_count}, r_axis:{r_axis}, t_axis: {t_axis}"
    if not age or not qrs_duration or not heart_rate or not qt_interval or not qt_corrected or not qrs_count or not r_axis or not t_axis:
        return jsonify({"error": "missing required field",
                        "missing":f"{missing_values}"}), 400
    ecg_data =[age, gender, heart_rate, qrs_duration, qt_interval, qt_corrected, r_axis, t_axis, qrs_count]
    

    prediction = predict(ecg_data)
    recommendation = model.ask_gemini_recommendation({"role": "user", "parts":f"I'm a patient with {prediction[1]};what are activites do you recommend me to do? what should my diet contain? and what tasks should i restrain myself from? please make it short not greater than 50 words."})

    return jsonify({"prediction":{"prediction4":prediction[0],"prediction12":prediction[1]}, "recommendation":recommendation, "receivedArray":ecg_data})