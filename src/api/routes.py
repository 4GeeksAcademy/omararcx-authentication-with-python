"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)

def set_password(password):
    return generate_password_hash(password)

def check_password(hash_password, password):
    return check_password_hash(hash_password, password)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=["POST"])
def register_user():
    body = request.json
    email = body.get("email")
    password = body.get("password")
    is_active = body.get("is_active")

    if email is None or password is None:
        return jsonify({"message":"You need to provide an email and a password"}), 400
   
    user=User.query.filter_by(email=email).one_or_none()

    if user is not None:
        return jsonify({"message":"The user already exists"}), 400
    else:
        password=set_password(password)
        user = User(email=email, password=password, is_active=is_active)

        db.session.add(user)

        try:
            db.session.commit()
            return jsonify({"message":"User created succesfully"}), 200
        except Exception as error:
            db.session.rollback()
            return jsonify({"message":f'{error}'}), 400

