const CHOICES = [
  { text: 'Rock', icon: '&#128074;' },
  { text: 'Paper', icon: '&#9995;' },
  { text: 'Scissors', icon: '&#9996;' }
];

const renderChoices = (data, parent, replaces = false, which) => {
  if (replaces) data = CHOICES.find(CHOICE => CHOICE.text == data);

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

  if (!(replaces && which)) parent.appendChild(container);
  else if (which == 'human') parent.replaceChild(container, parent.children[0]);
  else parent.replaceChild(container, parent.children[2]);
};

const madeHumanChoice = event => {
  const choice = CHOICES.find(choice => choice.text == event.target.classList[0]);
  currentHumanChoice = choice.text;
  renderChoices(currentHumanChoice, picks, true, 'human');
  makeRandomComputerChoice();
};

const makeRandomComputerChoice = () => {
  const choice = CHOICES[Math.floor(Math.random() * 3)];
  currentComputerChoice = choice.text;
  renderChoices(currentComputerChoice, picks, true, 'computer');
  roundEnd();
};

const roundEnd = () => {
  if (currentHumanChoice == currentComputerChoice) return;
  switch (currentHumanChoice) {
    case CHOICES[0].text:
      if (currentComputerChoice == CHOICES[1].text) ++computerPts.textContent;
      else ++humanPts.textContent;
      break;
    case CHOICES[1].text:
      if (currentComputerChoice == CHOICES[2].text) ++computerPts.textContent;
      else ++humanPts.textContent;
      break;
    case CHOICES[2].text:
      if (currentComputerChoice == CHOICES[0].text) ++computerPts.textContent;
      else ++humanPts.textContent;
      break;
  }
  ++onRound.textContent;
  gameEnd();
};

const gameEnd = () => {
  if (onRound.textContent != ofRounds.textContent) return;
  window.alert(humanPts.textContent > computerPts.textContent ?
    `Human Won! (${humanPts.textContent} of ${computerPts.textContent})` :
    `Computer Won! (${computerPts.textContent} of ${humanPts.textContent})`
  );
  picks.children[0].innerHTML = '<h1 class="choice">?</h1>';
  picks.children[2].innerHTML = '<h1 class="choice">?</h1>';
  [ currentHumanChoice, currentComputerChoice ] = [];
  [ humanPts.textContent, computerPts.textContent, onRound.textContent ] = [ 0, 0, 0 ];
};

let [ currentHumanChoice, currentComputerChoice ] = [];

const [ humanPts, computerPts ] = [
  document.querySelector('.pts-human'),
  document.querySelector('.pts-computer'),
];
const onRound = document.querySelector('#onRound');
const ofRounds = document.querySelector('#ofRounds');
const picks = document.querySelector('#picks');
const choices = document.querySelector('#choices');

CHOICES.forEach(CHOICE => renderChoices(CHOICE, choices));

const humanChoices = Array.from(document.querySelector('#choices').children);
humanChoices.forEach(humanChoice => humanChoice.addEventListener('click', madeHumanChoice));
