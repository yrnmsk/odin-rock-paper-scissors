const choices = ['rock', 'paper', 'scissors'];
const rounds = 5;
let wins = 0;
let ties = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
  const userChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
  if (userChoice === choices[0] || userChoice === choices[1] || userChoice === choices[2]) return userChoice;
  alert('Please enter a valid choice');
  return getUserChoice();
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    ++ties;
    return `Your ${userChoice} tied out with the computer's ${computerChoice}!`;
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') return 'Computer won! Paper beats Rock';
    ++wins;
    return 'You won! Rock beats Scissors';
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') return 'Computer won! Rock beats Scissors';
    ++wins;
    return 'You won! Scissors beats Paper';
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') return 'Computer won! Scissors beat Paper';
    ++wins;
    return 'You won! Paper beats Rock';
  }
}

function game() {
  for (let i = 0; i < rounds; ++i) console.log(playRound(getUserChoice(), getComputerChoice()));
  console.log(`Game Ended. You won ${wins} out of ${rounds} games, and tied ${ties} times!`);
}

game();