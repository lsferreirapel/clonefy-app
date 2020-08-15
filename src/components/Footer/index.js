import React from 'react';
import { FooterDiv, FooterLeft, FooterCenter, FooterRight, SongInfo, AlbumLogo } from './styles';

// icons import
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid } from '@material-ui/core';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

function Footer() {
    return (
        <FooterDiv>
            <FooterLeft>
                <AlbumLogo src="https://upload.wikimedia.org/wikipedia/pt/7/77/No_Mercy%2C_No_Fear.jpg" alt=""/>
                <SongInfo>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </SongInfo>
            </FooterLeft>
                
            <FooterCenter>
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </FooterCenter>

            <FooterRight>
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
            </FooterRight>
        </FooterDiv>
    )
}

export default Footer;