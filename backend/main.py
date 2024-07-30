from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/charlie', methods=['GET'])
def CharlieAPI():
    return 'Hello world this is api charlie'

@app.route('/beta', methods=['POST'])
def BetaAPI():
    data = request.json
    if 'message' in data:
        modified_message = data['message'] + ' Copy that, Beta Copy over and Out'
        return jsonify({'response': modified_message})
    else:
        return jsonify({'error': 'No message provided'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
    print('Server is running on port 10000')
