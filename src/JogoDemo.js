class JogoDemo {
    constructor() {
        this.rooms = this.createRooms();
        this.currentRoom = this.rooms[0]; 
    }

    createRooms() {
        const room1 = {
            name: "Entrance Hall",
            description: "You are in a grand entrance hall. There are doors to the north and east.",
            objects: [],
            tools: [],
            connections: {
                north: 1, 
                east: 2 
            }
        };

        const room2 = {
            name: "Library",
            description: "You are in a dusty library filled with old books. There is a door to the south.",
            objects: [],
            tools: [],
            connections: {
                south: 0  
            }
        };

        const room3 = {
            name: "Kitchen",
            description: "You are in a kitchen with a strange smell. There is a door to the west.",
            objects: [],
            tools: [],
            connections: {
                west: 0   
            }
        };

        const room4 = {
            name: "Dining Room",
            description: "You are in a dining room with a long table. There are doors to the south and west.",
            objects: [],
            tools: [],
            connections: {
                south: 3, 
                west: 2    
            }
        };

        return [room1, room2, room3, room4];
    }

    joga() {
        console.log(`Welcome to the Adventure Game!`);
        this.describeCurrentRoom();
        // Additional game loop logic would go here
    }

    describeCurrentRoom() {
        const room = this.currentRoom;
        console.log(`${room.name}: ${room.description}`);
    }
}

export { JogoDemo };