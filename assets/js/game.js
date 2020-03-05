//-------- first simple test for Jasmine ------>
function helloJasmine() {
  return "Hello Jasmine Testing";
}

// Button constants
const gameCenterCircle = document.getElementById("game-center-circle");

// Audio constants
const allAudio = document.getElementsByTagName("audio");
const greenClassicAudio = document.getElementById("green-classic-audio");
const redClassicAudio = document.getElementById("red-classic-audio");
const yellowClassicAudio = document.getElementById("yellow-classic-audio");
const blueClassicAudio = document.getElementById("blue-classic-audio");

// Game colour buttons
const allGameButtons = $("#game-buttons > div");
const greenGameButton = document.getElementById("green-game-button");
const redGameButton = document.getElementById("red-game-button");
const yellowGameButton = document.getElementById("yellow-game-button");
const blueGameButton = document.getElementById("blue-game-button");

let gameSpeed = 1000;
let roundArray = [];
let playerTurn = 0;
let roundLen = 1;
let playerActive = false;
let playerTurnArray = [];
let playerChoice = 0;//players current place in round

/* check if touch screen -
 * https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices/28058919
 */
let isTouch =
  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

$(document).ready(function() {

  //--------------------------------------------------------------- temp play button -----//
  gameCenterCircle.addEventListener("click", function() {
    computerPlayRound(gameSpeed);
  });

  //---------- Play Sound ----------//
  function playSound(sound) {
    // restart any audio already playing
    for (var i = 0; i < allAudio.length; i++) {
      allAudio[i].currentTime = 0;
    }
    // play appropriate audio file
    switch (sound) {
      case "green":
        greenClassicAudio.play();
        break;
      case "red":
        redClassicAudio.play();
        break;
      case "yellow":
        yellowClassicAudio.play();
        break;
      case "blue":
        blueClassicAudio.play();
        break;
    }
  }

  //---------- Game colour buttons pressed ----------//

  function buttonPressed(button) {
    switch (button) {
      case "green":
        greenGameButton.classList.add("game-button-pressed");
        setTimeout(function() {
          greenGameButton.classList.remove("game-button-pressed");
        }, 200);
        break;
      case "red":
        redGameButton.classList.add("game-button-pressed");
        setTimeout(function() {
          redGameButton.classList.remove("game-button-pressed");
        }, 200);
        break;
      case "yellow":
        yellowGameButton.classList.add("game-button-pressed");
        setTimeout(function() {
          yellowGameButton.classList.remove("game-button-pressed");
        }, 200);
        break;
      case "blue":
        blueGameButton.classList.add("game-button-pressed");
        setTimeout(function() {
          blueGameButton.classList.remove("game-button-pressed");
        }, 200);
        break;
    }
  }

  //---------- Game colour buttons Hovered ----------//
  allGameButtons.hover(mouseInBtn, mouseOutBtn);

  //in
  function mouseInBtn() {
    if (playerActive) {
      // hover effect if its not a touch device
      if (!isTouch) {
        this.classList.add("game-button-hovered");
      }
    }
  }

  //out
  function mouseOutBtn() {
    if (playerActive) {
      // hover effect if its not a touch device
      if (!isTouch) {
        this.classList.remove("game-button-hovered");
      }
    }
  }

//---------- Randomly add an element to the round array ----------//
  function generateRound() {
    let choices = ["red", "green", "blue", "yellow"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

//---------- Computers Turn ----------//
function computerPlayRound(speed) {
  //current choice
  playerChoice = 0;
  //generate next round element
  roundArray.push(generateRound());

  //Player is deactivated
  playerActive = false;

  //Computer play Round
  setTimeout(function() {
    // delays between each round iteration
    roundArray.forEach(function(value, ind) {
      setTimeout(function() {
        buttonPressed(value);
        playSound(value);
        if (ind + 1 === roundArray.length) {
          console.log("computer round ended");
          playerActive = true;
          playerRound();
        }
      }, ind * speed);
    });
  }, speed);
}
  
  //---------- Players Turn ----------//
  function playerRound() {
    allGameButtons.unbind().click(function() {
      let pressed = this.dataset.button;
      if (playerActive) {
        playSound(pressed);
        buttonPressed(pressed);
        checkResult(pressed);
      }
    });
  }


  //---------- Check if player wins or loses ----------//
  function checkResult(button) {
    //Check if the players last last choice is correct
    if (button === roundArray[playerChoice]) {
      console.log("yes");
      if (playerChoice + 1 === roundArray.length) {
        console.log("Round WON!!!!")
        //wait a couple to give clear indication of next round
        setTimeout(function(){computerPlayRound(gameSpeed)},2000);
        return;
      } else {
        playerChoice++;
        return true;
      }
    } else {
      console.log("nope");
      gameOver();
      return false;
    }
  }

    //---------- Game Over ----------//
    function gameOver() {
      alert("Game Over");
      //refresh the page
      location.reload();
    }

  
});
