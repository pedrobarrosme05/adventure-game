import Item from '../models/Item.js';
import Puzzle from '../models/Puzzle.js';
import { livingRoom, library } from './rooms.js';

const goldenKey = new Item("Golden Key", "A shiny golden key that looks important.");
const mysteriousBook = new Puzzle("Mysterious Book", "Solve the riddle written inside the book.", "knowledge");

livingRoom.addObject(goldenKey);
library.addObject(mysteriousBook);

export { goldenKey, mysteriousBook };