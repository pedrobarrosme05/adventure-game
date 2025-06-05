# Adventure Game

## Overview
This project is an "Adventure" game that allows players to explore various rooms, interact with objects, and solve puzzles. The game is structured using classes to represent the game components, including rooms, players, and the overall game state.

## Project Structure
```
adventure-game
├── src
│   ├── index.js          # Entry point of the application
│   ├── JogoDemo.js       # Game scenario and room management
│   ├── models
│   │   ├── Room.js       # Represents a room in the game
│   │   ├── Player.js     # Represents the player character
│   │   └── Game.js       # Manages the overall game state
│   └── data
│       └── rooms.js      # Definitions of the rooms in the game
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd adventure-game
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

## Running the Game
To start the game, run the following command in your terminal:
```bash
node src/index.js
```

## Gameplay
- Navigate through different rooms by interacting with doors.
- Collect tools and objects to solve puzzles.
- Use commands to interact with the environment.

## Classes Overview
- **JogoDemo**: Manages the game scenario and room transitions.
- **Room**: Represents each room with its properties and methods for interaction.
- **Player**: Manages the player's inventory and actions.
- **Game**: Controls the game state and user input.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add. 

## License
This project is licensed under the MIT License.