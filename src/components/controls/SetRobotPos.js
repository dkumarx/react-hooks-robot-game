import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useGlobal from "../../store";
import { BOARD_DIMENSION } from '../../constants'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      display:"flex",
      justifyContent: "center",
      marginTop: 20,
    },
    textField: {
        maxHeight: 10,
        maxWidth: 36,
        paddingRight: 10
    }
  }),
);



const SetRobotPos = () => {
  const classes = useStyles();
  const [xpos, setXValue] = useState(0);
  const [ypos, setYValue] = useState(0);
  const [globalState ,globalActions] = useGlobal();

  const x = parseInt(xpos) || 0;
  const y = parseInt(ypos) || 0;
  return (
    <Grid container className={classes.root} spacing={2}>
        <form noValidate autoComplete="off">
            <TextField 
                onChange={
                    e => (e.target.value.length === 1 && parseInt(e.target.value) < BOARD_DIMENSION.x) 
                    ? setXValue(e.target.value) : setXValue(0)
                } 
                className={classes.textField} 
                label="X" variant="outlined" />
            <TextField 
                onChange={
                    e => (e.target.value.length === 1 && parseInt(e.target.value) < BOARD_DIMENSION.y) 
                    ? setYValue(e.target.value) : setYValue(0)
                } 
                className={classes.textField} 
                label="Y" variant="outlined" />
            <Button  
                onClick={() => globalActions.setRobotPostion({x, y})} 
                style={{width: 186, height: 56}} 
                variant="outlined" 
                color="primary">Set position</Button>
        </form>
    </Grid>
  );
}

export default SetRobotPos;