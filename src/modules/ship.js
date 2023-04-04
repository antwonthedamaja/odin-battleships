let ships = [];

function ShipConstructor(name, health, pos) {
    this.name = name;
    this.health = health;
    this.pos = pos;
    this.alive = true;
}

ShipConstructor.prototype.isSunk = function() {
    if (this.health <= 0) {
        this.alive = false;
    }
}

ShipConstructor.prototype.hit = function() {
    this.health--;
}

function resetShips() {
    ships = [];
}

export {resetShips, ships, ShipConstructor}