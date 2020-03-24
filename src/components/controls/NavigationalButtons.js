import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useGlobal from "../../store";

// Styling
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
);

const NavigationalButtons = () => {
    const classes = useStyles();
    const [globalState, globalActions] = useGlobal();
    const { x, y } = globalState;
    return (
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={() => globalActions.moveLeft({x, y})}>Left</Button>
            <Button onClick={() => globalActions.moveRight({x, y})}>Right</Button>
            <Button onClick={() => globalActions.moveUp({x, y})}>Up</Button>
            <Button onClick={() => globalActions.moveDown({x, y})}>Down</Button>
        </ButtonGroup>
      </div>
    );
  }

export default NavigationalButtons;