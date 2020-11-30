import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import StopIcon from '@material-ui/icons/Stop';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const PlayButton = (props) => {
  const classes = useStyles();

const changButton = () => {
  if (props.isPlaying){
    return <StopIcon/>
  }
  else {
    return <PlayCircleFilledWhiteIcon />
  }
}

    return(
      <>
        <Button 
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={changButton()}
        onClick={props.onClick}>Play</Button>
      </>
    )
  }

export default PlayButton;