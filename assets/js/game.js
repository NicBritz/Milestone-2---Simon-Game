//---------- Button selectors ----------//
const gameCenterCircle = $("#game-circle-txt");
const gameCenterCircleBorder = $("#game-center-circle");
const allGameButtons = $("#game-buttons > div");
const greenGameButton = $("#green-game-button");
const redGameButton = $("#red-game-button");
const yellowGameButton = $("#yellow-game-button");
const blueGameButton = $("#blue-game-button");

//=================================================== NEW =====================//

//=========== MENUS ================//
const MAIN_MENU = $("#main_menu");
const HELP_MENU = $("#help_menu");
const SETTINGS_MENU = $("#settings_menu");

//=========== Buttons ================//
const HELP_BUTTON = $("#help_button");
const SETTINGS_BUTTON = $("#settings_button");
const PLAY_BUTTON = $("#play_button");
const CLOSE_BUTTON = $("#close_button");
const MODE_PREV_BUTTON = $("#mode_prev_button");
const MODE_NEXT_BUTTON = $("#mode_next_button");

//---------- Modals ----------//
const mainModal = $("#main-modal");

const GAME_MODES = [
    {
        name: "CLASSIC",
        desc: "This is the classic mode"
    },
    {
        name: "RANDOM",
        desc: "This is the random mode"
    },
    {
        name: "LAST-ONLY",
        desc: "This is the last-only mode"
    },
    {
        name: "REVERSE",
        desc: "This is the reverse mode"
    }];
const GAME_MODE_TEXT = $("#game-mode-text");
const GAME_MODE_DESC = $("#mode_description");
let currentGameMode = 0;

//---------- Quote URL ----------//
const QUOTE_URL = "https://type.fit/api/quotes";
const quoteTXT = $("#quote-txt");

//---------- Audio selectors ----------//
const greenClassicAudio = $("#green-classic-audio");
const redClassicAudio = $("#red-classic-audio");
const yellowClassicAudio = $("#yellow-classic-audio");
const blueClassicAudio = $("#blue-classic-audio");
const crackAudio = $("#crack-audio");

//---------- Game Variables ----------//
let gameSpeed = 600; // current speed the game is running
let gameMode = 0; // Game Modes
let roundArray = []; // current array of button presses for the round
let playerActive = true; // sets the player to an active state
let playerChoice = 0; //players current selection in the round
let score = 0; //players score or level
let quotePhrase = {
    text: "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa"
};


$(document).ready(function () {

        /*---------- Fetch a random Quote from Quotes API ---------->
        *from https://type.fit/api/quotes found
        *via: https://www.freecodecamp.org/forum/t/free-api-inspirational-quotes-json-with-code-examples/311373
        * ----------------------------------------------------------*/
        fetch(QUOTE_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('No network response');
                }
                return response.json();
            })
            .then((data) => {
                let rnd = Math.floor(Math.random() * data.length);
                quotePhrase = data[rnd];

                // add Unknown author if there is none in the object
                if (quotePhrase.author === null || quotePhrase.author === undefined) {
                    quotePhrase.author = "Unknown"
                }

                // Adds the quote text to the quote html
                quoteTXT.html(`<p>${quotePhrase.text}</p><br>
                     <p><em>"${quotePhrase.author}"</em></p>`);
                showMainModal()

            })
            .catch((error) => {
                console.error('Oops there was a problem...', error);
            });


        //-------------------------------------------- Show Main Modal ----------//
        function showMainModal() {
            // Display the Main Menu
            mainMenu();

            //source: https://github.com/kylefox/jquery-modal
            mainModal.modal({
                fadeDuration: 500, // Fade In
                // Prevent user from closing the modal without a valid selection
                escapeClose: false,
                clickClose: false,
                showClose: false
            });
        }

        //--------------------------------------------- GUI/MENU ----------//
        function mainMenu() {
            MAIN_MENU.show();
            HELP_MENU.hide();
            SETTINGS_MENU.hide();
            CLOSE_BUTTON.hide();
        }

        function helpMenu() {
            MAIN_MENU.hide();
            HELP_MENU.show();
            SETTINGS_MENU.hide();
            CLOSE_BUTTON.show();
        }

        function settingsMenu() {
            MAIN_MENU.hide();
            HELP_MENU.hide();
            SETTINGS_MENU.show();
            CLOSE_BUTTON.show();
        }


        //--------------------------------------------- MENU Button Presses ----------//

        CLOSE_BUTTON.on("click touch", function () {
            mainMenu();
        });

        HELP_BUTTON.on("click touch", function () {
            helpMenu();
        });

        SETTINGS_BUTTON.on("click touch", function () {
            settingsMenu();
        });

        MODE_NEXT_BUTTON.on("click touch", function () {

            if (currentGameMode < 3) {
                currentGameMode++;
                updateGameMode(this);
            }
        });

        MODE_PREV_BUTTON.on("click touch", function () {

            if (currentGameMode > 0) {
                currentGameMode--;
                updateGameMode(this);
            }
        });

        //------------- Update the game mode
        function updateGameMode(buttonObj) {
                //Prev Button
            if (buttonObj.id === "mode_prev_button") {
                MODE_NEXT_BUTTON.removeClass("gray-out");
                if (currentGameMode === 0) {
                    MODE_PREV_BUTTON.addClass("gray-out");
                }
            } else {
                //Next Button
                MODE_PREV_BUTTON.removeClass("gray-out");
                if (currentGameMode === 3) {
                    MODE_NEXT_BUTTON.addClass("gray-out");
                }
            }
            //Change the game mode display text
            GAME_MODE_TEXT.text(GAME_MODES[currentGameMode].name);
            GAME_MODE_DESC.text(GAME_MODES[currentGameMode].desc);
        }

        PLAY_BUTTON.on("click touch", function () {
            //-- Close any open modals --//
            $.modal.close();
            //-- Computers Turn --//
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
                    }, 100);
                    break;
                case "red":
                    redGameButton.addClass("game-button-pressed");
                    setTimeout(function () {
                        redGameButton.removeClass("game-button-pressed");
                    }, 100);
                    break;
                case "yellow":
                    yellowGameButton.addClass("game-button-pressed");
                    setTimeout(function () {
                        yellowGameButton.removeClass("game-button-pressed");
                    }, 100);
                    break;
                case "blue":
                    blueGameButton.addClass("game-button-pressed");
                    setTimeout(function () {
                        blueGameButton.removeClass("game-button-pressed");
                    }, 100);
                    break;
            }
        }


//---------- Randomly add an element to the round array ----------//
        function generateRound() {
            let choices = ["red", "green", "blue", "yellow"];
            roundArray.push(choices[Math.floor(Math.random() * choices.length)]);

        }

//        randomize round
        function randomiseRound() {
            if (roundArray.length < 2) {
                generateRound();
            } else {
                let currentLength = roundArray.length + 1;
                roundArray = [];
                //randomise results based on the arrays elements
                for (let i = 0; i < currentLength; i++) {
                    generateRound();
                }
            }

        }


//    level up
        function levelUP() {
            if (gameSpeed > 200) {
                if (score % 5 === 0) {
                    console.log("level up");
                    gameSpeed -= 50;
                }
            }
        }

//---------- Computers Turn ----------//
        function computerPlayRound(speed) {
            setTimeout(function () {
                //computer stop ring
                gameCenterCircleBorder.addClass("center-circle-stop");
                // player go ring
                gameCenterCircleBorder.removeClass("center-circle-go");
            }, gameSpeed);
            //current choice
            playerChoice = 0;
            if (gameMode === 0) {
                //generate next round element
                generateRound();
            } else if (gameMode === 1) {
                randomiseRound();
            }

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
                            playerActive = true;
                            playerRound();
                        }
                    }, ind * speed);
                });
            }, speed);
        }

//---------- Players Turn ----------//
        function playerRound() {
            setTimeout(function () {
                //computer stop ring
                gameCenterCircleBorder.removeClass("center-circle-stop");
                gameCenterCircleBorder.addClass("center-circle-go");
                // player go ring

            }, gameSpeed);

            allGameButtons.unbind().click(function () {
                let pressed = this.dataset.button;
                if (playerActive) {
                    playSound(pressed);
                    // buttonPressed(pressed);
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
                crackedButton(button);
                console.log("nope");
                gameOver();
                return false;
            }
        }

//---------- Play crack sound and display crack overlay if player loses ----------//
        function crackedButton(button) {

            switch (button) {
                case "green":
                    greenGameButton.addClass("cracked");
                    crackAudio[0].play();
                    break;

                case "red":
                    redGameButton.addClass("cracked");
                    crackAudio[0].play();
                    break;

                case "yellow":
                    yellowGameButton.addClass("cracked");
                    crackAudio[0].play();
                    break;

                case "blue":
                    blueGameButton.addClass("cracked");
                    crackAudio[0].play();
                    break;
            }
        }

//---------- Update Score----------//
        function updateScore() {
            score++;
            setTimeout(function () {
                levelUP();
                gameCenterCircle.text(score);
            }, gameSpeed);

        }

//---------- Game Over ----------//
        function gameOver() {
            setTimeout(function () {
                location.reload();
            }, 500);
            // location.reload();
        }
    }
)
;
