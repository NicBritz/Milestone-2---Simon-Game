//-------- first simple test for Jasmine ------>
// function helloJasmine() {
//   return "Hello Jasmine Testing";
// }

let gameSpeed = 1000;
let roundArray = [];
let playerTurn = 0;
let roundLen = 1;

$(document).ready(function() {
  //--------------------------------------------------------------- temp play button -----//
  $("#game-center-circle")
    .unbind()
    .click(function() {
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
    randomizeRound();
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
        // $("#game-buttons > div").hover(
        //   function() {
        //     $(this).addClass("game-button-hovered");
        //   },
        //   function() {
        //     $(this).removeClass("game-button-hovered");
        //   }
        // );
      }
      console.log("Done and Dusted!");

      // Game button clicked https://stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times
      $("#game-buttons > div")
        .unbind()
        .click(function() {
          let pressed = this.dataset.button;

          playSound(pressed);
          buttonPressed(pressed);
          checkResult(pressed, playerTurn);
          playerTurn += 1;
          console.log("player turn " + playerTurn);
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

  // randomize next turn
  function randomizeRound() {
    playerTurn = 0;
    choices = ["red", "green", "blue", "yellow"];

    roundArray.push(choices[Math.floor(Math.random() * choices.length)]);
    console.log(roundArray);
  }

  // check result
  function checkResult(buttonPressed, turn) {

    if (roundLen < roundArray.length) {
      if (buttonPressed === roundArray[turn]) {
        console.log("pass");
        roundLen++
      } else {
        gameOver();
        return;
      }
      return console.log(
        `Pressed: ${buttonPressed}  ==== compared ${roundArray[turn]}`
      );
    }else{
      setTimeout(function() {
        computerRound(gameSpeed, roundArray);
      }, 2000);
    }
  }
});
