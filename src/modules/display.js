import * as board from './board.js';
import * as game from './game.js';
import * as logic from './logic.js';
import * as ship from "./ship";
import * as computer from './computer.js';

const button = document.querySelector('#start');
let placeState = false;

button.addEventListener('click', () => {
    if (game.gameState === false) {
        game.initGame();
        placeState = 'c';
        button.textContent = 'Cancel?';
    } else if (game.gameState === true) {
        endGameDOM();
        game.endGame();
    }
});

function endGameDOM() {
    button.textContent = 'Start?';
    displayArray = [];
    placeState = true;
    handleMouseOut();
    placeState = false;
    tiles.forEach(tile => {
        tile.innerHTML = '';
    });
    enemyTiles.forEach(tile => {
        tile.innerHTML = '';
    });
}

const tiles = document.querySelectorAll('.player.tile');
let tilesArray = Array.from(tiles);
tilesArray = logic.listToMatrix(tilesArray, 7);

let currentTile

tiles.forEach((tile, index) => {
    let data = logic.indexToArray(index);
    tile.setAttribute('data-index', index);
    tile.setAttribute('data-array', data[0] + ' ' + data[1]);
    tile.addEventListener("click", (tile) => {
        handleClick(tile);
    });
    tile.addEventListener("mouseover", (tile) => {
        currentTile = tile;
        handleMouseHover(tile);
    });
    tile.addEventListener("mouseout", handleMouseOut);
});

let displayArray = [];

let rotateState = false;

document.addEventListener('keydown', (e) => {
    let name = e.code;
    if (name === "KeyR") {
        rotateState = !rotateState;
        handleMouseOut();
        handleMouseHover(currentTile);
    };
});

function handleMouseOut() {
    if (placeState !== false) {
        tiles.forEach((tile, index) => {
            if (!displayArray.includes(index)) tile.style.backgroundColor = 'white';
        });
    }
}

function clickPlace(tile, data, n, colorValue) {
    for (let i = 0; i < n; i++) {
        let targetTile = tilesArray[parseInt(data[0])][parseInt(data[1])+i];
        displayArray.push(parseInt(tile.target.dataset.index) + i);
        targetTile.style.backgroundColor = colorValue;
    }
}

function clickPlaceVertical(tile, data, n, colorValue) {
    for (let i = 0; i < n; i++) {
        let targetTile = tilesArray[parseInt(data[0])+i][parseInt(data[1])];
        displayArray.push(parseInt(tile.target.dataset.index) + i*7);
        targetTile.style.backgroundColor = colorValue;
    }
}

function handleClick(tile) {
    if (placeState === false) {

    } else if (placeState === 'c' && rotateState === false) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[0].setPos(data[0], data[1])) {
            clickPlace(tile, data, 5, 'hsl(4, 84%, 64%)')
            placeState = 'b';
        }
    } else if (placeState === 'b' && rotateState === false) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[1].setPos(data[0], data[1])) {
            clickPlace(tile, data, 4, 'hsl(177, 100%, 50%)');
            placeState = 'd';
        }
    } else if (placeState === 'd' && rotateState === false) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[2].setPos(data[0], data[1])) {
            clickPlace(tile, data, 3, 'hsl(40, 100%, 50%)');
            placeState = 's';
        }
    } else if (placeState === 's' && rotateState === false) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[3].setPos(data[0], data[1])) {
            clickPlace(tile, data, 3, 'hsl(241, 100%, 50%)');
            placeState = 'p';
        }
    } else if (placeState === 'p' && rotateState === false) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[4].setPos(data[0], data[1])) {
            clickPlace(tile, data, 2, 'hsl(122, 100%, 50%)');
            placeState = false;
            game.playerSwitch();
        }
    } else if (placeState === 'c' && rotateState === true) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[0].setPosVertical(data[0], data[1])) {
            clickPlaceVertical(tile, data, 5, 'hsl(4, 84%, 64%)');
            placeState = 'b';
        }
    } else if (placeState === 'b' && rotateState === true) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[1].setPosVertical(data[0], data[1])) {
            clickPlaceVertical(tile, data, 4, 'hsl(177, 100%, 50%)');
            placeState = 'd';
        }
    } else if (placeState === 'd' && rotateState === true) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[2].setPosVertical(data[0], data[1])) {
            clickPlaceVertical(tile, data, 3, 'hsl(40, 100%, 50%)');
            placeState = 's';
        }
    } else if (placeState === 's' && rotateState === true) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[3].setPosVertical(data[0], data[1])) {
            clickPlaceVertical(tile, data, 3, 'hsl(241, 100%, 50%)');
            placeState = 'p';
        }
    } else if (placeState === 'p' && rotateState === true) {
        let data = tile.target.dataset.array.split(' ');
        if (ship.playerShips[4].setPosVertical(data[0], data[1])) {
            clickPlaceVertical(tile, data, 2, 'hsl(122, 100%, 50%)');
            placeState = false;
            game.playerSwitch();
        }
    }
}

function hoverAtCursor(index, data, n, colorValue) {
    for (let i = 0; i < n; i++) {
        if (!displayArray.includes(parseInt(index)+i) && tilesArray[parseInt(data[0])][parseInt(data[1])+i]) {
            let tile = tilesArray[parseInt(data[0])][parseInt(data[1])+i];
            tile.style.backgroundColor = colorValue;
        }
    }
}

function hoverAtCursorVertical(index, data, n, colorValue) {
    for (let i = 0; i < n; i++) {
        if (!displayArray.includes(parseInt(index) + i*7) && tilesArray[parseInt(data[0])+i]) {
            let tile = tilesArray[parseInt(data[0])+i][parseInt(data[1])];
            tile.style.backgroundColor = colorValue;
        } else {
            return;
        }
    }
}

function handleMouseHover(tile) {
    if (placeState === false) {
        //do nothing
    } else if (placeState === 'c' && rotateState === false) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursor(index, data, 5, 'hsla(4, 84%, 64%, 0.62)');
    } else if (placeState === 'b' && rotateState === false) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursor(index, data, 4, 'hsl(177, 100%, 77%)');
    } else if (placeState === 'd' && rotateState === false) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursor(index, data, 3, 'hsl(40, 100%, 68%)');
    } else if (placeState === 's' && rotateState === false) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursor(index, data, 3, 'hsl(241, 100%, 66%)');
    } else if (placeState === 'p' && rotateState === false) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursor(index, data, 2, 'hsl(122, 100%, 76%)');
    } else if (placeState === 'c' && rotateState === true) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursorVertical(index, data, 5, 'hsla(4, 84%, 64%, 0.62)');
    } else if (placeState === 'b' && rotateState === true) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursorVertical(index, data, 4, 'hsl(177, 100%, 77%)');
    } else if (placeState === 'd' && rotateState === true) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursorVertical(index, data, 3, 'hsl(40, 100%, 68%)');
    } else if (placeState === 's' && rotateState === true) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursorVertical(index, data, 3, 'hsl(241, 100%, 66%)');
    } else if (placeState === 'p' && rotateState === true) {
        let index = tile.target.dataset.index;
        let data = tile.target.dataset.array.split(' ');
        hoverAtCursorVertical(index, data, 2, 'hsl(122, 100%, 76%)');
    }
}

const enemyTiles = document.querySelectorAll('.computer.tile');

enemyTiles.forEach((tile, index) => {
    let data = logic.indexToArray(index);
    tile.addEventListener('click', () => {
        if (placeState === false && game.playerTurn === true) {
            let result = board.recieveAttackComputer(data[0], data[1]);
            const child = document.createElement('div');
            if (result === 'hit') {
                child.textContent = 'X';
                child.style.color = 'red';
                tile.appendChild(child); 
                if (game.decideWinner()) return;
            } else if (result === 'miss') {
                child.textContent = 'O';
                tile.appendChild(child);
            }
            game.playerSwitch();
            computer.launchAttack();
        }
    });
});

function changePlayerBoard(y, x, result) {
    const child = document.createElement('div');
    if (result === 'hit') {
        child.textContent = 'X';
        tilesArray[y][x].appendChild(child);
        game.decideWinner();
    } else {
        child.textContent = 'O';
        tilesArray[y][x].appendChild(child);
    }
}

export {endGameDOM, changePlayerBoard}