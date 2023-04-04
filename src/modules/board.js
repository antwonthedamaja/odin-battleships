import * as ship from "./ship";

let board = [['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', ''],
             ['', '', '', '', '', '', '']];

let testBoard = board;

function resetTestBoard() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            testBoard[i][j] = '';
        }
    }
}

export {resetTestBoard, testBoard, board}