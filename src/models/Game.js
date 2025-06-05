class Game {
    constructor() {
        this.currentRoom = null;
        this.player = null;
        this.isRunning = false;
    }

    start(player) {
        this.player = player;
        this.isRunning = true;
        this.currentRoom = this.player.startingRoom;
        this.gameLoop();
    }

    gameLoop() {
        while (this.isRunning) {
            this.displayCurrentRoom();
            this.handleUserInput();
        }
    }

    displayCurrentRoom() {
        console.log(`You are in: ${this.currentRoom.name}`);
        console.log(this.currentRoom.description);
    }

    handleUserInput() {
        // Placeholder for user input handling logic
        // This will include commands to move between rooms, interact with objects, etc.
    }

    moveToRoom(room) {
        if (this.currentRoom.connections.includes(room)) {
            this.currentRoom = room;
        } else {
            console.log("You can't go that way!");
        }
    }

    stop() {
        this.isRunning = false;
        console.log("Game over. Thanks for playing!");
    }
}

export { Game };