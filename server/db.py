import os

from pymongo import MongoClient

class PrescriptionStore(object):
    URL = os.environ.get('DATABASE_URL')
    CLIENT = None

    def __new__(cls):
        if not cls.CLIENT:
            cls.CLIENT = MongoClient(cls.URL)
        return cls.CLIENT
    

        
