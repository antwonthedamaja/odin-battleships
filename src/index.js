import * as ship from './modules/ship.js';
import * as board from './modules/board.js';
import * as game from './modules/game.js';
import './style/style.css';

ship.shipInit();
ship.playerShips[3].setPos(4, 4);
console.table(board.gameBoard);