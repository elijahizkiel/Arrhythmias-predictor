from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from API_key_loader import DB_URI
from flask_migrate import Migrate
front_end_path = '../front-end-app/build'
app = Flask(__name__, static_folder=front_end_path)

app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Optional, to disable Flask-SQLAlchemy track modifications


db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

import routes

with app.app_context():
    db.create_all()