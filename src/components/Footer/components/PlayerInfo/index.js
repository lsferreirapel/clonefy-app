import React from 'react';

import { SongInfo, AlbumLogo} from './styles';

function PlayerInfo() {
    return (
        <>
            <AlbumLogo src="https://upload.wikimedia.org/wikipedia/pt/7/77/No_Mercy%2C_No_Fear.jpg" alt=""/>
            <SongInfo>
                <h4>Yeah!</h4>
                <p>Usher</p>
            </SongInfo> 
        </>
    )
}

export default PlayerInfo();