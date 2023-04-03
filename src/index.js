import ship from './modules/ship.js'
import './style/style.css';

console.table(ship.ships);

ship.ships[1].checkHealth();
ship.ships[1].hit();
ship.ships[1].checkHealth();