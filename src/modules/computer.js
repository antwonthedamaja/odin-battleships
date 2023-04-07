import * as board from './board.js';
import * as ship from "./ship";
import * as display from './display.js';
import * as game from './game.js';

function aiPlaceAll() {
    for (let i = 0; i < ship.computerShips.length; i++) {
        let x = Math.random();
        (x >= .5) ? ship.computerShips[i].aiRandomPlace() : ship.computerShips[i].aiRandomPlaceVertical();
    }
}

function launchAttack() {
    let y = Math.floor(Math.random() * 7);
    let x = Math.floor(Math.random() * 7);
    setTimeout(() => {
        let result = board.recieveAttack(y, x);
        if (!result) {
            launchAttack();
        } else {
            display.changePlayerBoard(y, x, result);
            game.playerSwitch();
        }
    }, 125);
}

export {aiPlaceAll, launchAttack}