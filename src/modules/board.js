import * as ship from './ship.js';

let board = ['', '', '', '', '', '', '', 
             '', '', '', '', '', '', '', 
             '', '', '', '', '', '', '', 
             '', '', '', '', '', '', '', 
             '', '', '', '', '', '', '', 
             '', '', '', '', '', '', '', 
             '', '', '', '', '', '', ''];

let pos = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

function gameInit() {
    ship.resetShips();
    const carrier = new ship.ShipConstructor("Carrier", 5, [pos[0], pos[1], pos[2], pos[3], pos[4]]);
    const battleship = new ship.ShipConstructor("Battleship", 4, [pos[5], pos[6], pos[7], pos[8]]);
    const destroyer = new ship.ShipConstructor("Destroyer", 3, [pos[9], pos[10], pos[11]]);
    const submarine = new ship.ShipConstructor("Submarine", 3, [pos[12], pos[13], pos[14]]);
    const patrolBoat = new ship.ShipConstructor("Patrol Boat", 2, [pos[15], pos[16]]);
    ship.ships.push(carrier, battleship, destroyer, submarine, patrolBoat);
}

export {board, pos, gameInit}