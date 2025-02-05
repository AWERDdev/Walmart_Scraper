from bs4 import BeautifulSoup
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def WelcomeMessage():
    return '<h1>Welcome to the PYAPI 👍👍</h1>'

@app.route('/ScrapeData', methods=['GET'])  # Ensure GET request
def Scrape():
    try:
        print('Ready to scrape data')

        # Get URL from query parameters (e.g., ?url=https://example.com)
        data = request.args.get('url')

        if not data:
            return jsonify({"message": "No URL provided"}), 400

        print(f"Received URL: {data}")
        
      
        result = {
            "message": "URL received successfully",
            "URL": data,
        
        }
        
        return jsonify(result)
    except Exception as error:
        print(f"Failed to scrape URL: {error}")
        return jsonify({"message": "Error occurred", "error": str(error)}), 500 

if __name__ == '__main__':
    app.run(debug=True)

# test URL
# https://github.com/AWERDdev/PythonProject