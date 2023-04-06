import * as ship from "./ship";
import * as computer from './computer.js';
import * as display from './display.js';
import * as board from './board.js';

let gameState = false;

function initGame() {
    gameState = true;
    ship.shipInit();
    computer.aiPlaceAll();
}

function endGame() {
    gameState = false;
    ship.resetShips();
    board.resetBoards();
}

function decideWinner() {
    if (ship.playerShips.every(item => item.alive === false)) {
        console.log('player dead');
    } else if (ship.computerShips.every(item => item.alive === false)){
        console.log('computer dead');
    }
}

export {initGame, decideWinner, endGame, gameState}