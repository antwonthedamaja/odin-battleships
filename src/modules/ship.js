import * as board from './board.js';
import * as computer from './computer.js';

let playerShips = [];
let computerShips = [];

function shipInit() {
    resetShips();
    const carrier = new ShipConstructor("C", 5);
    const battleship = new ShipConstructor("B", 4);
    const destroyer = new ShipConstructor("D", 3);
    const submarine = new ShipConstructor("S", 3);
    const patrolBoat = new ShipConstructor("P", 2);
    playerShips.push(carrier, battleship, destroyer, submarine, patrolBoat);
    const carrierAI = new ShipConstructor("C", 5);
    const battleshipAI = new ShipConstructor("B", 4);
    const destroyerAI = new ShipConstructor("D", 3);
    const submarineAI = new ShipConstructor("S", 3);
    const patrolBoatAI = new ShipConstructor("P", 2);
    computerShips.push(carrierAI, battleshipAI, destroyerAI, submarineAI, patrolBoatAI);
}

function resetShips() {
    computerShips = [];
    playerShips = [];
}

function ShipConstructor(name, health) {
    this.name = name;
    this.health = health;
    this.alive = true;
}

ShipConstructor.prototype.setPos = function(y, x) {
    for (let i = 0; i < this.health; i++) {
        if (board.testBoard[y][x] != '') {
            console.log('error from ship.js');
            board.loadState();
            return;
        }
        board.testBoard[y][x] = this.name;
        x++;
    }
    board.saveState();
}

ShipConstructor.prototype.setPosVertical = function(y, x) {
    for (let i = 0; i < this.health; i++) {
        if (!board.testBoard[y] || board.testBoard[y][x] != '') {
            console.log('error from ship.js');
            board.loadState();
            return;
        }
        board.testBoard[y][x] = this.name;
        y++;
    }
    board.saveState();
}

ShipConstructor.prototype.hit = function() {
    this.health--;
    console.log(this.name, 'hit', this.health,)
    if (this.health <= 0) {
        this.alive = false;
        game.decideWinner()
    }
}

export {shipInit, resetShips, playerShips, computerShips}