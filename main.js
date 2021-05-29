// user selects radio button affirmation or mantra
// user clicks recieve message
// random message appears in new window replacing the image icon
// this could potentially be a toggle between image element and text content element or a hidden box event listener
// The message will be stored in an array


// Query Selectors
var message = document.getElementById('message');
var messageWindow = document.querySelector('.message-box');
var imageWindow = document.querySelector('.image-box');
//Should search the <form> element
var messageForm = document.querySelector('form');
var messageValue = document.querySelector('#log');
var deepThoughts = ["Hey","You"];
var shallowThoughts = ["Is there anybody out there?", "Pigs on a Wing"];


//Event Listeners

// should invoke the recieveMessage function when the "submit" button is clicked
messageForm.addEventListener("submit", receiveMessage);

// Event Handlers

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// should search the <form> element for the checked radio box and return the value
function receiveMessage() {
  event.preventDefault();
  if (messageForm.value = "shallow-thought") {
    message.innerText = shallowThoughts[getRandomIndex(shallowThoughts)];
  } else (messageForm.value = "deep-thought") {
    message.innerText = deepThoughts[getRandomIndex(deepThoughts)];
  }
  revealMessage()
}

// should hide imageWindow and show messageWindow
function revealMessage() {
  imageWindow.classList.add("hidden");
  messageWindow.classList.remove("hidden");
  }
