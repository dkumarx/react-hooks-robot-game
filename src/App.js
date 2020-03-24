import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { BOARD_WIDTH, BOARD_HEIGHT } from './constants';
import RobotBoardPlayArea from './components/board';
import RobotComponent from './components/robot';
import NavigationalButtons from './components/controls/NavigationalButtons'
import SetRobotPos from './components/controls/SetRobotPos'
import Status from './components/controls/Status'

const RobotApp = () => {
    return (
       <Grid container spacing={2}  square style={{margin: 20}}>
          <Paper variant="outlined"  elevation={3} square style={{ position: "relative", marginRight: 20}}>
            <RobotBoardPlayArea /> 
            <RobotComponent />
          </Paper>   
          <Paper  variant="outlined"  elevation={3} square  square style={{padding: 20}}>
              <Status />
              <NavigationalButtons />
              <SetRobotPos />
          </Paper>
          
      </Grid>
    )
}

export default RobotApp;