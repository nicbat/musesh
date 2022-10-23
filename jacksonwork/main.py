import spotipy
from spotipy import SpotifyOAuth

client_id = '9a70f79d75dd424cb4a19ef4b0ebb60e'  # Need to hide this
client_secret = "9456d1186f804ce5ba9513ec6ebc5d49"
redirect_uri = "http://127.0.0.1:8000/spotify/callback/"
scope = "playlist-modify-public user-top-read user-library-read"
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,
                                               client_secret=client_secret,
                                               redirect_uri=redirect_uri,
                                               scope=scope))

# Generates recommendations from a given Spotify user library
def generate_from_user_library():
    top_tracks = sp.current_user_top_tracks(limit=50)
    artist_set = set([])
    seed_tracks = []
    for idx, item in enumerate(top_tracks['items']):
        seed_tracks.append(item['id'])
        artist_set.add(item['artists'][0]['id'])
    artists = list(artist_set)

    total_recommendations = []
    results = sp.recommendations(seed_artists=artists[0:5])  # If time, add more recs
    results2 = sp.recommendations(seed_tracks=seed_tracks[0:5])
    for item in results['tracks']:
        total_recommendations.append(item['id'])
    for item in results2['tracks']:
        total_recommendations.append(item['id'])

    f = open('UserRecs/%s.txt' % sp.me()['id'], "w")
    for item in total_recommendations:
        f.writelines(item + '\n')
    f.close()

    return total_recommendations


# Grabs specific playlist from my personal library for testing purposes
def temp_grab_playlist():
    playlists = sp.current_user_playlists()
    test_playlist = None

    while playlists:
        for i, playlist in enumerate(playlists['items']):
            if playlist['name'] == "Best Of DG":
                test_playlist = playlist
        if playlists['next']:
            playlists = sp.next(playlists)
        else:
            playlists = None
    return test_playlist, sp


# Generates recommendations from a given Spotify playlist and user authentication
def generate_from_playlist(playlist):
    tracks = sp.playlist_items(playlist['id'])

    a = set([])
    seed_tracks = []
    for idx, item in enumerate(tracks['items']):
        track = item['track']
        seed_tracks.append(track['id'])
        a.add(track['artists'][0]['id'])
    artists = list(a)

    total_recommendations = []
    recs = sp.recommendations(seed_artists=artists[0:5])
    recs2 = sp.recommendations(seed_tracks=seed_tracks[0:5])

    total_recommendations.append(recs)
    total_recommendations.append(recs2)

    return total_recommendations


def generate_playlist(track_list):
    ident = sp.user_playlist_create(sp.me()['id'], name="Musesh Recommended")
    sp.playlist_add_items(ident['id'], track_list, 0)


def combine_recs(user_ids):
    total_list = []
    for uid in user_ids:
        f = open("UserRecs/%s.txt" % uid, "r")
        current_list = f.read().splitlines()
        total_list.append(current_list)
        f.close()

    tracks = []
    for t in total_list:
        tracks.append(sp.tracks(t))

    a = set([])
    seed_tracks = []
    for elem in tracks:
        for track in elem['tracks']:
            # print(track)
            seed_tracks.append(track['id'])
            a.add(track['artists'][0]['id'])
    artists = list(a)

    total_recommendations = []
    recs = sp.recommendations(seed_artists=artists[0:5])
    recs2 = sp.recommendations(seed_tracks=seed_tracks[0:5])

    total_recommendations.append(recs)
    total_recommendations.append(recs2)
    return total_recommendations

def to_json(track_list):
    track = sp.tracks(track_list)
    big_d = {}
    c = 0
    for t in track['tracks']:
        d = {}
        values = [t['name'], t['album']['name'], t['artists'][0]['name'], t['id'], t['album']['images'][2]['url']]
        d['name'] = values[0]
        d['album'] = values[1]
        d['artist'] = values[2]
        d['id'] = values[3]
        d['image'] = values[4]
        big_d[c] = d
        c += 1
    return big_d


if __name__ == '__main__':
    tl = generate_from_user_library()
    to_json(tl)
    # combine_recs(["e5axj2z4c8mrpix8d47f4wxmm"])
    # generate_playlist(tl)
    # generate_from_playlist(temp_grab_playlist()[0], temp_grab_playlist()[1])
