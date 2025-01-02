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
@app.route('/create-account', methods=['POST'])
def create_account():
    data = request.get_json()
    username = data.get('username')
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    password = data.get('password')
    email = data.get('email')

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

    
    # if not username and not password and not first_name and not email:
    #     return jsonify({'error': 'All fields are required'}), 400
    # elif not password:
    #     return jsonify({'error': 'password field is required'}), 400
    # elif not username:
    #     return jsonify({'error': 'username field is required'}), 400
    # elif not first_name:
    #     return jsonify({'error': 'firstname fields are required'}), 400
    # elif not email:
    #     return jsonify({'error': ' email field are required'}), 400

    if User.query.filter_by(email=email).first() :
        return jsonify({'error': 'User already exists'}), 400
    if User.queryfilter_by(username=username).first():
        return jsonify({'error': "username already exist please choose another"}), 400
    new_user = User(username=username, first_name=first_name, last_name=last_name, password=password, email=email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Account has been created successfully!'}), 201

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

    # access_token = create_access_token(identity={'id': user.id, 'email': user.email})
    return jsonify({'access_token': "access_token created"}), 200

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
    ecg_data =[reading for reading in patient_ecg]

    prediction = predict(ecg_data)
    recommendation = model.ask_gemini_text({"role": "user", "parts":f"what is your advice for patient with {prediction}"})

    return jsonify({"prediction":prediction, "recommendation":recommendation})