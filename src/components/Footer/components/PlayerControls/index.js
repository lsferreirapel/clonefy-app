import React from 'react';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

function PlayerControls() {
    return (
        <>
            <ShuffleIcon className="footer__green"/>
            <SkipPreviousIcon className="footer__icon"/>
            <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
            <SkipNextIcon className="footer__icon"/>
            <RepeatIcon className="footer__green"/>
        </>
    )
}

export default PlayerControls();