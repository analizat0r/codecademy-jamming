# Jammming – React + Spotify API Project

This project was created as part of a CodeCademy course. The goal was to build a React web application called **Jammming**. It allows users to search the Spotify library, create a custom playlist, and save it to their Spotify account.

## The App Demonstrates the Use Of

* **React Components:** The application is built using functional React components (e.g., `App`, `Search`, `SearchResults`, `TrackList`, `PlayList`, `Track`).
* **State Management:** Component state is managed using React Hooks like `useState` and `useEffect` within the `App` component to handle search results, playlist tracks, and playlist names.
* **Props Passing:** Data and functions are passed down through the component tree using props. For example, `App` passes search results and add/remove track functions to child components.
* **Spotify API Requests:** The application interacts with the Spotify Web API to:
    * Authenticate the user and get an access token.
    * Search for tracks using the `/search` endpoint.
    * Get the user's ID using the `/me` endpoint.
    * Create a new playlist using the `/users/{userID}/playlists` endpoint.
    * Add tracks to a playlist using the `/playlists/{playlistID}/tracks` endpoint.
    * Fetch the user's existing playlists.
    * Fetch tracks from a specific playlist.
* **Modular CSS:** Styling is handled using CSS Modules to scope styles locally to components (e.g., `App.module.css`, `PlayList.module.css`).

## How the App Works

1.  **Authentication:** The app first checks if a Spotify access token exists. If not, it redirects the user to the Spotify authorization page. Once authorized, Spotify redirects back to the app with an access token in the URL, which the app extracts.
2.  **Get User ID:** The app fetches the user's Spotify ID using the access token.
3.  **Fetch User Playlists:** The user's existing Spotify playlists are fetched and displayed.
4.  **Search:** The user enters a search term in the search bar. Submitting the form triggers a call to the Spotify `/search` endpoint.
5.  **Display Results:** The search results (tracks) are displayed in the "RESULTS" section.
6.  **Build Playlist:** The user can add tracks from the search results to the custom playlist section by clicking the "+" button next to a track. Added tracks appear in the playlist section.
7.  **Open Existing Playlist:** Users can click on one of their existing playlists to load its tracks into the current playlist editor.
8.  **Remove Tracks:** Tracks can be removed from the custom playlist by clicking the "-" button.
9.  **Name and Save Playlist:** The user enters a name for the new playlist. Clicking "Save to Spotify" either creates a new playlist or updates an existing one (if opened):
    * If creating a new playlist, it first calls `/users/{userID}/playlists` to create it.
    * Then, it calls `/playlists/{playlistID}/tracks` to add the selected tracks (using their URIs) to the newly created or selected playlist.
10. **Confirmation:** An alert confirms if the playlist was saved successfully. The playlist list is refreshed.

## Prerequisites

To use this project locally, you will need a **Spotify Developer Client ID**.
You can get one from the [Spotify Developer Dashboard](https://developer.spotify.com/documentation/web-api).

* Open the `src/utils/Spotify.js` file.
* Replace the placeholder `CLIENT_ID` with your actual Client ID obtained from Spotify.
* Replace the placeholder `REDIRECT_URI` with the URI where your app will be running locally (usually `http://localhost:3000`). Make sure this Redirect URI is also added to your application settings on the Spotify Developer Dashboard.

## Technologies Used

* **React** (Version specified in `package.json` - currently 19.0.0)
* **CSS Modules** 
* **Fetch API** (for Spotify requests)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Spotify API Credentials:**
    * Follow the steps in the **Prerequisites** section above to add your Client ID and Redirect URI to `src/utils/Spotify.js`.

4.  **Run the app in development mode:**
    ```bash
    npm start
    ```

    The app will open automatically in your browser, usually at [http://localhost:3000](http://localhost:3000).