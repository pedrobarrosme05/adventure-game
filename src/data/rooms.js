const rooms = {
    room1: {
        name: "Entrance Hall",
        description: "You are in a grand entrance hall. There are doors to the north and east.",
        objects: ["old key", "painting"],
        tools: [],
        connections: {
            north: "room2",
            east: "room3"
        }
    },
    room2: {
        name: "Library",
        description: "The library is filled with dusty bookshelves. A ladder leads up to a loft.",
        objects: ["book of spells", "ancient scroll"],
        tools: ["ladder"],
        connections: {
            south: "room1",
            west: "room4"
        }
    },
    room3: {
        name: "Kitchen",
        description: "The kitchen is cluttered with pots and pans. A door leads back to the entrance hall.",
        objects: ["knife", "cooking pot"],
        tools: [],
        connections: {
            west: "room1"
        }
    },
    room4: {
        name: "Secret Room",
        description: "This room is hidden behind a bookshelf. It contains a treasure chest.",
        objects: ["treasure chest"],
        tools: [],
        connections: {
            east: "room2"
        }
    }
};

export default rooms;