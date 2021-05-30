// user selects radio button affirmation or mantra
// user clicks recieve message
// random message appears in new window replacing the image icon
// this could potentially be a toggle between image element and text content element or a hidden box event listener
// The message will be stored in an array

// Data
var deepThoughts = ["Hey","You", "fgdg"];
var shallowThoughts = ["Is there anybody out there?", "Pigs on a Wing", "dfggdfgd"];


// Query Selectors
var messageWindow = document.querySelector('#message-display');
var imageWindow = document.querySelector('.image-box');
var submitButton = document.querySelector('.receive-message');
var deleteButton = document.querySelector('.delete-message')
var messageForm = document.querySelector('form');
var gong = document.querySelector('.gong-image');
var shallowMessage = "";
var deepMessage = "";


//Event Listeners

submitButton.addEventListener("click", receiveMessage);
deleteButton.addEventListener("click", deleteMessage);

// Event Handlers

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function receiveMessage() {
  shallowMessage = shallowThoughts[getRandomIndex(shallowThoughts)];
  deepMessage = deepThoughts[getRandomIndex(deepThoughts)];
    if (messageForm[0].checked) {
      messageWindow.innerText = shallowMessage;
    }  else {
        messageWindow.innerText = deepMessage;
    };

  gong.classList.add('hidden');
  messageWindow.classList.remove('hidden', 'text-red');
  deleteButton.classList.remove('hidden');
};

function deleteMessage() {
  deleteShallowThoughtsMessage();
  deleteDeepThoughtsMessage()
  messageWindow.classList.add('text-red');
  messageWindow.innerText = "Message Has Been Deleted";
};

function deleteShallowThoughtsMessage() {
  for (var i = 0; i < shallowThoughts.length; i++) {
    if (messageWindow.innerText === shallowThoughts[i]) {
      shallowThoughts.splice(i, 1);
      deleteButton.classList.add('hidden');
    }
  }
};

function deleteDeepThoughtsMessage() {
  for (var i = 0; i < deepThoughts.length; i++) {
    if (messageWindow.innerText === deepThoughts[i]) {
      deepThoughts.splice(i, 1);
      deleteButton.classList.add('hidden');
    }
  }
};



// Display Delete message
// we need element
// User Delete message
// User should be able to delete message when the message appears
//
// "Get Knowledge" is pressed.
// image element hides
// p element appears
//
// new button appears to delete message
// user clicks delete message
// message is removed from array
// <p> element is hidden
// delete button is removed
// <img> element returns
//
// We need to know which array our message is sourced from
