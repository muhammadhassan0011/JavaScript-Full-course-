"use strick";
/*
// DOM: Structured representation of Html documents Allowa javascript to acess HTML elements and styles tp Manipulate them ..

// Selecting and manipulation of elements ...

document.querySelector(".number").textContent = 13;

//  .value :(   The value attribute defines a default value which will be displayed in the element on page load.  //You can set the initial value with the value attribute, but the value property contains the actual value of the control.)

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
/*
//  --------------------------------Again! - btn-------------------------------------==//
// anonumeous handler function .../
document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "8rem";
  document.querySelector(".guess").value = "";
  //  changing background-color - back to normal //
  document.querySelector("body").style.backgroundColor = "cadetblue";
  document.querySelector(".number").style.width = "8rem";
});


//---------------------------------------------------============================
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//------------------------------ CHECK - btn    ----------------------------------------/

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  ///        MANIPULATING CSS STYLES .../
  // when there is no input
  if (!guess) {
    displayMessage("No Number!");
    // when the player wins ../
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "black";

    document.querySelector(".number").style.width = "16rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // when the guess is wrong .--------------/ /
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You have loose the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
*/
/// when guess is too high
//    else if(guess > secretNumber){
//      if(score > 1){
//       document.querySelector(".message ").textContent = "Too High!";
//     score--;
//     document.querySelector(".score").textContent = score;
//      } else {
//        document.querySelector(".message ").textContent = "You  Loose The Game!";
//         document.querySelector(".score").textContent = 0;
//      }
// //   When guess is too low ../
//    } else if (guess < secretNumber){
// if(score > 1){
//       document.querySelector(".message ").textContent = "Too Low!";
//     score--;
//     document.querySelector(".score").textContent = score;
//      } else {
//        document.querySelector(".message ").textContent = "You  Loose The Game!";
//         document.querySelector(".score").textContent = 0;
//      }
//    }
//

const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const myMessage = document.querySelector(".message");
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".btn-again");

//----------------------------Btn Again -------------------------------===========//
againBtn.addEventListener("click", function () {
  myscore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = myscore;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "8rem";
  document.querySelector("body").style.backgroundColor = "cadetblue";
  myMessage.textContent = "Start Guessing...";
});

//====================================================================
let myscore = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1; //  genetares ramdom nuber /
let myHighscore = 0;

const displayMessage = function (message) {
  // document.querySelector(".message").textContent = message;
  myMessage.textContent = message;
};

//-=======------------------------BTN CHECK ---------------------------=========-//

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // 0 is falsey so , false is true by !___
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "black";
    number.style.width = "16rem";
    number.textContent = secretNumber;
    // document.querySelector(".number").textContent = secretNumber;

    if (myscore > myHighscore) {
      myHighscore = myscore;
      highScore.textContent = myHighscore;
    }
  } else if (guess !== secretNumber) {
    if (myscore > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      myscore--; // means -1 in each  ...
      score.textContent = myscore;
      // document.querySelector(".score").textContent = myscore;
    } else {
      displayMessage("You Losse the Game!");
      score.textContent = 0;
    }
  }
});
