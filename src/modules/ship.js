import * as board from './board.js';

let playerShips = [];
let computerShips = [];

function ShipConstructor(name, health) {
    this.name = name;
    this.health = health;
    this.alive = true;
}

function resetShips() {
    computerShips = [];
    playerShips = [];
}

function shipInit() {
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

ShipConstructor.prototype.setPos = function(y, x) {
    // y = parseInt(y);
    // x = parseInt(x);
    for (let i = 0; i < this.health; i++) {
        if (board.testBoard[y][x] != '') {
            board.loadState();
            return;
        }
        board.testBoard[y][x] = this.name;
        x++;
    }
    board.saveState();
    return true;
}

ShipConstructor.prototype.setPosVertical = function(y, x) {
    for (let i = 0; i < this.health; i++) {
        if (!board.testBoard[y] || board.testBoard[y][x] != '') {
            board.loadState();
            return;
        }
        board.testBoard[y][x] = this.name;
        y++;
    }
    board.saveState();
    return true;
}

ShipConstructor.prototype.aiRandomPlace = function() {
    let y = Math.floor(Math.random() * 7);
    let x = Math.floor(Math.random() * 7);
    for (let i = 0; i < this.health; i++) {
        if (!board.computerTestBoard[y] || board.computerTestBoard[y][x] != '') {
            board.loadStateComputer();
            return this.aiRandomPlace();
        }
        board.computerTestBoard[y][x] = this.name;
        x++;
    }
    board.saveStateComputer();
}

ShipConstructor.prototype.aiRandomPlaceVertical = function() {
    let y = Math.floor(Math.random() * 7);
    let x = Math.floor(Math.random() * 7);
    for (let i = 0; i < this.health; i++) {
        if (!board.computerTestBoard[y] || board.computerTestBoard[y][x] != '') {
            board.loadStateComputer();
            return this.aiRandomPlace();
        }
        board.computerTestBoard[y][x] = this.name;
        y++;
    }
    board.saveStateComputer();
}

ShipConstructor.prototype.hit = function() {
    this.health--;
    console.log(this.name, 'hit', this.health)
    if (this.health <= 0) {
        this.alive = false;
        game.decideWinner()
    }
}

export {shipInit, resetShips, playerShips, computerShips}