

const startBtn = document.querySelector('.js-start');
const information = document.querySelector('.js-info');
const descriptor = document.querySelector('.js-heading');
const boxContainer = document.querySelector('.js-container');


let repeat = 0;
let arrangement = []; // this array contains the number of taps by the computer
let humanArrangement = []; // this array keeps track of the the taps by the human/player
let level = 0;       // this keeps track of the level of the game

// this function is responsible for starting the game
function startGame() {
  startBtn.classList.add('hidden');
  information.classList.remove('hidden');
  information.textContent = 'Waiting for the computer';
  nextRound();
}



// this function resets tha game
function resetGame(text) {
  alert(text);
  arrangement = [];
  humanArrangement = [];
  level = 0;
  startBtn.classList.remove('hidden');
  descriptor.textContent = 'Simon Game';
  information.classList.add('hidden');
  boxContainer.classList.add('unclickable');
}

function PlayerTurn(level) {
  boxContainer.classList.remove('unclickable');
  information.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

function activateTile(color) {
  const tile = document.querySelector(`[data-tile='${color}']`);
  const sound = document.querySelector(`[data-sound='${color}']`);

  tile.classList.add('activated');
  sound.play();

  setTimeout(() => {
    tile.classList.remove('activated');
  }, 300);
}

function playRound(nextSequence) {
  nextSequence.forEach((color, index) => {
    setTimeout(() => {
      activateTile(color);
    }, (index + 1) * 600);
  });
}

function nextStep() {
  const tiles = ['red', 'green', 'blue', 'yellow'];
  const random = tiles[Math.floor(Math.random() * tiles.length)];

  return random;
}

function nextRound() {
  level += 1;

  boxContainer.classList.add('unclickable');
  information.textContent = 'Waiting for the computer';
  descriptor.textContent = `Level ${level} / 8`;


  const nextSequence = [...arrangement];
  nextSequence.push(nextStep());
  playRound(nextSequence);

  arrangement = [...nextSequence];
  setTimeout(() => {
    PlayerTurn(level);
  }, level * 600 + 1000);
}

function handleClick(tile) {
  const index = humanArrangement.push(tile) - 1;
  const sound = document.querySelector(`[data-sound='${tile}']`);
  sound.play();

  const remainingTaps = arrangement.length - humanArrangement.length;

  if (humanArrangement[index] !== arrangement[index]) {
    repeat = repeat + 1;
    resetGame('Oops! Game over, your choice was wrong');
    return;
  }
  
  

  if (humanArrangement.length === arrangement.length) {
    if (humanArrangement.length === 8) {
      resetGame('Congratulations! You won the game');
      return
    }

    humanArrangement = [];
    information.textContent = 'Success! Keep going!';
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }

  information.textContent = `Your turn: ${remainingTaps} Tap${
    remainingTaps > 1 ? 's' : ''
  }`;
}


startBtn.addEventListener('click', startGame);
boxContainer.addEventListener('click', event => {
  const { tile } = event.target.dataset;

  if (tile) handleClick(tile);
});