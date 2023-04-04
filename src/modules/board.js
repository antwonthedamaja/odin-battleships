import * as ship from "./ship";

let gameBoard = [['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', '']];

let testBoard = structuredClone(gameBoard);

function saveState() {
    gameBoard = structuredClone(testBoard);
}

function loadState() {
    testBoard = structuredClone(gameBoard);
}

function recieveAttack(y, x) {
    if (gameBoard[y][x] === 'X') {
        console.log('attack rejected');
        return;
    }
    if (gameBoard[y][x] != '') {
        ship.playerShips.forEach(item => {
            if (gameBoard[y][x] === item.name) {
                item.hit();
                gameBoard[y][x] = 'X';
            }
        });
    } else {
        gameBoard[y][x] = 'X';
    }
    loadState()
}

export {recieveAttack, saveState, loadState, testBoard, gameBoard}