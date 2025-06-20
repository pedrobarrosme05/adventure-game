import GameObject from './GameObject.js';

class Item extends GameObject {
    constructor(name, description, isCorrect = false) {
        super(name, description);
        this.isCorrect = isCorrect; // Define se é o objeto correto para sair da sala
    }

    interact(player) {
        if (this.isCorrect) {
            console.log(`\n✓ You found the right item: ${this.name}!`);
            if (this.name === "Golden Key") {
                console.log("\n🎉 CONGRATULATIONS! You found the Golden Key and won the game!");
                player.hasWon = true;
            } else {
                console.log("\nYou can now leave this room!");
            }
            player.inventory.push(this);
        } else {
            console.log(`\n✗ ${this.name} is not the right item. Try another object.`);
            console.log("You cannot leave the room yet.");
        }
    }
}

export default Item;