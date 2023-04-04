import * as ship from './modules/ship.js';
import * as board from './modules/board.js';
import './style/style.css';

ship.shipInit();
ship.ships[0].setPosVertical(5, 5);
console.table(board.testBoard);