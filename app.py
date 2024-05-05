from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/time', methods=['GET'])
def get_time():
    from datetime import datetime
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    return jsonify(current_time=current_time)

if __name__ == '__main__':
    app.run(debug=True)
