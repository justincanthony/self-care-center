// user selects radio button affirmation or mantra
// user clicks recieve message
// random message appears in new window replacing the image icon
// this could potentially be a toggle between image element and text content element or a hidden box event listener
// The message will be stored in an array

// Data
var deepThoughts = ["Hey","You"];
var shallowThoughts = ["Is there anybody out there?", "Pigs on a Wing"];


// Query Selectors
var messageWindow = document.querySelector('#message-display');
var imageWindow = document.querySelector('.image-box');
var submitButton = document.querySelector('.receive-message');
var messageForm = document.querySelector('form');
var gong = document.querySelector('.gong-image');



//Event Listeners

submitButton.addEventListener("click", receiveMessage);

// Event Handlers

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function receiveMessage() {
    if (messageForm[0].checked) {
      messageWindow.innerText = shallowThoughts[getRandomIndex(shallowThoughts)];
    }  else {
        messageWindow.innerText = deepThoughts[getRandomIndex(deepThoughts)];
    };

  gong.classList.add('hidden');
  messageWindow.classList.remove('hidden');
};
