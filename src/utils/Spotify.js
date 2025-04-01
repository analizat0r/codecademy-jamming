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
            const authUrl = "https://accounts.spotify.com/authorize?response_type=token&client_id=2a44f8365b244bf69b81d7b1059d9993&redirect_uri=http://localhost:3000&scope=playlist-modify-public%20playlist-modify-private";
            window.location = authUrl;
        }
    },

    async searchSpotify(userInput) {
        const accessToken = Spotify.getAccessToken();
        const endpoint = "search?";
        let searchParams = `q=${userInput}&type=track`;
        const url = baseUrl+endpoint+searchParams;

        const headers = {
            "Authorization": `Bearer ${accessToken}`,
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
        const accessToken = Spotify.getAccessToken();
        const endpoint = "me";
        const url = baseUrl+endpoint;
        const headers = {
            "Authorization": `Bearer ${accessToken}`,
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
    async createPlaylist(){
        const accessToken = Spotify.getAccessToken();
        const userID = await Spotify.getUserID();        
        const endpoint = `users/${userID}/playlists`;
        const url = baseUrl + endpoint;
        const headers = {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        };
        // "data" object is a used for test. Should be replaced with actual data
        const data = { 
            "name": "test",
            "description": "New test description",
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
    }
};

export default Spotify;
