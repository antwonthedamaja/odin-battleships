import * as ship from "./ship";

let gameBoard = [['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', '']];

let testBoard = JSON.parse(JSON.stringify(gameBoard));

function saveState() {
    gameBoard = JSON.parse(JSON.stringify(testBoard));
}

function loadState() {
    testBoard = JSON.parse(JSON.stringify(gameBoard));
}

function recieveAttack(y, x) {

}

export {saveState, loadState, testBoard, gameBoard}