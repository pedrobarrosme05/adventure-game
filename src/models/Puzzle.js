import GameObject from './GameObject.js';

class Puzzle extends GameObject {
    constructor(name, description, question, answer, isCorrect = false) {
        super(name, description);
        this.question = question;
        this.answer = answer;
        this.isSolved = false;
        this.isCorrect = isCorrect;
    }

    interact(player) {
        if (this.isSolved) {
            console.log("\nThis puzzle is already solved.");
            return;
        }

        console.log(`\n${this.question}`);
        // Para simplificar, vamos usar uma resposta fixa
        const userAnswer = "yes"; // Em um jogo real, você pegaria input do usuário
        
        if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
            this.isSolved = true;
            if (this.isCorrect) {
                console.log("\n✓ Correct! You solved the puzzle!");
                console.log("You can now leave this room!");
            } else {
                console.log("\n✗ Puzzle solved, but this wasn't the right one to escape the room.");
            }
        } else {
            console.log("\n✗ Wrong answer. Try again.");
        }
    }
}

export default Puzzle;