//-------- first simple test for Jasmine ------>
function helloJasmine() {
  return "Hello Jasmine Testing";
}

let gameSpeed = 1000;
let roundArray = [
  "blue",
  "green",
  "red",
  "yellow",
  "blue",
  "green",
  "red",
  "yellow"
];

//checks if it is a touch screen device

$(document).ready(function() {});

//-------------temp play button
$("#game-center-circle").click(function() {
  computerRound(gameSpeed, roundArray);
});

//Play Sound
function playSound(sound) {
  // restarting it if its already playing
  $(`audio`).get(0).currentTime = 0;

  $(`#${sound}-classic-audio`)
    .get(0)
    .play();
}

// game play Button Pressed
function buttonPressed(button) {
  // variables
  let btn = $(`#game-button-${button}`);

  // adds pressed class and removers shortly after
  btn.addClass("game-button-pressed");

  setTimeout(function() {
    btn.removeClass("game-button-pressed");
  }, 200);
}

// computer Round
function computerRound(speed, roundList) {
  setTimeout(function() {
    let count = 0;

    roundList.forEach((value, i) => {
      setTimeout(function() {
        autoPlay(value);
        count++;
        if (count == roundList.length) {
          playerRound(roundArray);
        }
      }, i * speed);
    });
  }, speed);
}

//Player round
function playerRound(roundList) {
  let playerList = [];
  setTimeout(function() {
    let isTouch =
      !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;
    // hover effect if its not a touch device
    if (!isTouch) {
      $("#game-buttons > div").hover(
        function() {
          $(this).addClass("game-button-hovered");
        },
        function() {
          $(this).removeClass("game-button-hovered");
        }
      );
    }
    console.log("Done and Dusted!");
    // Game button clicked
    $("#game-buttons > div").click(function() {
      playSound(this.dataset.button);
      buttonPressed(this.dataset.button);
      playerList.push(this.dataset.button);
      console.log(playerList);
    });
  }, 2000);
}

// auto play
function autoPlay(button) {
  buttonPressed(button);
  playSound(button);
}
