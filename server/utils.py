import pickle
import json
import numpy as np
import pandas as pd
from nba_api.stats.static import players
from nba_api.stats.static import teams
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.library.parameters import SeasonAll
from nba_api.stats.endpoints import playergamelog

__data_columns = None
__model = None

def load_saved_artifacts():
    print("Loading saved artifacts...")
    global  __data_columns

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        
    global __model

    if __model is None:
        with open('./artifacts/nba2k_calc_model.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("Artifacts loaded sucessfully!")


def get_data_columns():
    return __data_columns

def find_player_id(player_name):
    nba_players = players.get_players()
    player_id = [player for player in nba_players if player['full_name'] == player_name][0]['id']
    
    return player_id

def find_team_id(player_name):
    player_stats = playercareerstats.PlayerCareerStats(player_id = player_id, per_mode36 = 'PerGame').get_data_frames()[0]
    player_stats_current_season = player_stats.iloc[-1]

    team_id = player_stats_current_season['TEAM_ID']

    return team_id

def get_player_plus_minus(player_id):
    player_gamelog = playergamelog.PlayerGameLog(player_id = player_id, season = SeasonAll.default).get_data_frames()
    plus_minus = round(player_gamelog[0]['PLUS_MINUS'].mean(), 2)

    return plus_minus

def fetch_player_stats(player_name):
    player_id = find_player_id(player_name)
    
    player_stats = playercareerstats.PlayerCareerStats(player_id = player_id, per_mode36 = 'PerGame').get_data_frames()[0]
    player_stats_current_season = player_stats.iloc[-1]
    player_plus_minus_current_season = get_player_plus_minus(player_id)

    player_stats_list = [player_stats_current_season['GP'],
    player_stats_current_season['PTS'],
    player_stats_current_season['FG_PCT'],
    player_stats_current_season['FG3M'],
    player_stats_current_season['FT_PCT'],
    player_stats_current_season['REB'], 
    player_stats_current_season['TOV'],
    player_stats_current_season['STL'],
    player_stats_current_season['BLK'],
    player_stats_current_season['PF'],
    player_plus_minus_current_season]

    player_stats_array = np.array(player_stats_list).reshape(1, -1)

    return player_stats_list, player_stats_array

def transform_player_stats(player_name):
    stats_list, stats_array = fetch_player_stats(player_name)
    
    for i in range (len(stats_list)):
        stats_list[i]= str(stats_list[i])
        
    return stats_list


def get_estimated_rating(player_stats_array):
    return int(__model.predict(player_stats_array))


def main_pipeline(player_name):
    load_saved_artifacts()
    #print("Fetching player's stats...")
    stats_list, stats_array = fetch_player_stats(player_name)
    #print("Player's stats loaded!")
    #print("Calculating player's rating in the next release of the NBA2K game...")
    rating = get_estimated_rating(stats_array)
    #print('Calculation done!')
    #print('Estimated rating: ', rating)

    return rating