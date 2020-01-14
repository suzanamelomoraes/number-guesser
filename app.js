let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const gameUI = document.querySelector("#game"),
  minNumUI = document.querySelector(".min-num"),
  maxNumUI = document.querySelector(".max-num"),
  guessBtnUI = document.querySelector("#guess-btn"),
  guessInputUI = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNumUI.textContent = min;
maxNumUI.textContent = max;

gameUI.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtnUI.addEventListener("click", function() {
  let guess = parseInt(guessInputUI.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}:`, "red");
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is the correct number, YOU WIN!`, "green");

    // guessInputUI.disabled = true;
    // guessInputUI.style.borderColor = "green";
    // setMessage(`${winningNum} is the correct number, YOU WIN!`, "green");
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `You lost all your guesses. The correct number was ${winningNum}.`,
        "red"
      );
      //   guessInputUI.disabled = true;
      //   guessInputUI.style.borderColor = "red";
      //   setMessage(
      //     `You lost all your guesses. The correct number was ${winningNum}.`,
      //     "red"
      //   );
    } else {
      guessInputUI.value = "";
      guessInputUI.style.borderColor = "red";
      setMessage(
        `${guess} is not the correct number. You have ${guessesLeft} guess left`,
        "red"
      );
    }
  }
});

function gameOver(won, msg) {
  let color;

  won ? (color = "green") : (color = "red");

  guessInputUI.disabled = true;
  guessInputUI.style.borderColor = color;
  setMessage(msg, color);

  guessBtnUI.value = "Play Again";
  guessBtnUI.className += "play-again";
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
