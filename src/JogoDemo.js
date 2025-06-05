import inquirer from 'inquirer';

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

    async joga() {
        console.log(`Welcome to the Adventure Game!`);
        while (true) {
            this.describeCurrentRoom();
            const choices = Object.keys(this.currentRoom.connections);
            const answer = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'direction',
                    message: 'Which direction do you want to go?',
                    choices: [...choices, 'Exit Game']
                }
            ]);

            if (answer.direction === 'Exit Game') {
                console.log('Thanks for playing!');
                break;
            }

            const nextRoomIndex = this.currentRoom.connections[answer.direction];
            this.currentRoom = this.rooms[nextRoomIndex];
        }
    }

    describeCurrentRoom() {
        const room = this.currentRoom;
        console.log(`\n${room.name}: ${room.description}`);
    }
}

export { JogoDemo };