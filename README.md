# Adventure Game

## Overview
Este projeto visa criar um jogo da categoria puzzle, baseado na descrição da tarefa da disciplina de Programação Orientada a Objetos. Jogo genérico de aventura onde se interage com salas e seus respectivos cenarios.

## Estrutura do projeto
```
adventure-game
├── src
│   ├── index.js         
│   ├── JogoDemo.js       
│   ├── models
│   │   ├── Room.js       
│   │   ├── Player.js     
│   │   └── Game.js      
│   └── data
│       └── rooms.js     
├── package.json          
└── README.md            
```

## Instruções iniciais
1. **Clonar o repo**:
   ```bash
   git clone <repository-url>
   cd adventure-game
   ```

2. **Instalando dependencias**:
   Verifique a instalação do Node.js
   ```bash
   npm install
   ```

## Rodando o jogo
Para começar o jogo, rode o seguinde comando no seu terminal:
```bash
node src/index.js
```

## Como jogar
- Navegue por diferentes salas interagindo com as portas.
- CColete ferramentas e objetos para resolver enigmas.
- Use comandos para interagir com o ambiente.

## 
- **JogoDemo**:  Gerencia o cenário do jogo e as transições entre salas.
- **Room**: Representa cada sala com suas propriedades e métodos de interação.
- **Player**: Gerencia o inventário e as ações do jogador.
- **Game**: Controla o estado do jogo e as entradas do usuário.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add. 

## License
This project is licensed under the MIT License.