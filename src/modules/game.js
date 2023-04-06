import * as ship from "./ship";
import * as computer from './computer.js';
import * as display from './display.js';

let gameState = false;
let placeState = false;

function initGame() {
    gameState = true;
    setPlaceState('c');
    ship.shipInit();
    computer.aiPlaceAll();
}

function setPlaceState(setting) {
    placeState = setting;
}

function decideWinner() {
    if (ship.playerShips.every(item => item.alive === false)) {
        console.log('player dead');
    } else if (ship.computerShips.every(item => item.alive === false)){
        console.log('computer dead');
    }
}

export {initGame, decideWinner, setPlaceState, gameState, placeState}