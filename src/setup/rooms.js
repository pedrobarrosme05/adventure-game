import Room from '../models/Room.js';
import Item from '../models/Item.js';
import Puzzle from '../models/Puzzle.js';

// Criar as salas
const livingRoom = new Room("Living Room", "A cozy living room with a fireplace and comfortable furniture.");
const kitchen = new Room("Kitchen", "A modern kitchen with stainless steel appliances.");
const bedroom = new Room("Bedroom", "A peaceful bedroom with a large bed and wardrobe.");
const study = new Room("Study", "A quiet study room filled with books and a desk.");

// Conectar as salas
livingRoom.addConnection(kitchen);
livingRoom.addConnection(bedroom);
kitchen.addConnection(livingRoom);
kitchen.addConnection(study);
bedroom.addConnection(livingRoom);
study.addConnection(kitchen);

// Adicionar objetos às salas
// Living Room - o jogador deve escolher a chave certa
livingRoom.addObject(new Item("Red Key", "A shiny red key", false));
livingRoom.addObject(new Item("Blue Key", "A mysterious blue key", false));
livingRoom.addObject(new Item("Silver Key", "An old silver key that unlocks secrets", true)); // Objeto correto

// Kitchen - o jogador deve escolher o utensílio certo
kitchen.addObject(new Item("Knife", "A sharp kitchen knife", false));
kitchen.addObject(new Item("Spoon", "A regular dinner spoon", false));
kitchen.addObject(new Item("Magic Spatula", "A spatula that seems to glow with magic", true)); // Objeto correto

// Bedroom - o jogador deve escolher o item certo
bedroom.addObject(new Item("Pillow", "A soft, fluffy pillow", false));
bedroom.addObject(new Item("Mirror", "An ornate hand mirror", false));
bedroom.addObject(new Item("Ancient Book", "A leather-bound book with mysterious symbols", true)); // Objeto correto

// Study - aqui está a chave dourada!
study.addObject(new Item("Pen", "A regular ballpoint pen", false));
study.addObject(new Item("Globe", "A spinning world globe", false));
study.addObject(new Item("Golden Key", "✨ The legendary Golden Key! ✨", true)); // CHAVE DOURADA!

export { livingRoom, kitchen, bedroom, study };