//---------- Button selectors ----------//
const gameCenterCircle = $("#game-circle-txt");
const allGameButtons = $("#game-buttons > div");
const greenGameButton = $("#green-game-button");
const redGameButton = $("#red-game-button");
const yellowGameButton = $("#yellow-game-button");
const blueGameButton = $("#blue-game-button");
const playButton = $("#playbtn");

//---------- Modals ----------//
const mainModal = $("#main-modal");

//---------- Audio selectors ----------//
const greenClassicAudio = $("#green-classic-audio");
const redClassicAudio = $("#red-classic-audio");
const yellowClassicAudio = $("#yellow-classic-audio");
const blueClassicAudio = $("#blue-classic-audio");

//---------- Game Variables ----------//
let gameSpeed = 600; // current speed the game is running
let roundArray = []; // current array of button presses for the round
let playerActive = true; // sets the player to an active state
let playerChoice = 0; //players current selection in the round
let score = 0; //players score or level

/* check if touch screen -
 * https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices/28058919
 */
let isTouch =
    ("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

$(document).ready(function () {

    //---------- Show Main Modal ----------//
    //source: https://github.com/kylefox/jquery-modal
    mainModal.modal({
        fadeDuration: 600, // Fade In
        // Prevent user from closing the modal without a valid selection
        escapeClose: false,
        clickClose: false,
        showClose: false
    });

    //---------- Main Play Button ----------//
    playButton.unbind().click(function () {
        $.modal.close(); // close all open modals -- source: https://github.com/kylefox/jquery-modal
        computerPlayRound(gameSpeed);
        updateScore();
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
                }, gameSpeed / 2);

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
