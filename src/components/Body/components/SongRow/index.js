import React from 'react';
import { SongRowDiv, SongRowInfo, SongRowAlbumImage } from './styles';

function SongRow({ track }) {
    return (
        <SongRowDiv>
            <SongRowAlbumImage src={track.album.images[0].url}/>
            <SongRowInfo>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(", ")} -
                    {track.album.name}
                </p>
            </SongRowInfo>
        </SongRowDiv>
    );
}

export default SongRow;