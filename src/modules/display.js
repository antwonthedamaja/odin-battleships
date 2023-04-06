import * as game from './game.js';
import * as logic from './logic.js';
import * as ship from "./ship";

const button = document.querySelector('#start');

button.addEventListener('click', () => {
    if (game.gameState === false) {
        game.initGame();
        button.textContent = 'Cancel?';
    } else if (game.gameState === true) {
        button.textContent = 'Start?';
    }
});

const tiles = document.querySelectorAll('.player.tile');
let tilesArray = Array.from(tiles);
tilesArray = logic.listToMatrix(tilesArray, 7);
console.table(tilesArray);

tiles.forEach((tile, index) => {
    let data = logic.indexToArray(index);
    tile.setAttribute('data-index', index);
    tile.setAttribute('data-array', `${data[0]}` + ' ' + `${data[1]}`);
    tile.addEventListener("click", handleClick);
    tile.addEventListener("mouseover", handleMouse);
    tile.addEventListener("mouseout", handleMouseOut);
});

function handleMouseOut() {
    if (game.placeState != false) {
        tiles.forEach(tile => {
            tile.style.backgroundColor = 'white';
        });
    }
}

function handleClick() {
    if (game.placeState === false) {

    } else if (game.placeState === 'c') {
        let data = this.dataset.array.split(' ');
        if (ship.playerShips[0].setPos(data[0], data[1])) {
            tilesArray[parseInt(data[0])][parseInt(data[1])].style.backgroundColor = 'hsl(4, 84%, 64%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+1].style.backgroundColor = 'hsl(4, 84%, 64%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+2].style.backgroundColor = 'hsl(4, 84%, 64%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+3].style.backgroundColor = 'hsl(4, 84%, 64%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+4].style.backgroundColor = 'hsl(4, 84%, 64%)';
            game.setPlaceState('b');
        }
    } else if (game.placeState === 'b') {
        let data = this.dataset.array.split(' ');
        if (ship.playerShips[1].setPos(data[0], data[1])) {
            tilesArray[parseInt(data[0])][parseInt(data[1])].style.backgroundColor = 'hsl(177, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+1].style.backgroundColor = 'hsl(177, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+2].style.backgroundColor = 'hsl(177, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+3].style.backgroundColor = 'hsl(177, 100%, 50%)';
            game.setPlaceState('d');
        }
    } else if (game.placeState === 'd') {
        let data = this.dataset.array.split(' ');
        if (ship.playerShips[2].setPos(data[0], data[1])) {
            tilesArray[parseInt(data[0])][parseInt(data[1])].style.backgroundColor = 'hsl(40, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+1].style.backgroundColor = 'hsl(40, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+2].style.backgroundColor = 'hsl(40, 100%, 50%)';
            game.setPlaceState('s');
        }
    } else if (game.placeState === 's') {
        let data = this.dataset.array.split(' ');
        if (ship.playerShips[3].setPos(data[0], data[1])) {
            tilesArray[parseInt(data[0])][parseInt(data[1])].style.backgroundColor = 'hsl(241, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+1].style.backgroundColor = 'hsl(241, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+2].style.backgroundColor = 'hsl(241, 100%, 50%)';
            game.setPlaceState('p');
        }
    } else if (game.placeState === 'p') {
        let data = this.dataset.array.split(' ');
        if (ship.playerShips[4].setPos(data[0], data[1])) {
            tilesArray[parseInt(data[0])][parseInt(data[1])].style.backgroundColor = 'hsl(122, 100%, 50%)';
            tilesArray[parseInt(data[0])][parseInt(data[1])+1].style.backgroundColor = 'hsl(122, 100%, 50%)';
            game.setPlaceState(false);
        }
    }
}

function handleMouse() {
    if (game.placeState === false) {
        //do nothing
    } else if (game.placeState === 'c') {
        tiles[parseInt(this.dataset.index)].style.backgroundColor = 'hsla(4, 84%, 64%, 0.62)';
        tiles[parseInt(this.dataset.index)+1].style.backgroundColor = 'hsla(4, 84%, 64%, 0.62)';
        tiles[parseInt(this.dataset.index)+2].style.backgroundColor = 'hsla(4, 84%, 64%, 0.62)';
        tiles[parseInt(this.dataset.index)+3].style.backgroundColor = 'hsla(4, 84%, 64%, 0.62)';
        tiles[parseInt(this.dataset.index)+4].style.backgroundColor = 'hsla(4, 84%, 64%, 0.62)';
    } else if (game.placeState === 'b') {
        tiles[parseInt(this.dataset.index)].style.backgroundColor = 'hsl(177, 100%, 77%)';
        tiles[parseInt(this.dataset.index)+1].style.backgroundColor = 'hsl(177, 100%, 77%)';
        tiles[parseInt(this.dataset.index)+2].style.backgroundColor = 'hsl(177, 100%, 77%)';
        tiles[parseInt(this.dataset.index)+3].style.backgroundColor = 'hsl(177, 100%, 77%)';
    } else if (game.placeState === 'd') {
        tiles[parseInt(this.dataset.index)].style.backgroundColor = 'hsl(40, 100%, 68%)';
        tiles[parseInt(this.dataset.index)+1].style.backgroundColor = 'hsl(40, 100%, 68%)';
        tiles[parseInt(this.dataset.index)+2].style.backgroundColor = 'hsl(40, 100%, 68%)';
    } else if (game.placeState === 's') {
        tiles[parseInt(this.dataset.index)].style.backgroundColor = 'hsl(241, 100%, 66%)';
        tiles[parseInt(this.dataset.index)+1].style.backgroundColor = 'hsl(241, 100%, 66%)';
        tiles[parseInt(this.dataset.index)+2].style.backgroundColor = 'hsl(241, 100%, 66%)';
    } else if (game.placeState === 'p') {
        tiles[parseInt(this.dataset.index)].style.backgroundColor = 'hsl(122, 100%, 76%)';
        tiles[parseInt(this.dataset.index)+1].style.backgroundColor = 'hsl(122, 100%, 76%)';
    }
}

export {}