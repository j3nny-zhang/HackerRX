from dataclasses import dataclass
import re

from bson import ObjectId
from db import client
from flask_login import UserMixin


@dataclass
class User(UserMixin):
    _id: str
    email: str
    name: str
    password: str

    def get_id(self):
        return self._id

    @classmethod
    def get(cls, user_id):
        user = client.userdb.users.find_one({"_id": ObjectId(user_id)})
        if user is not None:
            return User(**user)
        return None

    @classmethod
    def get_by_email(cls, email):
        user = client .userdb.users.find_one({"email": email})
        if user is not None:
            return User(**user)
        return None
