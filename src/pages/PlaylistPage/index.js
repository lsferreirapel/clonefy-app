import { PlayerDiv, PlayerBody } from './styles';
import { useDataLayerValue } from '../../data/DataLayer';

import React from 'react';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import Body from '../../components/Body';

function PlaylistPage(props) {
  const [{ my_playlists }, dispatch] = useDataLayerValue();

  function getPlayListFromID(playlistID) {
    return my_playlists.filter(playlist => {
        if(playlist.id === playlistID) {
            return playlist;
        };   
    })[0];
  };

  const playlist = getPlayListFromID(props.match.params.id);

  document.title = `Clonefy ${ playlist ? ("- " + playlist.name) : ""}`;

  return (
      <PlayerDiv>
        <PlayerBody>
          <SideBar />
          <Body playlist={playlist}/>
        </PlayerBody>

        <Footer />
      </PlayerDiv>
    )
}

export default PlaylistPage;