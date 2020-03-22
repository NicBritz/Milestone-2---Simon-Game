//-- Constants --//
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
const CLOSE_BUTTON = $("#close_button");// Close Button
const MODE_PREV_BUTTON = $("#mode_prev_button"); // Previous Button
const MODE_NEXT_BUTTON = $("#mode_next_button"); // Next Button
const CLICK_AUDIO = $("#click-audio");
/* Fix Audio Lag in safari browsers:
* https://stackoverflow.com/questions/22216954/whats-causing-this-slow-delayed-audio-playback-in-safari*/
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
//-- Game Modes object --//
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

//-- Variables --//
let currentGameMode = 0;
let quotePhrases;
let gameSpeed = 600; // current speed the game is running
let roundArray = []; // current array of button presses for the round
let playerActive = true; // sets the player to an active state
let playerChoice = 0; //players current selection in the round
let score = 0; //players current score
let bestScore = 0;// best score
let gameEnd = false; // game ended
let lastOnly = false; // last only mode
let reverse = false; // reverse mode

//-- GUI/MENU --//
function fetchQuote() {
    /*from https://type.fit/api/quotes found
    *via: https://www.freecodecamp.org/forum/t/free-api-inspirational-quotes-json-with-code-examples/311373
    * ----------------------------------------------------------*/
    fetch("https://type.fit/api/quotes")
        .then((response) => {
            if (!response.ok) {
                throw new Error('No network response');
            }
            return response.json();
        })
        .then((data) => {
            // add data to quote phrases
            quotePhrases = data;
            //Launch the main menu
            showMainModal()

        })
        .catch((error) => {
            //catch any errors
            console.error('Oops there was a problem...', error);
        });
}

//-- Pick a random quote --//
function pickQuote() {
    let phrase = quotePhrases[Math.floor(Math.random() * quotePhrases.length)];
    // Add Unknown author if there is none in the object
    if (!phrase.author) {
        phrase.author = "Unknown"
    }
    // Adds the quote text to the quote html
    $(".quote-txt-box").html(`<p>${phrase.text}</p><br>
                     <p><em>"${phrase.author}"</em></p>`);
}

//-- Show Main Modal --//
function showMainModal() {
    pickQuote();
    if (!gameEnd) {
        // pick a random quote

        // Display the Main Menu if it is a new game
        mainMenu();
    } else {
        //pickQuote();
        // Display Game Over if game has ended
        gameOverMenu();
        gameEnd = false;
    }
    //source: https://github.com/kylefox/jquery-modal
    $("#main-modal").modal({
        fadeDuration: 200, // Fade In/Out
        // Prevent user from closing the modal without a valid selection
        escapeClose: false,
        clickClose: false,
        showClose: false
    });
}

//-- Show Main Menu --//
function mainMenu() {
    CLICK_AUDIO[0].play();
    MAIN_MENU.show();
    HELP_MENU.hide();
    SETTINGS_MENU.hide();
    CLOSE_BUTTON.hide();
    GAME_OVER_MENU.hide();
}

//-- Show Help Menu --//
function helpMenu() {
    CLICK_AUDIO[0].play();
    HELP_MENU.show();
    CLOSE_BUTTON.show();
    MAIN_MENU.hide();
    SETTINGS_MENU.hide();
    GAME_OVER_MENU.hide();
}

//-- Show Settings Menu --//
function settingsMenu() {
    CLICK_AUDIO[0].play();
    SETTINGS_MENU.show();
    CLOSE_BUTTON.show();
    MAIN_MENU.hide();
    HELP_MENU.hide();
    GAME_OVER_MENU.hide();
}

//-- Show GameOver Menu --//
function gameOverMenu() {
    GAME_OVER_MENU.show();
    MAIN_MENU.hide();
    HELP_MENU.hide();
    SETTINGS_MENU.hide();
    CLOSE_BUTTON.hide();
}


//-- Change the game mode --//
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
    $("#game-mode-text").text(GAME_MODES[currentGameMode].name);
    $("#mode_description").text(GAME_MODES[currentGameMode].desc);
}

//---------- Colour buttons pressed ----------//
function buttonPressed(button) {
    //animates the button being pressed
    $(`#${button}-game-button`).addClass("game-button-pressed");
    setTimeout(function () {
        $(`#${button}-game-button`).removeClass("game-button-pressed");
    }, 200);
    //Play the Audio
    let snd = $(`#${button}-classic-audio`)[0];
    snd.currentTime = 0;
    snd.play();
}

//-- Randomly generate the next round step --//
function generateRound() {
    let choices = ["red", "green", "blue", "yellow"];
    roundArray.push(choices[Math.floor(Math.random() * choices.length)]);
}

//-- randomize reach round --//
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

//-- Deactivate the player  --//
function deactivatePlayer() {
    playerActive = false;
    GREEN_GAME_BUTTON.off();
    RED_GAME_BUTTON.off();
    BLUE_GAME_BUTTON.off();
    YELLOW_GAME_BUTTON.off();
    CENTER_CIRCLE.removeClass("circle-green").addClass("circle-red");
    ALL_GAME_BUTTONS.removeClass("active");
}

//-- Activate the player --//
function activatePlayer() {
    CENTER_CIRCLE.removeClass("circle-red").addClass("circle-green");
    ALL_GAME_BUTTONS.addClass("active");
}

//-- Computers turn --//
function computerPlayRound() {
    deactivatePlayer();//Deactivates the player
    playerChoice = 0;//Resets the players current choice;
    //Checks the Current GameMode  and plays accordingly;
    switch (currentGameMode) {
        case 0:
            //Classic Game Mode
            reverse = false;
            lastOnly = false;
            generateRound();
            break;

        case 1:
            //Random Game Mode
            reverse = false;
            randomiseRound();
            lastOnly = false;
            break;

        case 2:
            //Last Only Game Mode
            reverse = false;
            generateRound();
            lastOnly = true;
            break;

        case 3:
            //Reverse Game Mode
            lastOnly = false;
            reverse = true;
            generateRound();
            break;

        default:
            //Classic Game Mode
            currentGameMode = 0;
            reverse = false;
            lastOnly = false;
            generateRound();
            break;
    }

    if (lastOnly) {
        setTimeout(function () {
            buttonPressed(roundArray[roundArray.length - 1]);//Play only last sound
            playerRound();//Players Turn
        }, gameSpeed)
    } else {
        //animate play each step
        //https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/
        let i = 0;
        (function loop() {
            buttonPressed(roundArray[i]);
            if (++i < roundArray.length) {
                setTimeout(loop, gameSpeed); // call self again if needed
            } else if (i === roundArray.length) {
                setTimeout(function () {
                    if (reverse) {
                        roundArray.reverse();//reverse the array if in reverse mode
                    }
                    playerRound();//players turn
                }, gameSpeed)
            }
        })();
    }
}

//-- Players Turn--//
function playerRound() {
    activatePlayer();//activate the player

    //Green Button
    GREEN_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        buttonPressed(button);//Play audio and animation
        checkResult(button);//check the result
    });
    //Red Button
    RED_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        buttonPressed(button);
        checkResult(button);
    });
    //Blue button
    BLUE_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        buttonPressed(button);
        checkResult(button);
    });
    //Yellow button
    YELLOW_GAME_BUTTON.off().on("click touch", function () {
        let button = this.dataset.button;
        buttonPressed(button);
        checkResult(button);
    });
}

//-- Check if player wins or loses --//
function checkResult(button) {
    //normal order
    if (button !== roundArray[playerChoice]) {
        //Player Failed!!
        crackedButton(button);// show the crack image on the relevant button
        gameOver();//game is over
    } else {
        if (playerChoice + 1 === roundArray.length) {
            //Fires when the round is over
            setTimeout(function () {
                if (reverse) {
                    roundArray.reverse();// puts round back to original order
                }
                computerPlayRound();//Computers turn
                updateScore();//Update the score
            }, 800)
        }
    }
    playerChoice++ //Increment the players choice index
}

//-- Play crack sound and display crack overlay if player loses --//
function crackedButton(button) {
    $(`#${button}-game-button`).addClass("cracked");
    $("#crack-audio")[0].play();

    setTimeout(function () {
        $(`#${button}-game-button`).removeClass("cracked");
    }, 500)
}

//-- Update the Score --//
function updateScore() {
    score++;//add one to the score
    LEVEL_UP_TEXT.removeClass("scale-up");
    //speed up if score is multiple of 5
    if (gameSpeed > 200 && score % 5 === 0) {
        LEVEL_UP_TEXT.addClass("scale-up");
        gameSpeed -= 100;
    }
    if (score > bestScore) {
        bestScore = score - 1;
    }
    $("#game-circle-txt").text(score);//change score on center circle
}

//-- Game Over --//
function gameOver() {
    gameEnd = true;
    $("#current-score").text(score - 1);//update current score text
    $("#best-score").text(bestScore);//update best score text
    $("#mode-text").text(GAME_MODES[currentGameMode].name); //update game mode text
    roundArray = [];//reset the round
    score = 0;//reset the score
    gameSpeed = 600;//reset the game speed
    showMainModal();//show the modal
}


//---------- Document Ready ----------//
$(document).ready(function () {
    //-- Fetch a quote and display the main modal once the dom is ready
    fetchQuote();

    //-- Add event listeners to the buttons BUTTONS --//
    $("#main_menu_button > img").off().on("click touch", mainMenu);// Main Menu Button
    $("#help_button > img").off().on("click touch", helpMenu); // Help Menu Button
    $("#settings_button > img").off().on("click touch", settingsMenu); // Settings Menu Button
    CLOSE_BUTTON.off().on("click touch", mainMenu);// Close Menu Button
    //Next Button
    MODE_NEXT_BUTTON.off().on("click touch", function () {
        CLICK_AUDIO[0].play();
        //-- go to next game mode --//
        if (currentGameMode < 3) {
            currentGameMode++;
            updateGameMode(this);
        }
    });
    //Previous Button
    MODE_PREV_BUTTON.off().on("click touch", function () {
        CLICK_AUDIO[0].play();
        //-- go to previous game mode --//
        if (currentGameMode > 0) {
            currentGameMode--;
            updateGameMode(this);
        }
    });
    //-- Start the game when the Play or Replay buttons are pressed --//
    $(".play").off().on("click touch", function () {
        CLICK_AUDIO[0].play();
        updateScore();
        //-- Close any open modals --//
        $.modal.close();
        //-- Start the game with the computers turn after 300ms--//
        setTimeout(function () {
            computerPlayRound(gameSpeed);
        }, 300);
    });

    //-- Social Buttons --//
    $(".social").off().on("click touch", function () {
        CLICK_AUDIO[0].play();
    })
})
;