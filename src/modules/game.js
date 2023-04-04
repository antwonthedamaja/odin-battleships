import * as ship from "./ship";

function decideWinner() {
    if (ship.playerShips.every(item => item.alive === false)) {
        console.log('player dead');
    } else if (ship.computerShips.every(item => item.alive === false)){
        console.log('computer dead');
    }
}

export {decideWinner}