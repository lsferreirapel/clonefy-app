import React from 'react';

import Header from '../Header';
import SongRow from './components/SongRow';

import { useDataLayerValue } from '../../data/DataLayer';
import { BodyDiv, BodyInfo, BodyInfoText, BodySongs, BodyIcons } from './styles';

// Icons import
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ playlist }) {
  const [{ my_playlists }, dispatch] = useDataLayerValue();

  return (
    <BodyDiv>
        <Header />

        <BodyInfo>
          <img src={playlist?.images[0]?.url} alr=""/>
          <BodyInfoText>
            <strong>PLAYLIST</strong>
            <h2>{playlist?.name}</h2>
            <p>{playlist?.description}</p>
          </BodyInfoText>
        </BodyInfo>

        <BodySongs>
          <BodyIcons>
            <PlayCircleFilledIcon className="body__shuffle"/>
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </BodyIcons>

          {/* List of songs */}
          {playlist?.tracks.items.map(item => (
            <SongRow track={item.track} />
          ))}
        </BodySongs>
    </BodyDiv>
  )
}

export default Body;