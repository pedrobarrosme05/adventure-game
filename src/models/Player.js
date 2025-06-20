class Player {
    constructor(name, startingRoom, objective) {
        this.name = name;
        this.startingRoom = startingRoom;
        this.inventory = [];
        this.objective = objective;
        this.hasWon = false;
    }

    hasGoldenKey() {
        return this.inventory.some(item => item.name === "Golden Key");
    }
}

export default Player;