from flask import Flask, jsonify
from flask_pymongo import PyMongo
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6'
socketio = SocketIO(app)

mongo = PyMongo(app)

@app.route('/')
def index():
    return 'Server is up'

@app.route('/data')
def get_data():
    collection = mongo.db.trades  # Replace with your collection name
    data = list(collection.find({}))  # Retrieve all documents from the collection
    return jsonify(data)

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app, debug=True)
