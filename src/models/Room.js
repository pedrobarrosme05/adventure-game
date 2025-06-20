class Room {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.connections = [];
        this.objects = [];
    }

    addConnection(room) {
        this.connections.push(room);
    }

    addObject(object) {
        this.objects.push(object);
    }

    hasObjects() {
        return this.objects.length > 0;
    }

    removeObject(object) {
        this.objects = this.objects.filter(obj => obj !== object);
    }
}

export default Room;