import React from 'react';

import { Grid } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';

function PlayerSongControls() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
        </>
    )
}

export default PlayerSongControls();