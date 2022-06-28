from flask import Flask, request, jsonify
from flask_cors import CORS
import utils
 
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def predict_player_rating():
    # player_name = request.form['name'] // testing with postman
    player_name = request.json['name']

    response = jsonify({
        'name': player_name,
        'predicted_value': utils.main_pipeline(player_name), 
        'player_stats': utils.transform_player_stats(player_name),
        'player_id': utils.find_player_id(player_name),
        'team_id': utils.find_team_id(player_name)
        })

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__=="__main__":
    print("Starting Flask Server for NBA2K player rating prediction!")
    app.run(debug=True)                             