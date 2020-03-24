import { BOARD_CELLS, BOARD_WIDTH, BOARD_HEIGHT } from '../constants'

// Set/Reset Robot position on board
export const setRobotPostion = (store, newPos) => {
  let { x, y} = newPos
  x = x > 0 ? x * BOARD_CELLS : store.state.x;
  y = y > 0 ? y * BOARD_CELLS : store.state.y;
  store.setState({x: x, y: y});
};

// Move Robot position right
  export const moveRight = (store, newPos) => {
    if (newPos.x >= BOARD_WIDTH) return;
    store.setState({x: newPos.x + BOARD_CELLS, y: newPos.y});
  };

  // Move robot position left
  export const moveLeft = (store, newPos) => {
    if (newPos.x <= 0) return;
    store.setState({x: newPos.x - BOARD_CELLS, y: newPos.y});
  };
  
  // Move robot position Down
  export const  moveDown = (store, newPos) => {
    if (newPos.y <= 0) return;
    store.setState({x: newPos.x, y: newPos.y - BOARD_CELLS});
  };

  // Move robot position Up
  export const moveUp = (store, newPos) => {
    if (newPos.y >= BOARD_HEIGHT) return;
    store.setState({x: newPos.x, y: newPos.y + BOARD_CELLS});
  };
