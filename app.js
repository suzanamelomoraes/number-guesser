let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const gameUI = document.querySelector("game"),
  minNumUI = document.querySelector(".min-num"),
  maxNumUI = document.querySelector(".max-num"),
  guessBtnUI = document.querySelector("#guess-btn"),
  guessInputUI = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNumUI.textContent = min;
maxNumUI.textContent = max;

guessBtnUI.addEventListener("click", function() {
  let guess = parseInt(guessInputUI.value);
});
