import React from 'react';
import Paper from '@material-ui/core/Paper';
import { arrayFromInterger } from '../../utils';
import { BOARD_MAX_WIDTH, BOARD_DIMENSION, BOARD_CELLS } from '../../constants';

const rows = arrayFromInterger(BOARD_DIMENSION.x);
const columns = arrayFromInterger(BOARD_DIMENSION.y);


const RobotBoardPlayArea = () => {
    return (
        rows.map(row => (
            <div style={{height: BOARD_CELLS, width: BOARD_MAX_WIDTH, padding:0, margin:0,  display:"flex", flexDirection: "columns"}}>
            {
                columns.map(i => (
                  <Paper style={{width: BOARD_CELLS, height:BOARD_CELLS, flexDirection: "row"}} variant="outlined" square key={`row-${row}`} />
                ))
            }
            </div>
        ))
    )
}

export default RobotBoardPlayArea;