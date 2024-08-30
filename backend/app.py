from flask import Flask, request, jsonify
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Load Twilio credentials from environment variables
TWILIO_ACCOUNT_SID = os.getenv('TWILIO_ACCOUNT_SID')
TWILIO_AUTH_TOKEN = os.getenv('TWILIO_AUTH_TOKEN')
TWILIO_PHONE_NUMBER = os.getenv('TWILIO_PHONE_NUMBER')
TO_PHONE_NUMBER = os.getenv('TO_PHONE_NUMBER')
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all domains to access the API

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

@app.route('/api/send-emergency-message', methods=['POST'])
def send_emergency_message():
    try:
        message = client.messages.create(
            body='Help! ME',
            from_=TWILIO_PHONE_NUMBER,
            to=TO_PHONE_NUMBER
        )
        return jsonify({"success": True, "message_sid": message.sid}), 200
    except TwilioRestException as e:
        return jsonify({"success": False, "error": f"Twilio error: {e}"}), 400
    except Exception as e:
        return jsonify({"success": False, "error": f"Unexpected error: {e}"}), 500

@app.route('/')
def home():
    return "Welcome to the Flask App"

if __name__ == '__main__':
    app.run(debug=True)
