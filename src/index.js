// my buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// my html areas to write stuff in
const youPicked = document.getElementById('youPicked');
const iPicked = document.getElementById('iPicked');
const result = document.getElementById('result');

// the computer's choices
const choices = ['Rock', 'Paper', 'Scissors'];

rockBtn.addEventListener('click', function () {
  youPicked.innerHTML = 'You picked Rock!';
  const myChoice = choices[Math.floor(Math.random() * choices.length)];
  iPicked.innerHTML = 'I picked ' + myChoice + '...';
  const yourChoice = 'Rock';
  const battleResult = myChoice === yourChoice
    ? 'We picked the same!'
    : myChoice === 'Paper'
      ? 'You Lost !'
      : 'You won !';
  result.innerHTML = battleResult;
});

paperBtn.addEventListener('click', function () {
  youPicked.innerHTML = 'You picked Paper!';
  const myChoice = choices[Math.floor(Math.random() * choices.length)];
  iPicked.innerHTML = 'I picked ' + myChoice + '...';
  const yourChoice = 'Paper';
  const battleResult = myChoice === yourChoice
    ? 'We picked the same!'
    : myChoice === 'Scissors'
      ? 'You Lost !'
      : 'You won !';
  result.innerHTML = battleResult;
});

scissorsBtn.addEventListener('click', function () {
  youPicked.innerHTML = 'You picked Scissors!';
  const myChoice = choices[Math.floor(Math.random() * choices.length)];
  iPicked.innerHTML = 'I picked ' + myChoice + '...';
  const yourChoice = 'Scissors';
  const battleResult = myChoice === yourChoice
    ? 'We picked the same!'
    : myChoice === 'Rock'
      ? 'You Lost !'
      : 'You won !';
  result.innerHTML = battleResult;
});
