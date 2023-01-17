// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeAction(like){
  like.textContent = like.textContent == EMPTY_HEART ? FULL_HEART : EMPTY_HEART
  like.className = like.className == "like-glyph" ? "activated-heart" : "like-glyph"
}

function failAction(){
  let hide = document.querySelector(".hidden")
  hide.className = ""
  setTimeout(() => {
    hide.className = "hidden"
  }, 3000);
}

function initilaize(){
  document.querySelectorAll(".like-glyph").forEach(e => {
    e.addEventListener('click', () =>
    mimicServerCall()
    .then(() => {likeAction(e)})
    .catch(() =>{failAction()}))
  });
}

initilaize()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}