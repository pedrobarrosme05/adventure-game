class GameObject {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    interact(player) {
        console.log(`\nYou interacted with ${this.name}.`);
    }
}

export default GameObject;