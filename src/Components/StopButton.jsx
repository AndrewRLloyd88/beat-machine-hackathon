import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import StopIcon from '@material-ui/icons/Stop';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const StopButton = (props) => {

  const classes = useStyles();
    return(
      <>
           <Button 
           variant="contained"
           color="default"
           className={classes.button}
           startIcon={<StopIcon/>}
           onClick={props.onClick}>Stop</Button>
      </>
    )
  }

export default StopButton;