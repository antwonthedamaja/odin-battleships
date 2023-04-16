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
}

function endGame() {
    gameState = false;
    ship.resetShips();
    board.resetBoards();
    playerTurn = false;
}

let computerScore = 0;
let playerScore = 0;

function decideWinner() {
    if (ship.playerShips.every(item => item.alive === false)) {
        computerScore++;
        display.changeStatus(`Computer Wins! ${playerScore} - ${computerScore}`);
        endGame();
        display.endGameDOM();
    } else if (ship.computerShips.every(item => item.alive === false)){
        playerScore++;
        display.changeStatus(`Player Wins! ${playerScore} - ${computerScore}`);
        endGame();
        display.endGameDOM();
        return true;
    }
}

export {initGame, decideWinner, endGame, playerSwitch, playerTurn, gameState}