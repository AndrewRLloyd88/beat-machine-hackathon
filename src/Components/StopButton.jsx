import React from 'react';
import '../styles/index.css';
import StopIcon from '@material-ui/icons/Stop';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#330704',
    border: '1px solid',
    borderColor: '#000',
    '&:hover': {
      backgroundColor: '#440704',
      color: '#FFF',
      border: '1px solid',
      borderColor: '#FFF'
  }
  },
}));

const StopButton = (props) => {

  const classes = useStyles();
    return(
      <>
           <Button 
           variant="contained"
           color="secondary"
           className={classes.button}
           startIcon={<StopIcon/>}
           disabled={!props.isPlaying}
           onClick={props.onClick}>Stop</Button>
      </>
    )
  }

export default StopButton;