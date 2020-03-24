import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants';

export const arrayFromInterger = (range) => Array.from(Array(range).keys(), i => i);

export const isRobotOnBorad = ({ x, y }) =>
          x <= 0 || x >= BOARD_WIDTH || y <= 0 || y >= BOARD_HEIGHT;


