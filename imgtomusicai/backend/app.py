from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
CORS(app)
api_key = os.getenv('OPENAI_API_KEY')

if not api_key:
    raise RuntimeError('OpenAI API key not found. Please set the OPENAI_API_KEY environment variable.')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' in request.files:
        image_file = request.files['image']

        # Encoding the image in base64
        image_base64 = base64.b64encode(image_file.read()).decode('utf-8')

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }

        payload = {
            "model": "gpt-4-vision-preview",
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Write lyrics and provide chords based on the image provided based on a theme for a song with guitar chords."},
                        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_base64}"}}
                    ]
                }
            ],
            "max_tokens": 300
        }

        # Sending the request to OpenAI API
        response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
        
        if response.status_code == 200:
            # Extracting the text from the response
            description_and_lyrics = response.json()['choices'][0]['message']['content']
            return jsonify({'lyrics': description_and_lyrics})
        else:
            return jsonify({'error': 'Error in generating lyrics', 'details': response.text}), 500

    return jsonify({'error': 'No image provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
    # response = openai.Completion.create(
        #     model="text-davinci-003",
        #     prompt=f"Generate chords and lyrics based on this image description: {image_description}",
        #     max_tokens=150
        # )
        # return jsonify({'lyrics': response.choices[0].text.strip()})