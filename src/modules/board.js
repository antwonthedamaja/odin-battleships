import * as ship from "./ship";
import * as game from './game.js';

let boardOriginal = [['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '']];

let gameBoard = structuredClone(boardOriginal);

let testBoard = structuredClone(boardOriginal);

let computerBoard = structuredClone(boardOriginal);

let computerTestBoard = structuredClone(boardOriginal);

function saveState() {
    gameBoard = structuredClone(testBoard);
}

function loadState() {
    testBoard = structuredClone(gameBoard);
}

function saveStateComputer() {
    computerBoard = structuredClone(computerTestBoard);
}

function loadStateComputer() {
    computerTestBoard = structuredClone(computerBoard);
}

function resetBoards() {
    gameBoard = structuredClone(boardOriginal);
    testBoard = structuredClone(boardOriginal);
    computerBoard = structuredClone(boardOriginal);
    computerTestBoard = structuredClone(boardOriginal);
}

function recieveAttack(y, x) {
    if (gameBoard[y][x] === 'X' || game.playerTurn === true) {
        console.log('attack rejected');
        return;
    } else if (gameBoard[y][x] != '') {
        ship.playerShips.forEach(item => {
            if (gameBoard[y][x] === item.name) {
                item.hit();
                gameBoard[y][x] = 'X';
            }
        });
    } else {
        gameBoard[y][x] = 'X';
    }
    loadState();
    game.playerSwitch();
}

function recieveAttackComputer(y, x) {
    if (computerBoard[y][x] === 'X' || game.playerTurn === false) {
        console.log('attack rejected');
        return;
    } else if (computerBoard[y][x] != '') {
        ship.computerShips.forEach(item => {
            if (computerBoard[y][x] === item.name) {
                item.hit();
                computerBoard[y][x] = 'X';
            }
        });
        game.playerSwitch();
        return 'hit';
    } else {
        computerBoard[y][x] = 'X';
        game.playerSwitch();
        return 'miss';
    }
}

export {recieveAttack, recieveAttackComputer, saveState, loadState, 
    saveStateComputer, loadStateComputer, resetBoards, computerBoard, testBoard, 
    gameBoard, computerTestBoard}