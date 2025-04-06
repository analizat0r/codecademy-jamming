# Jammming – React + Spotify API Project

This project was created as part of a Codecademy course. The goal was to build a React web application called **Jammming**. It allows users to search the Spotify library, create a custom playlist, and save it to their Spotify account.

The app demonstrates the use of:
- React components
- State management and prop passing
- API requests with the Spotify Web API

![Jammming Demo](assets/demo.gif)

---

## How the App Works

1. The access token is obtained from Spotify.
2. The access token is used to call various Spotify API endpoints.

### User Flow:

- User searches the Spotify library using a keyword. The `/search` endpoint is called.
- Returned results are displayed in a track list.
- User can add desired tracks to a playlist.
- User gives the playlist a name and saves it to their Spotify account.

### Saving a Playlist:

1. The app calls the `/me` endpoint to get the user's Spotify ID.
2. Using the returned ID, a playlist is created via `/users/${userID}/playlists`.
3. The selected tracks are added to the new playlist using `/playlists/${playlistID}/tracks`.
4. If all goes well, a confirmation alert is shown.

---

## Prerequisites

To use this project, you will need a **Spotify Developer Client ID**. You can get one from [Spotify Developer Dashboard](https://developer.spotify.com/documentation/web-api).

- Replace `CLIENT_ID` in the code with your actual Client ID.
- Replace `REDIRECT_URI` with the URI where your app is running (e.g. `http://localhost:3000`).

---

## Technologies Used

- **React** 19.0.0

---

## Getting Started

### Install dependencies:

```bash
npm install
```

### Run the app in development mode:
Run the app in development mode:

```bash
npm start
```
The app will start on http://localhost:3000 by default.

