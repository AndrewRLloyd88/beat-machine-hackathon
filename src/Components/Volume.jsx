import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeDown from '@material-ui/icons/VolumeDown';
import Grid from '@material-ui/core/Grid';
import '../styles/index.css';



const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Volume = (props) => {
  const classes = useStyles();
  // console.log("at vloume ")
  // console.log(props.volNum)

 
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown className="volIcon" fontSize="large"/>
        </Grid>
        <Grid item xs>
          <PrettoSlider value={props.volNum} onChange={props.onChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp className="volIcon" fontSize="large"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Volume