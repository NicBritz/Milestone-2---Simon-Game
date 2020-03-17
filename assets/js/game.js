//---------------------------------------- Constants --------------------------------------------------//
const CENTER_CIRCLE = $("#center-circle");// Center Score Circle
const ALL_GAME_BUTTONS = $("#game-buttons > div"); // All The Game Buttons
const GREEN_GAME_BUTTON = $("#green-game-button"); // Green Button
const RED_GAME_BUTTON = $("#red-game-button"); // Red Button
const YELLOW_GAME_BUTTON = $("#yellow-game-button"); // Yellow Button
const BLUE_GAME_BUTTON = $("#blue-game-button"); // Blue Button
const LEVEL_UP_TEXT = $("#level-up-text"); // Level Up Text
const MAIN_MENU = $("#main_menu"); // Main Menu Area
const HELP_MENU = $("#help_menu"); // Help Menu Area
const SETTINGS_MENU = $("#settings_menu"); // Settings Menu Area
const GAME_OVER_MENU = $("#gameOver-menu"); // Game Over Menu Area
const HELP_BUTTON = $("#help_button > img"); // The Help Button
const SETTINGS_BUTTON = $("#settings_button > img"); // The Settings Button
const CLOSE_BUTTON = $("#close_button");
const MODE_PREV_BUTTON = $("#mode_prev_button");
const MODE_NEXT_BUTTON = $("#mode_next_button");
const MENU_BUTTON = $("#main_menu_button > img");
const mainModal = $("#main-modal");
const GAME_MODE_TEXT = $("#game-mode-text");
const GAME_MODE_DESC = $("#mode_description");
const QUOTE_URL = "https://type.fit/api/quotes";
const quoteTXT = $("#quote-txt");

const crackAudio = $("#crack-audio");

//Fix Audio Lag in safari browsers
// https://stackoverflow.com/questions/22216954/whats-causing-this-slow-delayed-audio-playback-in-safari
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

let currentGameMode = 0;
let gameSpeed = 600; // current speed the game is running
let roundArray = []; // current array of button presses for the round
let playerActive = true; // sets the player to an active state
let playerChoice = 0; //players current selection in the round
let score = 0; //players score or level
let bestScore = 0;
let gameEnd = false;
let lastOnly = false;
let reverse = false;

const GAME_MODES = [
    {
        name: "CLASSIC",
        desc: "Repeat the steps in the order they are presented, each round will increase in length."
    },
    {
        name: "RANDOM",
        desc: "Repeat the steps in the order they are presented, each round will be random and increase in length."
    },
    {
        name: "LAST-ONLY",
        desc: "Repeat the steps in the order they were presented, only the final step will play back."
    },
    {
        name: "REVERSE",
        desc: "Repeat the steps in a reverse order to which they are presented."
    }];

let quotePhrase = {
    text: "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa"
};

//-------------------------------------------- Show Main Modal ----------//
function showMainModal() {

    if (!gameEnd) {
        // Display the Main Menu
        mainMenu();
    } else {
        // Display Game Over
        gameOverMenu();
        gameEnd = false;
    }


    //source: https://github.com/kylefox/jquery-modal
    mainModal.modal({
        fadeDuration: 200, // Fade In
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
    GAME_OVER_MENU.hide();

}

function helpMenu() {
    MAIN_MENU.hide();
    HELP_MENU.show();
    SETTINGS_MENU.hide();
    CLOSE_BUTTON.show();
    GAME_OVER_MENU.hide();
}

function settingsMenu() {
    MAIN_MENU.hide();
    HELP_MENU.hide();
    SETTINGS_MENU.show();
    CLOSE_BUTTON.show();
    GAME_OVER_MENU.hide();
}

function gameOverMenu() {
    MAIN_MENU.hide();
    HELP_MENU.hide();
    SETTINGS_MENU.hide();
    CLOSE_BUTTON.hide();
    GAME_OVER_MENU.show();
}

//------------- Update the game mode
function updateGameMode(buttonObj) {

    //Prev Button
    if (buttonObj.id === "mode_prev_button") {
        MODE_NEXT_BUTTON.removeClass("gray-out");

        //(currentGameMode === 0) ? MODE_PREV_BUTTON.addClass("gray-out"):MODE_PREV_BUTTON.removeClass("gray-out");
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

//---------- Colour buttons pressed ----------//

function buttonPressed(button) {
    //adds button pressed class
    $(`#${button}-game-button`).addClass("game-button-pressed");
    setTimeout(function () {
        $(`#${button}-game-button`).removeClass("game-button-pressed");
    }, 200);

    //Pause current audio


    let snd = $(`#${button}-classic-audio`)[0];
    // disableSounds();
    snd.currentTime = 0;
    snd.play()
    //play button sound
    // colorAudio.currentTime = 0;
    // colorAudio.play();

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

function deactivatePlayer() {
    playerActive = false;
    GREEN_GAME_BUTTON.off();
    RED_GAME_BUTTON.off();
    BLUE_GAME_BUTTON.off();
    YELLOW_GAME_BUTTON.off();
    CENTER_CIRCLE.removeClass("circle-green").addClass("circle-red");
    ALL_GAME_BUTTONS.removeClass("active")
}

function activatePlayer() {
    playerActive = true;
    CENTER_CIRCLE.removeClass("circle-red").addClass("circle-green");
    ALL_GAME_BUTTONS.addClass("active")
}


//---------- Computers Turn ----------//
function computerPlayRound() {

    deactivatePlayer();

    //current choice
    playerChoice = 0;
    if (currentGameMode === 0) {
        reverse = false;
        //Classic Mode
        generateRound();
        lastOnly = false;
    } else if (currentGameMode === 1) {
        //Random Mode
        reverse = false;
        randomiseRound();
        lastOnly = false;
    } else if (currentGameMode === 2) {
        //Last Only Mode
        reverse = false;
        generateRound();
        lastOnly = true;
    } else if (currentGameMode === 3) {
        //Reverse
        lastOnly = false;
        reverse = true;
        generateRound();
    }

    if (lastOnly) {
        setTimeout(function () {
            buttonPressed(roundArray[roundArray.length - 1]);
            playerRound();
        }, gameSpeed)

    } else {

        let i = 0;
        (function loop() {
            buttonPressed(roundArray[i]);
            if (++i < roundArray.length) {
                setTimeout(loop, gameSpeed);  // call myself in 3 seconds time if required
            } else if (i === roundArray.length) {
                setTimeout(function () {
                    if (reverse) {
                        roundArray.reverse();
                    }
                    playerRound();
                }, gameSpeed)
            }
        })();
    }


}

//---------- Players Turn ----------//
function playerRound() {
    activatePlayer();

    GREEN_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        if (playerActive) {
            buttonPressed(button);
            checkResult(button);
        }

    });
    RED_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        if (playerActive) {
            buttonPressed(button);
            checkResult(button);
        }

    });
    BLUE_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        if (playerActive) {
            buttonPressed(button);
            checkResult(button);
        }

    });
    YELLOW_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        if (playerActive) {
            buttonPressed(button);
            checkResult(button);
        }

    });

}


//---------- Check if player wins or loses ----------//
function checkResult(button) {

    //normal order
    if (button !== roundArray[playerChoice]) {
        //Player Failed!!
        crackedButton(button);
        gameOver();
    } else {
        if (playerChoice + 1 === roundArray.length) {
            //Round over
            setTimeout(function () {
                if (reverse) {
                    roundArray.reverse();
                }
                computerPlayRound();
                updateScore();
            }, 800)

        }
    }


    playerChoice++

}

//---------- Play crack sound and display crack overlay if player loses ----------//
function crackedButton(button) {
    $(`#${button}-game-button`).addClass("cracked");
    crackAudio[0].play();

    setTimeout(function () {
        $(`#${button}-game-button`).removeClass("cracked");
    }, 500)
}

//---------- Update Score----------//
function updateScore() {

    score++;
    LEVEL_UP_TEXT.removeClass("scale-up");
    //Level up if score is multiple of 5
    if (gameSpeed > 200 && score % 5 === 0) {
        LEVEL_UP_TEXT.addClass("scale-up");
        gameSpeed -= 100;
    }
    if (score > bestScore) {
        bestScore = score - 1;
    }

    $("#game-circle-txt").text(score);

}

//---------- Game Over ----------//
function gameOver() {

    gameEnd = true;
    $("#current-score").text(score - 1);
    $("#best-score").text(bestScore);
    $("#mode-text").text(GAME_MODES[currentGameMode].name);
    roundArray = [];
    score = 0;
    gameSpeed = 600;
    showMainModal();

}

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
            // Fetch a random quote form the retrieved Json file
            quotePhrase = data[Math.floor(Math.random() * data.length)];

            // Add Unknown author if there is none in the object
            if (!quotePhrase.author) {
                quotePhrase.author = "Unknown"
            }

            // Adds the quote text to the quote html
            quoteTXT.html(`<p>${quotePhrase.text}</p><br>
                     <p><em>"${quotePhrase.author}"</em></p>`);

            //Launch the main menu
            showMainModal()

        })
        .catch((error) => {
            console.error('Oops there was a problem...', error);
        });

    //--------------------------------------------- BUTTONS ---------------------------------------------//
    MENU_BUTTON.off().on("click touch", mainMenu);
    CLOSE_BUTTON.off().on("click touch", mainMenu);
    HELP_BUTTON.off().on("click touch", helpMenu);
    SETTINGS_BUTTON.off().on("click touch", settingsMenu);


    MODE_NEXT_BUTTON.off().on("click touch", function () {
        //-- go to next game mode --//
        if (currentGameMode < 3) {
            currentGameMode++;
            updateGameMode(this);
        }
    });

    MODE_PREV_BUTTON.off().on("click touch", function () {
        //-- go to previous game mode --//
        if (currentGameMode > 0) {
            currentGameMode--;
            updateGameMode(this);
        }
    });

    //-- Start the game when the Play or Replay buttons are pressed --//
    $(".play").off().on("click touch", function () {
        updateScore();
        //-- Close any open modals --//
        $.modal.close();
        //-- Start the game with the computers turn after 300ms--//
        setTimeout(function () {
            computerPlayRound(gameSpeed);
        }, 300);
    });


})
;