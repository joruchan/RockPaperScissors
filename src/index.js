// my buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// my html areas to write stuff in
const youPicked = document.getElementById('youPicked');
const iPicked = document.getElementById('iPicked');
const result = document.getElementById('result');

const choices = [
  { choice: 'Rock', strongVS: 'Scissors' },
  { choice: 'Scissors', strongVS: 'Paper' },
  { choice: 'Paper', strongVS: 'Rock' },
];

const verifyResult = function (choice) {
  youPicked.innerHTML = 'You picked ' + choice + '!';
  const myChoice = choices[Math.floor(Math.random() * choices.length)];
  iPicked.innerHTML = 'I picked ' + myChoice.choice + '...';
  let battleResult = '';
  if (myChoice.choice === choice) {
    battleResult = 'We Picked the Same!';
  } else if (myChoice.strongVS === choice) {
    battleResult = 'You lost!';
  } else {
    battleResult = 'You won!';
  }
  result.innerHTML = battleResult;
};

rockBtn.addEventListener('click', function () {
  return verifyResult('Rock');
});

paperBtn.addEventListener('click', function () {
  return verifyResult('Paper');
});

scissorsBtn.addEventListener('click', function () {
  return verifyResult('Scissors');
});
