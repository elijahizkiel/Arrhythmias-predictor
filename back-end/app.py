from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS
import Gemini
from API_key_loader import api_key

front_end_path = '../front-end/predictor-ui/build'

app=Flask(__name__, static_folder=front_end_path)

CORS(app)
model = Gemini.Gemini(api_key)

@app.route("/", methods=["GET"])
def home():
    
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/<path:subpath>",methods=["GET"])
def getResource(subpath):
    if not subpath: return jsonify({"error: resource not found"}),404
    return send_from_directory(app.static_folder, subpath)

@app.route("/chat-service", methods=["POST"])
def ask_model():
    question = request.json
    if not question or "parts" not in question:
        return jsonify({"error":"missing part value"}),400
    return jsonify(model.ask_gemini_text(question.get('parts')))