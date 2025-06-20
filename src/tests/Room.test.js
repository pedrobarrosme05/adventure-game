import Room from '../models/Room.js';

describe('Room', () => {
    test('should add connections correctly', () => {
        const room1 = new Room('Room 1', 'Description 1');
        const room2 = new Room('Room 2', 'Description 2');

        room1.addConnection(room2);

        expect(room1.connections).toContain(room2);
    });

    test('should add objects correctly', () => {
        const room = new Room('Room', 'Description');
        const object = { name: 'Object', description: 'Description' };

        room.addObject(object);

        expect(room.objects).toContain(object);
    });
});