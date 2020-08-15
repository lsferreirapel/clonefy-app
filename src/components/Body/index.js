import React from 'react';

import Header from './components/Header';
import SongRow from './components/SongRow';

import { useDataLayerValue } from '../../data/DataLayer';
import { BodyDiv, BodyInfo, BodyInfoText, BodySongs, BodyIcons } from './styles';

// Icons import
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <BodyDiv>
        <Header spotify={spotify}/>

        <BodyInfo>
          <img src={discover_weekly?.images[0]?.url} alr=""/>
          <BodyInfoText>
            <strong>PLAYLIST</strong>
            <h2>{discover_weekly?.name}</h2>
            <p>{discover_weekly?.description}</p>
          </BodyInfoText>
        </BodyInfo>

        <BodySongs>
          <BodyIcons>
            <PlayCircleFilledIcon className="body__shuffle"/>
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </BodyIcons>

          {/* List of songs */}
          {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track} />
          ))}
        </BodySongs>
    </BodyDiv>
  )
}

export default Body;