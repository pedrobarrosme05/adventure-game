import Game from './models/Game.js';
import Player from './models/Player.js';
import { livingRoom } from './setup/rooms.js';

const game = new Game();
const player = new Player("Adventure", livingRoom, "Find the Golden Key hidden somewhere in the house!");

game.start(player);
