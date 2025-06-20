import readline from 'readline';

class Game {
    constructor() {
        this.currentRoom = null;
        this.player = null;
        this.isRunning = false;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    start(player) {
        this.player = player;
        this.isRunning = true;
        this.currentRoom = this.player.startingRoom;
        console.log("\n=== Welcome to the Adventure Game! ===");
        console.log(`Your objective: ${this.player.objective}`);
        console.log("🔍 Look for the Golden Key hidden in one of the rooms!");
        console.log("⚠️  You must find the correct object in each room to proceed!");
        this.displayCurrentRoom();
        this.handleUserInput();
    }

    displayCurrentRoom() {
        console.log(`\n=== You are in: ${this.currentRoom.name} ===`);
        console.log(this.currentRoom.description);
        console.log("\nAvailable connections: ", this.currentRoom.connections.map(room => room.name).join(", "));
        
        if (this.currentRoom.objects && this.currentRoom.objects.length > 0) {
            console.log("\n🔍 Objects in the room:");
            this.currentRoom.objects.forEach((obj, index) => {
                console.log(`  ${index + 1}. ${obj.name} - ${obj.description}`);
            });
        } else {
            console.log("No objects in the room.");
        }

        // Mostra inventário se tiver itens
        if (this.player.inventory.length > 0) {
            console.log("\n🎒 Your inventory:");
            this.player.inventory.forEach(item => console.log(`  - ${item.name}`));
        }
    }

    handleUserInput() {
        this.rl.question("\nEnter a command (e.g., 'move Kitchen', 'interact key', or 'exit'): ", (command) => {
            command = command.trim();
            
            if (!command) {
                console.log("\nPlease enter a command.");
                return this.continueGame();
            }

            const [action, ...targetParts] = command.split(" ");
            const target = targetParts.join(" ");

            switch (action.toLowerCase()) {
                case "move":
                    this.handleMove(target);
                    break;
                case "interact":
                    this.handleInteract(target);
                    break;
                case "exit":
                    console.log("\nExiting the game. Goodbye!");
                    this.stop();
                    return;
                default:
                    console.log("\nUnknown command. Use 'move <room>', 'interact <object>', or 'exit'.");
            }

            // Verifica se o jogador ganhou
            if (this.player.hasWon) {
                console.log("\n🏆 YOU WON THE GAME! 🏆");
                this.stop();
                return;
            }

            this.continueGame();
        });
    }

    handleMove(target) {
        if (!target) {
            console.log("\nPlease specify a room to move to.");
            console.log(`Available rooms: ${this.currentRoom.connections.map(r => r.name).join(", ")}`);
            return;
        }

        const room = this.currentRoom.connections.find(r => 
            r.name.toLowerCase() === target.toLowerCase()
        );

        if (room) {
            // Verifica se há objetos na sala e se o jogador interagiu com o correto
            if (this.currentRoom.objects && this.currentRoom.objects.length > 0) {
                const hasCorrectItem = this.currentRoom.objects.some(obj => obj.isCorrect);
                const correctItemInInventory = this.player.inventory.some(item => 
                    this.currentRoom.objects.some(roomObj => roomObj.name === item.name && roomObj.isCorrect)
                );

                if (hasCorrectItem && !correctItemInInventory) {
                    console.log("\n🚫 You must find the correct object in this room before leaving!");
                    console.log("💡 Try interacting with different objects to find the right one.");
                    return;
                }
            }

            this.moveToRoom(room);
            console.log(`\nYou moved to: ${room.name}`);
        } else {
            console.log(`\nCannot move to '${target}'. Available rooms: ${this.currentRoom.connections.map(r => r.name).join(", ")}`);
        }
    }

    handleInteract(target) {
        if (!target) {
            console.log("\nPlease specify an object to interact with.");
            if (this.currentRoom.objects && this.currentRoom.objects.length > 0) {
                console.log(`Available objects: ${this.currentRoom.objects.map(obj => obj.name).join(", ")}`);
            }
            return;
        }

        if (!this.currentRoom.objects || this.currentRoom.objects.length === 0) {
            console.log("\nThere are no objects to interact with in this room.");
            return;
        }

        const object = this.currentRoom.objects.find(obj => 
            obj.name.toLowerCase() === target.toLowerCase()
        );

        if (object) {
            object.interact(this.player);
            
            // Remove o objeto apenas se for o correto
            if (object.isCorrect) {
                this.currentRoom.objects = this.currentRoom.objects.filter(obj => obj !== object);
            }
        } else {
            console.log(`\nCannot find '${target}'. Available objects: ${this.currentRoom.objects.map(obj => obj.name).join(", ")}`);
        }
    }

    moveToRoom(room) {
        this.currentRoom = room;
    }

    continueGame() {
        if (this.isRunning) {
            this.displayCurrentRoom();
            setImmediate(() => this.handleUserInput());
        }
    }

    stop() {
        this.isRunning = false;
        console.log("\n=== Game over. Thanks for playing! ===");
        this.rl.close();
    }
}

export default Game;