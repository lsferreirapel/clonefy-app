import './App.css';
import LoginPage from '../LoginPage';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from '../../services/spotify';

function Home() {
  const [token, setToken] = useState(null);

    //Run code based on a given condition 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log('I HAVE A TOKEN =>>', token);
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>I am logged in</h1>  
        ) : (
          <LoginPage />
        )
      }
    </div>
  );
}

export default Home;
