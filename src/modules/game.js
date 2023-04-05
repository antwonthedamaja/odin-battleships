import * as ship from "./ship";
import * as computer from './computer.js';

function initGame() {
    ship.shipInit();
    computer.aiPlaceAll();
}

function decideWinner() {
    if (ship.playerShips.every(item => item.alive === false)) {
        console.log('player dead');
    } else if (ship.computerShips.every(item => item.alive === false)){
        console.log('computer dead');
    }
}

export {initGame, decideWinner}