import { useDataLayerValue } from '../data/DataLayer';

const [{ my_playlists }, dispatch] = useDataLayerValue();

// export function getTrackInfo(playlistID, trackNumber) {
//     return my_playlists.reduce(playlist => {
//         if(playlist.id === playlistID) {
//             return trackInfo = {
//                 trackTitle: music.track.name,
//                 artists: playlist.tacks.items[trackNumber].track.album.artists.map(artist => artist.name).join(", "),
//                 albumImage: playlist.tacks.items[trackNumber].track.album.images[0].url,
//                 musicPreview: playlist.tacks.items[trackNumber].track.preview_url,
//             };
//         };   
//     });
// };

export function getPlayListFromUrl(playlistID) {
    return my_playlists.reduce(playlist => {
        if(playlist.id === playlistID) {
            return playlist;
        };   
    })
};


