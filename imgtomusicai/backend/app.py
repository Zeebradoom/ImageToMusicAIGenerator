from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)
openai.api_key = 'your-openai-api-key'

@app.route('/upload', methods=['POST'])
def upload_file():
    print('received request')
    if 'image' in request.files:
        image_file = request.files['image']
        image = Image.open(image_file.stream)

        if image.mode != 'RGB':
            image = image.convert('RGB')

        image_array = np.array(image)

        # TODO(Zhuoyang Note): please find out how to use the image_array to generate lyrics and chords
        
        # response = openai.Completion.create(
        #     model="text-davinci-003",
        #     prompt=f"Generate chords and lyrics based on this image description: {image_description}",
        #     max_tokens=150
        # )
        # return jsonify({'lyrics': response.choices[0].text.strip()})

    return jsonify({'error': 'No image provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)