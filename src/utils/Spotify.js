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
            const authUrl = "https://accounts.spotify.com/authorize?response_type=token&client_id=2a44f8365b244bf69b81d7b1059d9993&redirect_uri=http://localhost:3000&&scope=playlist-modify-public";
            window.location = authUrl;
        }
    },

    async searchSpotify(userInput) {
        const accessToken = Spotify.getAccessToken();
        const endpoint = "search?";
        let searchParams = `q=${userInput}&type=album%2Cartist%2Ctrack`;
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
                console.log(jsonResponse);
                
            }
        } catch (error) {
            console.log(error);
        }        
    }
};

export default Spotify;
