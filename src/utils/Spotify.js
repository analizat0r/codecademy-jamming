const REDIRECT_URI = "http://localhost:3000";
const CLIENT_ID = "2a44f8365b244bf69b81d7b1059d9993";

const baseUrl = "https://api.spotify.com/v1/";
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
    
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const tokenExpirationMatch = window.location.href.match(/expires_in=([^&]*)/);
    
        if (accessTokenMatch && tokenExpirationMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(tokenExpirationMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=playlist-modify-public%20playlist-modify-private%20playlist-read-private`;
            window.location = authUrl;
        }
    },

    async searchSpotify(userInput) {
        const endpoint = "search?";
        let searchParams = `q=${userInput}&type=track`;
        const url = baseUrl+endpoint+searchParams;

        const headers = {
            "Authorization": `Bearer ${this.getAccessToken()}`,
            "Content-Type": "application/json"
        }

        try {
            const response = await fetch(url, { 
                method: "GET", 
                headers: headers 
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.tracks.items.map((track) => ({
                    id: track.id,
                    album: track.album.name,
                    artist: track.artists[0].name,
                    track: track.name,
                    uri: track.uri
                }))
                
            }
        } catch (error) {
            console.log(error);
        }        
    },

    async getUserID(){    
        const endpoint = "me";
        const url = baseUrl+endpoint;
        const headers = {
            "Authorization": `Bearer ${this.getAccessToken()}`,
            "Content-Type": "application/json"
        };
        try {
            const response = await fetch(url, { 
                method: "GET", 
                headers: headers 
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.id;
            }
        } catch (error) {
            alert("Couldn't get user id " + error);
        } 
    },
    async createPlaylist(playListName){
        const userID = await Spotify.getUserID();        
        const endpoint = `users/${userID}/playlists`;
        const url = baseUrl + endpoint;
        const headers = {
            "Authorization": `Bearer ${this.getAccessToken()}`,
            "Content-Type": "application/json"
        };
        const data = { 
            "name": `${playListName}`,
            "public": false
        };

        try {
            const response = await fetch(url, { 
                method: "POST", 
                headers: headers,
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.id;
            }
        } catch (error) {
            alert("Couldn't save the playlist " + error);
        }
    },
    async addToPlayList(playListName, tracks) {
        const playlistID = await Spotify.createPlaylist(playListName);
        const endpoint = `playlists/${playlistID}/tracks`;
        const url = baseUrl + endpoint;
        const headers = {
            "Authorization": `Bearer ${this.getAccessToken()}`,
            "Content-Type": "application/json"
        };
        const data = {
            "uris": tracks,
            "position": 0
        };
        try {
            const response = await fetch(url, { 
                method: "POST", 
                headers: headers,
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.snapshot_id;
            }
        } catch (error) {
            alert("Couldn't create a playlist " + error);
        }
    },

    async getPlaylists() {
        const userID = await Spotify.getUserID();        
        const endpoint = `users/${userID}/playlists`;
        const url = baseUrl + endpoint;
        const headers = {
            "Authorization": `Bearer ${this.getAccessToken()}`,
            "Content-Type": "application/json"
        };
        try {
            const response = await fetch(url, { 
                method: "GET", 
                headers: headers 
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.items.map((playlist) => ({
                    id: playlist.id,
                    name: playlist.name
                }))
            }
        } catch (error) {
            alert("Couldn't get list of playlists " + error);
        } 
    },

    async openPlaylist(playlist_id) {
        const endpoint = `playlists/${playlist_id}/tracks`;
        const url = baseUrl + endpoint;
        const headers = {
            "Authorization": `Bearer ${this.getAccessToken()}`,
            "Content-Type": "application/json"
        };
        try {
            const response = await fetch(url, { 
                method: "GET", 
                headers: headers 
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.items.map((item) => ({
                    id: item.track.id,
                    album: item.track.album.name,
                    artist: item.track.artists[0].name,
                    track: item.track.name,
                    uri: item.track.uri
                }));
            }
        } catch (error) {
            alert("Couldn't get list of playlists " + error);
        }
    }
};

export default Spotify;