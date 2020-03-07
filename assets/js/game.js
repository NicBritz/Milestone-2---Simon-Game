//-------- first simple test for Jasmine ------>
function helloJasmine() {
    return "Hello Jasmine Testing";
}

//---------- Button selectors ----------//
const gameCenterCircle = $("#game-circle-txt");
const allGameButtons = $("#game-buttons > div");
const greenGameButton = $("#green-game-button");
const redGameButton = $("#red-game-button");
const yellowGameButton = $("#yellow-game-button");
const blueGameButton = $("#blue-game-button");

// Audio constants
const greenClassicAudio = $("#green-classic-audio");
const redClassicAudio = $("#red-classic-audio");
const yellowClassicAudio = $("#yellow-classic-audio");
const blueClassicAudio = $("#blue-classic-audio");


let gameSpeed = 600;
let roundArray = [];
let playerActive = true;
let playerChoice = 0;//players current place in round
let score = 0;

/* check if touch screen -
 * https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices/28058919
 */
let isTouch =
    ("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

$(document).ready(function () {

    //show Main Modal https://github.com/kylefox/jquery-modal
    $("#main-menu").modal({
        fadeDuration: 600,
        escapeClose: false,
        clickClose: false,
        showClose: false
    });

    //---------- Main Play Button ----------//
    $("#playbtn").unbind().click(function () {
        $.modal.close();
        computerPlayRound(gameSpeed);
        updateScore();
        return false

    });

    //---------- Play Sound ----------//
    function playSound(sound) {
        // play appropriate audio file
        switch (sound) {
            case "green":
                greenClassicAudio[0].play();
                break;
            case "red":
                redClassicAudio[0].play();
                break;
            case "yellow":
                yellowClassicAudio[0].play();
                break;
            case "blue":
                blueClassicAudio[0].play();
                break;
        }
    }

    //---------- Colour buttons pressed ----------//

    function buttonPressed(button) {

        switch (button) {
            case "green":
                greenGameButton.addClass("game-button-pressed");
                setTimeout(function () {
                    greenGameButton.removeClass("game-button-pressed");
                }, 200);
                break;
            case "red":
                redGameButton.addClass("game-button-pressed");
                setTimeout(function () {
                    redGameButton.removeClass("game-button-pressed");
                }, 200);
                break;
            case "yellow":
                yellowGameButton.addClass("game-button-pressed");
                setTimeout(function () {
                    yellowGameButton.removeClass("game-button-pressed");
                }, 200);
                break;
            case "blue":
                blueGameButton.addClass("game-button-pressed");
                setTimeout(function () {
                    blueGameButton.removeClass("game-button-pressed");
                }, 200);
                break;
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
        setTimeout(function () {
            // delays between each round iteration
            roundArray.forEach(function (value, ind) {
                setTimeout(function () {
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
        allGameButtons.unbind().click(function () {
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
                updateScore();
                console.log("Round WON!!!!");
                //wait a couple to give clear indication of next round
                setTimeout(function () {
                    computerPlayRound(gameSpeed)
                }, 2000);

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

    //---------- Update Score----------//
    function updateScore() {
        score++;
        setTimeout(function () {
            gameCenterCircle.text(score);
        }, gameSpeed);

    }

    //---------- Game Over ----------//
    function gameOver() {
        alert("Game Over");
        //refresh the page
        location.reload();
    }


});
