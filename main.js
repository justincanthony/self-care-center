
// Data
var mantras = ["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
];
var affirmations = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];


// Query Selectors
var messageWindow = document.querySelector('#message-display');
var submitButton = document.querySelector('.receive-message');
var deleteButton = document.querySelector('.delete-message')
var messageForm = document.querySelector('form');
var gong = document.querySelector('.gong-image');


//Event Listeners

submitButton.addEventListener("click", receiveMessage);
deleteButton.addEventListener("click", deleteMessage);

// Event Handlers

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function receiveMessage() {
  mantraMessage = affirmations[getRandomIndex(affirmations)];
  affirmationMessage = mantras[getRandomIndex(mantras)];
    if (messageForm[0].checked) {
      messageWindow.innerText = mantraMessage;
    }  else {
        messageWindow.innerText = affirmationMessage;
    };

  gong.classList.add('hidden');
  messageWindow.classList.remove('hidden', 'text-red');
  deleteButton.classList.remove('hidden');
};

function deleteMessage() {
  deleteaffirmationsMessage();
  deletemantrasMessage()
  messageWindow.classList.add('text-red');
  messageWindow.innerText = "Message Has Been Deleted";
};

function deleteaffirmationsMessage() {
  for (var i = 0; i < affirmations.length; i++) {
    if (messageWindow.innerText === affirmations[i]) {
      affirmations.splice(i, 1);
      deleteButton.classList.add('hidden');
    }
  }
};

function deletemantrasMessage() {
  for (var i = 0; i < mantras.length; i++) {
    if (messageWindow.innerText === mantras[i]) {
      mantras.splice(i, 1);
      deleteButton.classList.add('hidden');
    }
  }
};
