const ship = (() => {
    let ships = [];

    function ShipConstructor(name, health) {
        this.name = name;
        this.health = health;
    }
    ShipConstructor.prototype.checkHealth = function() {
        console.log(this.health);
    }
    ShipConstructor.prototype.hit = function() {
        this.health--;
    }
    
    const shipInit = () => {
        ships = [];
        const carrier = new ShipConstructor("Carrier", 5);
        const battleship = new ShipConstructor("Battleship", 4);
        const destroyer = new ShipConstructor("Destroyer", 3);
        const submarine = new ShipConstructor("Submarine", 3);
        const patrolBoat = new ShipConstructor("Patrol Boat", 2);
        ships.push(carrier, battleship, destroyer, submarine, patrolBoat);
    };

    shipInit();

    return {
        ships,
        shipInit
    };
})();

export default ship