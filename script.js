"use strict";

//Değişkenler
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

//Oyun başlangıcı
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Oyunu başlatma
check.addEventListener("click", function () {
  const guessValue = Number(guess.value);

  // İçi boş tahmin
  if (!guessValue) {
    displayMessage("⛔️ No number!");
  }

  //doğru tahmin
  else if (guessValue === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    //Yüksek tahmin
    if (scoreValue > highscore) {
      highscore = scoreValue;
    }
  }

  //Yanlış tahmin
  else if (guessValue !== secretNumber) {
    //Yüksek tahmin
    if (scoreValue > 1) {
      displayMessage(
        guessValue > secretNumber ? "📈 Too high!" : "📉 Too low!"
      );
      scoreValue--;
      score.textContent = scoreValue;
    }

    //Oyunu kaybetme
    else {
      displayMessage("💥 You lost the game!");
      score.textContent = 0;
    }
  }
});

//Oyunu yeniden başlatma
again.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  score.textContent = scoreValue;
  number.textContent = "?";
  guess.value = "";
});
