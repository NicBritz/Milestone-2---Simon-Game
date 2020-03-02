//-------- first simple test for Jasmine ------>
// function helloJasmine() {
//   return "Hello Jasmine Testing";
// }

let gameSpeed = 500;
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

$(document).ready(function() {
  //--------------------------------------------------------------- temp play button -----//
  $("#game-center-circle").click(function() {
    gameOn = true;
    computerRound(gameSpeed, roundArray);
  });

  //--------------------------------------------------------------- Play Sound -------------//
  function playSound(sound) {
    // restarting it if its already playing
    $(`audio`).get(0).currentTime = 0;

    $(`#${sound}-classic-audio`)
      .get(0)
      .play();
  }

  //--------------------------------------------------------------- game play Button Pressed
  function buttonPressed(button) {
    let btn = $(`#game-button-${button}`);

    // adds pressed class and removers shortly after
    btn.addClass("game-button-pressed");

    setTimeout(function() {
      btn.removeClass("game-button-pressed");
    }, 200);
  }

  //-------------------------------------------------------------------------- computer Round
  function computerRound(speed, roundList) {
    setTimeout(function() {
      let count = 0;
      // delays between each iteration
      //https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30
      roundList.forEach(function(value, ind) {
        setTimeout(function() {
          autoPlay(value);
          count++;
          if (count == roundList.length) {
            playerRound(roundArray);
            
          }
        }, ind * speed);
      });
    }, speed);
  }

  // ------------------------------------------------------------------------------ Player round
  function playerRound() {
    let playerTurn = 0;
    setTimeout(function() {
      //checks if it is a touch screen device source:
      //https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices/28058919
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

        //compare player and computer
        if (roundArray[playerTurn] == this.dataset.button) {
          console.log(
            `computer: ${roundArray[playerTurn]} <=> Player: ${this.dataset.button}`
          );
          console.log("pass");
        } else {
          console.log(
            `computer: ${roundArray[playerTurn]} <=> Player: ${this.dataset.button}`
          );
          console.log("fail");    
           gameOver();
        }
        playerTurn++;
      });
    }, 2000);
  }

  // auto play
  function autoPlay(button) {
    buttonPressed(button);
    playSound(button);
  }

  function gameOver() {
    alert("Game Over");
    //refresh the page
    location.reload();
  }
});
