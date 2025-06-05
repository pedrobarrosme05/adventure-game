class Room {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.objects = [];
        this.tools = [];
        this.connections = {};
    }

    addObject(object) {
        this.objects.push(object);
    }

    addTool(tool) {
        this.tools.push(tool);
    }

    connectRoom(direction, room) {
        this.connections[direction] = room;
    }

    describe() {
        return `${this.name}: ${this.description}`;
    }

    getConnections() {
        return Object.keys(this.connections);
    }

    interactWithObject(objectName) {
        const object = this.objects.find(obj => obj.name === objectName);
        if (object) {
            return object.interact();
        }
        return `There is no ${objectName} here.`;
    }

    useTool(toolName, objectName) {
        const tool = this.tools.find(tool => tool.name === toolName);
        const object = this.objects.find(obj => obj.name === objectName);
        if (tool && object) {
            return tool.useOn(object);
        }
        return `You can't use ${toolName} on ${objectName}.`;
    }
}

export { Room };