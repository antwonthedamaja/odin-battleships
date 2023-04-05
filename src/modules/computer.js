import * as ship from "./ship";

function aiPlaceAll() {
    for (let i = 0; i < ship.computerShips.length; i++) {
        let x = Math.random();
        (x >= .5) ? ship.computerShips[i].aiRandomPlace() : ship.computerShips[i].aiRandomPlaceVertical();
    }
}

export {aiPlaceAll}