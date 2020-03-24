import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useGlobal from "../../store";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 30,
      fontWeight: "bold",
      marginBottom: 20
    },
  }),
);

const Status = () => {
    const classes = useStyles();
    const [globalState] = useGlobal();
    return (
      <Paper className={classes.root}>
         Status: {globalState.x/50} {globalState.y/50}
      </Paper>
    );
  }

export default Status;