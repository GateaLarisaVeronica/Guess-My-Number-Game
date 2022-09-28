'use strict';

let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const numberStyle = function (styleNumber) {
  document.querySelector('.number').style.width = styleNumber;
};

const bodyStyle = function (styleBody) {
  document.querySelector('body').style.backgroundColor = styleBody;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);
    bodyStyle('#60b347');
    numberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  bodyStyle('#222');
  numberStyle('15rem');
});
