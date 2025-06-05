class Player {
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }

    pickUp(item) {
        this.inventory.push(item);
        console.log(`${item} has been added to your inventory.`);
    }

    use(item, target) {
        if (this.inventory.includes(item)) {
            console.log(`You used ${item} on ${target}.`);
            // Implement specific interactions based on item and target
        } else {
            console.log(`You don't have ${item} in your inventory.`);
        }
    }

    getInventory() {
        return this.inventory;
    }
}

export { Player };