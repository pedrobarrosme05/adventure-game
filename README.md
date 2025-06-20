# Adventure Game

## Overview
Este projeto visa criar um jogo da categoria puzzle, baseado na descrição da tarefa da disciplina de Programação Orientada a Objetos. Jogo genérico de aventura onde se interage com salas e seus respectivos cenários.

## Estrutura do projeto
```
adventure-game
├── src
│   ├── main.js          # Ponto de entrada principal do jogo
│   ├── models           # Classes principais do jogo
│   │   ├── Game.js      # Controla o estado do jogo e entrada do usuário
│   │   ├── GameObject.js # Classe base para objetos interagíveis
│   │   ├── Item.js      # Itens coletáveis e interagíveis
│   │   ├── Player.js    # Gerencia o jogador e inventário
│   │   ├── Puzzle.js    # Puzzles e enigmas do jogo
│   │   └── Room.js      # Representa salas e suas conexões
│   ├── data            # Dados estáticos do jogo
│   │   └── rooms.js    # Configuração das salas (dados antigos)
│   ├── setup           # Configuração inicial do jogo
│   │   ├── objects.js  # Configuração de objetos
│   │   ├── player.js   # Configuração do jogador
│   │   └── rooms.js    # Configuração das salas
│   └── tests           # Testes unitários
│       └── Room.test.js # Testes para a classe Room
├── babel.config.js     # Configuração do Babel
├── eslint.config.js    # Configuração do ESLint
├── jest.config.js      # Configuração do Jest
├── package.json        # Dependências e scripts
└── README.md          # Este arquivo
```

## Instruções iniciais
1. **Clonar o repo**:
   ```bash
   git clone <repository-url>
   cd adventure-game
   ```

2. **Instalando dependências**:
   Verifique a instalação do Node.js
   ```bash
   npm install
   ```

## Rodando o jogo
Para começar o jogo, rode o seguinte comando no seu terminal:
```bash
node src/main.js
```

## Como jogar
- **Navegação**: Use `move <nome_da_sala>` para se mover entre salas
- **Interação**: Use `interact <nome_do_objeto>` para interagir com objetos
- **Objetivo**: Encontre a Chave Dourada (Golden Key) escondida em uma das salas
- **Regra**: Você deve encontrar o objeto correto em cada sala antes de poder sair dela
- **Sair**: Use `exit` para sair do jogo

### Comandos disponíveis:
- `move Kitchen` - Move para a cozinha
- `interact Silver Key` - Interage com a chave prateada
- `exit` - Sai do jogo

## Arquitetura do projeto

### Modelos principais:
- **[`Game`](src/models/Game.js)**: Controla o loop principal do jogo, entrada do usuário e estado geral
- **[`GameObject`](src/models/GameObject.js)**: Classe base para todos os objetos interagíveis
- **[`Item`](src/models/Item.js)**: Representa itens coletáveis com lógica de interação
- **[`Player`](src/models/Player.js)**: Gerencia o jogador, inventário e objetivos
- **[`Puzzle`](src/models/Puzzle.js)**: Representa puzzles e enigmas para resolver
- **[`Room`](src/models/Room.js)**: Representa salas com conexões e objetos

### Configuração:
- **[`objects.js`](src/setup/objects.js)**: Configuração inicial dos objetos do jogo
- **[`player.js`](src/setup/player.js)**: Configuração inicial do jogador
- **[`rooms.js`](src/setup/rooms.js)**: Configuração das salas e suas conexões

## Testes
Para rodar os testes unitários:
```bash
npm test
```

## Tecnologias utilizadas
- **Node.js** - Runtime JavaScript
- **ES6 Modules** - Sistema de módulos moderno
- **Jest** - Framework de testes
- **Babel** - Transpilador JavaScript
- **ESLint** - Linter para qualidade de código
- **Chalk** - Colorização do terminal
- **Inquirer** - Interface de linha de comando
- **Lodash** - Utilitários JavaScript

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License.