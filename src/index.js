import * as ship from './modules/ship.js';
import * as board from './modules/board.js';
import './style/style.css';

ship.shipInit();
ship.ships[0].setPos(1, 1);
console.table(board.gameBoard)
console.table(board.testBoard)