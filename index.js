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

  if (replaces && which == 'human') {
    try { parent.replaceChild(container, parent.firstChild); }
    catch { parent.appendChild(container); }
  } else if (replaces && which == 'computer') {
    if (parent.children.length == 1) parent.appendChild(container);
    else parent.replaceChild(container, parent.lastChild);
  } else parent.appendChild(container);
};

let [ currentHumanChoice, currentComputerChoice ] = [];

const picks = document.querySelector('.picks');

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
};

const choices = document.querySelector('#choices');

CHOICES.forEach(CHOICE => renderChoices(CHOICE, choices));

const humanChoices = Array.from(document.querySelector('#choices').children);
humanChoices.forEach(humanChoice => humanChoice.addEventListener('click', madeHumanChoice));
