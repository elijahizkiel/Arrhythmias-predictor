from flask import Flask,request, send_from_directory
from flask_cors import CORS

front_end_path = '../front-end/predictor-ui/build'

app=Flask(__name__, static_folder=front_end_path)

CORS(app)

@app.route("/", methods=["GET"])
def home():
    
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/<path:subpath>",methods=["GET"])
def getResource(subpath):
    return send_from_directory(app.static_folder, subpath)

