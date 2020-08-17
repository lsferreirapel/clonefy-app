import { HomeDiv } from './styles';
import { useDataLayerValue } from '../../data/DataLayer';
import { getTokenFromUrl } from '../../services/spotify';
import React, { useEffect } from 'react';
import LoginPage from '../LoginPage';
import SpotifyWebApi from 'spotify-web-api-js';

import HomeBody from '../../components/HomeBody';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

const spotify = new SpotifyWebApi();

function Home() {
  document.title = "Clonefy - Web player";

  const [{ token, my_playlists }, dispatch] = useDataLayerValue();

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
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });

        playlists.items.map(playlist => {
          spotify.getPlaylist(playlist.id).then(response => {
            dispatch({
              type: `SET_MY_PLAYLIST_ITEM`,
              playlist_item: response,
            });
          });
        });
        
      });
    }
  }, []);

  return (
    <div className="App">
      {
        // Checks if the user is logged in
        token ? (
          <HomeDiv>
            <SideBar />
            <HomeBody />
            <Footer />
          </HomeDiv>
        ) : (
          // Redirect to login page
          <LoginPage />
        )
      }
    </div>
  );
}

export default Home;
