import * as board from './board.js';

let ships = [];

function shipInit() {
    resetShips();
    const carrier = new ShipConstructor("C", 5);
    const battleship = new ShipConstructor("B", 4);
    const destroyer = new ShipConstructor("D", 3);
    const submarine = new ShipConstructor("S", 3);
    const patrolBoat = new ShipConstructor("P", 2);
    ships.push(carrier, battleship, destroyer, submarine, patrolBoat);
}

function resetShips() {
    ships = [];
}

function ShipConstructor(name, health) {
    this.name = name;
    this.health = health;
    this.alive = true;
}

ShipConstructor.prototype.setPos = function(y, x) {
    for (let i = 0; i < this.health; i++) {
        if (board.board[y][x] != '') {
            console.log('error from ship.js');
            board.resetTestBoard();
            return;
        }
        board.testBoard[y][x] = this.name;
        x++;
        console.log('good')
    }
}

ShipConstructor.prototype.setPosVertical = function(y, x) {
    for (let i = 0; i < this.health; i++) {
        if (board.board[y][x] != '' || !board[y]) {
            console.log('error from ship.js');
            board.resetTestBoard();
            return;
        }
        board.testBoard[y][x] = this.name;
        y++;
        console.log('good')
    }
}

ShipConstructor.prototype.isSunk = function() {
    if (this.health <= 0) {
        this.alive = false;
    }
}

ShipConstructor.prototype.checkForHit = function(x) {

}

export {shipInit, resetShips, ships}