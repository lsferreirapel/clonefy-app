import './App.css';
import { useDataLayerValue } from '../../data/DataLayer';
import { getTokenFromUrl } from '../../services/spotify';
import React, { useEffect, useState } from 'react';
import LoginPage from '../LoginPage';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from '../../components/Player';

const spotify = new SpotifyWebApi();

function Home() {
  const [{ user, token }, dispatch] = useDataLayerValue();

    //Run code based on a given condition, every change in this case 
  useEffect(() => {
    // Get the token to access Spotify API
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      // Set Token on Data Layer
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      // Access the API
      spotify.setAccessToken(_token);


      // Get User from API and save on Data Layer
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, []);

  return (
    <div className="App">
      {
        // Checks if the user is logged in
        token ? (
          <>
            <h1>I am logged in</h1>
            <Player />
          </>
        ) : (
          // Redirect to login page
          <LoginPage />
        )
      }
    </div>
  );
}

export default Home;
