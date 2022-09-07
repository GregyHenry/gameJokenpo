let computerChoose = 0;
let computerPoints = 0;
let playerChoose = 0;
let playerPoints = 0;
let playerName;

function messageWinner(message) {
  document.getElementById('message').innerHTML = message;
}

function getPlayerName(name) {
  document.getElementById('player-name').innerHTML = name;
}

function sortComputer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcWinner(playerChoose, computerChoose) {
  // Retorno do ganhador (0 - Empate, 1 - Jogador e 2 - Computador)
  // Escolhas (1 - Pedra , 2 - Papel e 3 - Tesoura)
  if (
    (playerChoose == 1 && computerChoose == 1) ||
    (playerChoose == 2 && computerChoose == 2) ||
    (playerChoose == 3 && computerChoose == 3)
  ) {
    return 0;
  } else if (
    (playerChoose == 1 && computerChoose == 3) ||
    (playerChoose == 2 && computerChoose == 1) ||
    (playerChoose == 3 && computerChoose == 2)
  ) {
    return 1;
  } else if (
    (playerChoose == 1 && computerChoose == 2) ||
    (playerChoose == 2 && computerChoose == 3) ||
    (playerChoose == 3 && computerChoose == 1)
  ) {
    return 2;
  }
}

function sumPointsPlayer() {
  playerPoints++;
  document.getElementById('player-points').innerHTML = playerPoints;
}

function sumPointsComputer() {
  computerPoints++;
  document.getElementById('computer-points').innerHTML = computerPoints;
}

function selectChoose(type, choose) {
  document
    .getElementById(type + '-choose-' + choose)
    .classList.add('selectChoose');
}

function unSelectChoose(type, choose) {
  document
    .getElementById(type + '-choose-' + choose)
    .classList.remove('selectChoose');
}

function play(choose) {
  // 1 - Pedra , 2 - Papel e 3 - Tesoura
  playerChoose = choose;
  selectChoose('player', playerChoose);

  computerChoose = sortComputer(1, 3);
  selectChoose('computer', computerChoose);

  let winner = calcWinner(playerChoose, computerChoose);
  if (winner == 0) {
    messageWinner('Empate 😭');
  } else if (winner == 1) {
    messageWinner('Ponto para ' + playerName + ' 😁');
    sumPointsPlayer();
  } else {
    messageWinner('Ponto para Computador 😝');
    sumPointsComputer();
  }

  setTimeout(() => {
    unSelectChoose('player', playerChoose);
    unSelectChoose('computer', computerChoose);
    messageWinner(playerName + ' escolha uma opção...');
  }, 1000);
}

document.getElementById('player-choose-1').onclick = () => {
  play(1);
};

document.getElementById('player-choose-2').onclick = () => {
  play(2);
};

document.getElementById('player-choose-3').onclick = () => {
  play(3);
};

playerName = prompt('Qual é o seu nome?');

getPlayerName(playerName);

messageWinner(
  'Bem-vindo ' + playerName + ' está preparado? Escolha uma opção acima...'
);
