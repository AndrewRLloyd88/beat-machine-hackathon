import React, { useEffect } from 'react';
import '../styles/index.css';
import { Button, makeStyles } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const PlayButton = (props) => {
  const classes = useStyles();

    return(
      <div>
      {props.isPlaying ? (<Button 
      variant="outlined"
      color="secondary"
      className={classes.button}
      disabled={props.isPlaying}
      onClick={props.onClick}>Playing...</Button>) : (<Button 
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<PlayCircleFilledWhiteIcon />}
        onClick={props.onClick}>Play</Button>)}
      </div>
    )
  }
export default PlayButton;