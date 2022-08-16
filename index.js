const choices = [
  { text: 'Rock', icon: '&#128074;' },
  { text: 'Paper', icon: '&#9995;' },
  { text: 'Scissors', icon: '&#9996;' }
];

const [ humanTextChoice, humanIconChoice ] = [
  document.querySelector('.pick-human-text'),
  document.querySelector('.pick-human-icon')
];
const [ computerTextChoice, computerIconChoice ] = [
  document.querySelector('.pick-computer-text'),
  document.querySelector('.pick-computer-icon')
];

const [ humanPts, computerPts ] = [
  document.querySelector('.pts-human'),
  document.querySelector('.pts-computer')
]

const [ round, rounds ] = [
  document.querySelector('.round'),
  document.querySelector('.rounds')
];

let [ currentHumanChoice, currentComputerChoice ] = [];

const reset = () => {
  [ currentHumanChoice, currentComputerChoice ] = [];
  [ humanPts.textContent, computerPts.textContent, round.textContent ] = [ 0, 0, 0 ];
};

const madeHumanChoice = event => {
  const choice = choices.find(choice => choice.text == event.target.classList[0]);
  currentHumanChoice = choice.text;
  [ humanTextChoice.innerHTML, humanIconChoice.innerHTML ] = [ choice.text, choice.icon ];
  makeRandomComputerChoice();
};

const makeRandomComputerChoice = () => {
  const choice = choices[Math.floor(Math.random() * 3)];
  // if (currentHumanChoice == currentComputerChoice) return makeRandomComputerChoice();
  currentComputerChoice = choice.text;
  [ computerTextChoice.innerHTML, computerIconChoice.innerHTML ] = [ choice.text, choice.icon ];
  chooseRoundWinner();
};

const chooseRoundWinner = () => {
  if (currentHumanChoice == currentComputerChoice) return;
  switch (currentHumanChoice) {
    case choices[0].text:
      if (currentComputerChoice == choices[1].text) ++computerPts.textContent;
      else ++humanPts.textContent;
      break;
    case choices[1].text:
      if (currentComputerChoice == choices[2].text) ++computerPts.textContent;
      else ++humanPts.textContent;
      break;
    case choices[2].text:
      if (currentComputerChoice == choices[0].text) ++computerPts.textContent;
      else ++humanPts.textContent;
      break;
  }
  ++round.textContent;
  chooseGameWinner();
};

const chooseGameWinner = () => {
  if (round.textContent != rounds.textContent) return;
  reset();
};

const humanChoices = Array.from(document.querySelector('#choices').children);
humanChoices.forEach(humanChoice => humanChoice.addEventListener('click', madeHumanChoice));
