from twilio.rest import Client

# Replace these with your actual credentials
account_sid = 'AC01f639dac09b13b2c20360e44ff9f62d'
auth_token = '70ce3759f72f965c2e9a8ab3b84e7be9'
from_number = '+12342318207'  # Your Twilio number
to_number = '+919322724623'    # Recipient number

client = Client(account_sid, auth_token)

try:
    message = client.messages.create(
        body='Help!ME',
        from_=from_number,
        to=to_number
    )
    print(f"Message SID: {message.sid}")
except Exception as e:
    print(f"Error: {e}")
