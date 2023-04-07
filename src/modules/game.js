import * as ship from "./ship";
import * as computer from './computer.js';
import * as display from './display.js';
import * as board from './board.js';

let gameState = false;
let playerTurn = false;

function initGame() {
    gameState = true;
    ship.shipInit();
    computer.aiPlaceAll();
}

function playerSwitch() {
    playerTurn = !playerTurn;
    console.table(board.computerBoard)
}

function endGame() {
    gameState = false;
    ship.resetShips();
    board.resetBoards();
    playerTurn = false;
}

function decideWinner() {
    if (ship.playerShips.every(item => item.alive === false)) {
        console.log('player dead');
        endGame();
        display.endGameDOM();
    } else if (ship.computerShips.every(item => item.alive === false)){
        console.log('computer dead');
        endGame();
        display.endGameDOM();
    }
}

export {initGame, decideWinner, endGame, playerSwitch, playerTurn, gameState}