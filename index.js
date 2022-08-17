const CHOICES = [
  { text: 'Rock', icon: '&#128074;' },
  { text: 'Paper', icon: '&#9995;' },
  { text: 'Scissors', icon: '&#9996;' }
];

const pattern = (data, parent) => {
  const container = document.createElement('div');
  const icon = document.createElement('div');
  const h1 = document.createElement('h1');
  const big = document.createElement('big');
  const h2 = document.createElement('h2');

  container.classList.add(data.text, 'choice');
  icon.classList.add(data.text, 'icon');
  h1.classList.add(data.text);
  big.classList.add(data.text);
  h2.classList.add(data.text);

  big.innerHTML = data.icon;
  h2.textContent = data.text;

  h1.appendChild(big);
  icon.appendChild(h1);
  container.appendChild(icon);
  container.appendChild(h2);

  parent.appendChild(container);
};

const choices = document.querySelector('#choices');

CHOICES.forEach(CHOICE => pattern(CHOICE, choices));

// const [ humanTextChoice, humanIconChoice ] = [
//   document.querySelector('.pick-human-text'),
//   document.querySelector('.pick-human-icon')
// ];
// const [ computerTextChoice, computerIconChoice ] = [
//   document.querySelector('.pick-computer-text'),
//   document.querySelector('.pick-computer-icon')
// ];

// const [ humanPts, computerPts ] = [
//   document.querySelector('.pts-human'),
//   document.querySelector('.pts-computer')
// ]

// const [ round, rounds ] = [
//   document.querySelector('.round'),
//   document.querySelector('.rounds')
// ];

let [ currentHumanChoice, currentComputerChoice ] = [];

// const reset = () => {
//   [ currentHumanChoice, currentComputerChoice ] = [];
//   [ humanPts.textContent, computerPts.textContent, round.textContent ] = [ 0, 0, 0 ];
// };

const madeHumanChoice = event => {
  const choice = CHOICES.find(choice => choice.text == event.target.classList[0]);
  currentHumanChoice = choice.text;
  // [ humanTextChoice.innerHTML, humanIconChoice.innerHTML ] = [ choice.text, choice.icon ];
  // makeRandomComputerChoice();
};

// const makeRandomComputerChoice = () => {
//   const choice = CHOICES[Math.floor(Math.random() * 3)];
//   // if (currentHumanChoice == currentComputerChoice) return makeRandomComputerChoice();
//   currentComputerChoice = choice.text;
//   // [ computerTextChoice.innerHTML, computerIconChoice.innerHTML ] = [ choice.text, choice.icon ];
//   // chooseRoundWinner();
// };

// const chooseRoundWinner = () => {
//   if (currentHumanChoice == currentComputerChoice) return;
//   switch (currentHumanChoice) {
//     case CHOICES[0].text:
//       if (currentComputerChoice == CHOICES[1].text) ++computerPts.textContent;
//       else ++humanPts.textContent;
//       break;
//     case CHOICES[1].text:
//       if (currentComputerChoice == CHOICES[2].text) ++computerPts.textContent;
//       else ++humanPts.textContent;
//       break;
//     case CHOICES[2].text:
//       if (currentComputerChoice == CHOICES[0].text) ++computerPts.textContent;
//       else ++humanPts.textContent;
//       break;
//   }
//   ++round.textContent;
//   chooseGameWinner();
// };

// const chooseGameWinner = () => {
//   if (round.textContent != rounds.textContent) return;
//   reset();
// };

const humanChoices = Array.from(document.querySelector('#choices').children);
humanChoices.forEach(humanChoice => humanChoice.addEventListener('click', madeHumanChoice));
