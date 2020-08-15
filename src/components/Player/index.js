import React from 'react';
import { PlayerDiv, PlayerBody } from './styles';
import SideBar from '../SideBar';
import Body from '../Body';
import Footer from '../Footer';

function Player({ spotify }) {
  return (
    <PlayerDiv>
      <PlayerBody>
        <SideBar />
        <Body spotify={spotify}/>
      </PlayerBody>
        

      <Footer />
    </PlayerDiv>
  )
}

export default Player;