from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

front_end_path = '../front-end-app/build'
app=Flask(__name__, static_folder=front_end_path)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://we-care:db-we-care@localhost/we-care-DB'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Optional, to disable Flask-SQLAlchemy track modifications


db = SQLAlchemy(app)
CORS(app)

import routes

with app.app_context():
    db.create_all()