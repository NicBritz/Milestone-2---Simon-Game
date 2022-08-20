//-- Constants --//
const CENTER_CIRCLE = $("#center-circle"); // Center Score Circle
const ALL_GAME_BUTTONS = $("#game-buttons > div"); // All The Game Buttons
const GREEN_GAME_BUTTON = $("#green-game-button"); // Green Button
const RED_GAME_BUTTON = $("#red-game-button"); // Red Button
const YELLOW_GAME_BUTTON = $("#yellow-game-button"); // Yellow Button
const BLUE_GAME_BUTTON = $("#blue-game-button"); // Blue Button
const MAIN_MENU = $("#main_menu"); // Main Menu Area
const HELP_MENU = $("#help_menu"); // Help Menu Area
const SETTINGS_MENU = $("#settings_menu"); // Settings Menu Area
const GAME_OVER_MENU = $("#gameOver-menu"); // Game Over Menu Area
const CLOSE_BUTTON = $("#close_button"); // Close Button
const MODE_PREV_BUTTON = $("#mode_prev_button"); // mode Previous Button
const MODE_NEXT_BUTTON = $("#mode_next_button"); // mode Next Button
const THEME_PREV_BUTTON = $("#theme_prev_button"); // mode Previous Button
const THEME_NEXT_BUTTON = $("#theme_next_button"); // mode Next Button

/* Fix Audio Lag in safari browsers:
 * https://stackoverflow.com/questions/22216954/whats-causing-this-slow-delayed-audio-playback-in-safari*/
let AudioContext;
let audioCtx;
//-- Game Modes object --//
const GAME_MODES = [
  {
    name: "CLASSIC",
    desc: "Repeat the steps in the order they are presented, each round will increase in length.",
  },
  {
    name: "RANDOM",
    desc: "Repeat the steps in the order they are presented, each round will be random and increase in length.",
  },
  {
    name: "SINGLE",
    desc: "Repeat the steps in the order they were presented, only the final step will play back.",
  },
  {
    name: "REVERSE",
    desc: "Repeat the steps in a reverse order to which they are presented.",
  },
];

//-- Game Theme object --//
const GAME_THEME = [
  {
    name: "CLASSIC",
    desc: "Smooth coloured buttons.",
  },
  {
    name: "BRICK",
    desc: "Brick wall buttons.",
  },
  {
    name: "LEGO",
    desc: "Lego texture buttons.",
  },
  {
    name: "METAL",
    desc: "Diamond plate metal buttons.",
  },
];

//-- Variables --//
let currentGameMode = 0;
let currentTheme = 0;
let quotePhrases;
let quote = { text: "", author: "" };
let gameSpeed = 600; // current speed the game is running
let roundArray = []; // current array of button presses for the round
let playerActive = true; // sets the player to an active state
let playerChoice = 0; //players current selection in the round
let score = 0; //players current score
let bestScore = 0; // best score
let gameEnd = false; // game ended
let single = false; // single mode
let reverse = false; // reverse mode

//-- GUI/MENU --//

// -- Fetch random quote --//
async function fetchRandomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();

  // validate the response
  if (response.ok) {
    quote.text = data.content;
    quote.author = data.author;
  } else {
    quote.text = "Oops there was a problem retrieving the quote...";
    quote.author = "Error";
  }
  //Launch the main menu
  showMainModal();
}

//-- Pick a random quote --//
function pickQuote() {
  // Adds the quote text to the quote html
  $(".quote-txt-box").html(`<p>${quote.text}</p><br>
                     <p><em>"${quote.author}"</em></p>`);
}

//-- Click Audio --//
function playClick() {
  //Adds audio context after user touches the screen to solve audio issues on chrome and safari
  if (!AudioContext) {
    AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }

  let snd = $("#click-audio")[0];
  snd.currentTime = 0;
  snd.play();
}

//-- Show Main Modal --//
function showMainModal() {
  pickQuote();
  if (!gameEnd) {
    // Display the Main Menu if it is a new game
    mainMenu();
  } else {
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
    showClose: false,
  });
}

// Hide menus
function hideMenus() {
  MAIN_MENU.hide();
  HELP_MENU.hide();
  GAME_OVER_MENU.hide();
  CLOSE_BUTTON.hide();
  SETTINGS_MENU.hide();
}

//-- Show Main Menu --//
function mainMenu() {
  hideMenus();
  MAIN_MENU.show();
}

//-- Show Help Menu --//
function helpMenu() {
  hideMenus();
  playClick();
  HELP_MENU.show();
  CLOSE_BUTTON.show();
}

//-- Show Settings Menu --//
function settingsMenu() {
  hideMenus();
  playClick();
  SETTINGS_MENU.show();
  CLOSE_BUTTON.show();
}

//-- Show GameOver Menu --//
function gameOverMenu() {
  hideMenus();
  GAME_OVER_MENU.show();
}

//-- Change the game mode --//
function updateGameMode(buttonObj) {
  const M_PREV_AREA = $("#mode-prev-area");
  const M_NEXT_AREA = $("#mode-next-area");
  //Prev Button
  if (buttonObj.id === "mode_prev_button") {
    M_NEXT_AREA.removeClass("gray-out");

    if (currentGameMode === 0) {
      M_PREV_AREA.addClass("gray-out");
    }
  } else {
    //Next Button
    M_PREV_AREA.removeClass("gray-out");

    if (currentGameMode === 3) {
      M_NEXT_AREA.addClass("gray-out");
    }
  }
  //Change the game mode display text
  $("#game-mode-text").text(GAME_MODES[currentGameMode].name);
  $("#mode_description").text(GAME_MODES[currentGameMode].desc);
}

//-- Change the game theme --//
function updateGameTheme(buttonObj) {
  const T_PREV_AREA = $("#theme-prev-area");
  const T_NEXT_AREA = $("#theme-next-area");

  console.log(buttonObj.id);
  //Prev Button
  if (buttonObj.id === "theme_prev_button") {
    T_NEXT_AREA.removeClass("gray-out");
    if (currentTheme === 0) {
      T_PREV_AREA.addClass("gray-out");
    }
  } else {
    //Next Button
    T_PREV_AREA.removeClass("gray-out");

    if (currentTheme === 3) {
      T_NEXT_AREA.addClass("gray-out");
    }
  }

  //Change the game theme display text
  $("#game-theme-text").text(GAME_THEME[currentTheme].name);
  $("#theme_description").text(GAME_THEME[currentTheme].desc);
  //Apply the theme
  let theme = GAME_THEME[currentTheme].name.toLowerCase();
  let choices = ["red", "green", "blue", "yellow"];
  choices.forEach(function (val) {
    $(`#${val}-game-button`)
      .removeClass("classic brick lego metal")
      .addClass(theme);
  });
}

//-- Colour buttons pressed --//
function buttonPressed(button) {
  //animates the button being pressed
  $(`#${button}-game-button`).addClass("game-button-pressed");
  setTimeout(function () {
    $(`#${button}-game-button`).removeClass("game-button-pressed");
  }, 200);

  let snd = $(`#${button}-classic-audio`)[0];
  // https://github.com/TravelTimN/simon-game - inspiration for this sound control.
  // restart any playing audio
  snd.currentTime = 0;
  //Play the Audio
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

//-- Deactivate the player --//
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
  deactivatePlayer(); //Deactivates the player
  playerChoice = 0; //Resets the players current choice;
  //Checks the Current GameMode  and plays accordingly;
  switch (currentGameMode) {
    case 0:
      //Classic Game Mode
      reverse = false;
      single = false;
      generateRound();
      break;

    case 1:
      //Random Game Mode
      reverse = false;
      randomiseRound();
      single = false;
      break;

    case 2:
      //Single Game Mode
      reverse = false;
      generateRound();
      single = true;
      break;

    case 3:
      //Reverse Game Mode
      single = false;
      reverse = true;
      generateRound();
      break;

    default:
      //Classic Game Mode
      currentGameMode = 0;
      reverse = false;
      single = false;
      generateRound();
      break;
  }

  if (single) {
    setTimeout(function () {
      buttonPressed(roundArray[roundArray.length - 1]); //Play only last sound
      playerRound(); //Players Turn
    }, gameSpeed);
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
            roundArray.reverse(); //reverse the array if in reverse mode
          }
          playerRound(); //players turn
        }, gameSpeed);
      }
    })();
  }
}

//-- Players Turn --//
function playerRound() {
  activatePlayer(); //activate the player

  //Green Button
  GREEN_GAME_BUTTON.off().on("click touch", function () {
    let button = this.dataset.button;
    buttonPressed(button); //Play audio and animation
    checkResult(button); //check the result
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
    crackedButton(button); // show the crack image on the relevant button
    gameOver(); //game is over
  } else if (playerChoice + 1 === roundArray.length) {
    //Fires when the round is over with a slight delay
    setTimeout(function () {
      if (reverse) {
        roundArray.reverse(); // puts round back to original order
      }
      computerPlayRound(); //Computers turn
      updateScore(); //Update the score
    }, 800);
  }
  playerChoice++; //Increment the players choice index
}

//-- Play crack sound and display crack overlay if player loses --//
function crackedButton(button) {
  let theme = GAME_THEME[currentTheme].name.toLowerCase();

  $(`#${button}-game-button`).addClass(`${theme}-cracked`);
  //https://freesound.org/people/JustInvoke/sounds/446118/
  $("#crack-audio")[0].play();
  setTimeout(function () {
    $(`#${button}-game-button`).removeClass(`${theme}-cracked`);
  }, 600);
}

//-- Update the Score --//
function updateScore() {
  //add one to the score
  score++;
  //speed up if score is multiple of 5 speed up
  if (gameSpeed > 200 && score % 5 === 0) {
    gameSpeed -= 100;
  }
  if (score > bestScore) {
    bestScore = score - 1;
  }
  //change score on center circle
  $("#game-circle-txt").text(score);
}

//-- Game Over --//
function gameOver() {
  gameEnd = true;
  $("#current-score").text(score - 1); //update current score text
  $("#best-score").text(bestScore); //update best score text
  $("#mode-text").text(GAME_MODES[currentGameMode].name); //update game mode text
  roundArray = []; //reset the round
  score = 0; //reset the score
  gameSpeed = 600; //reset the game speed
  showMainModal(); //show the modal
}

//-- Document Ready --//
$(document).ready(function () {
  //-- Fetch a quote and display the main modal once the dom is ready
  fetchRandomQuote();

  //-- Add event listeners to the buttons BUTTONS --//
  // Main Menu Button
  $("#menu")
    .off()
    .on("click touch", function () {
      playClick();
      mainMenu();
    });

  // Help Menu Button
  $("#help_button").off().on("click touch", helpMenu);

  // Settings Menu Button
  $("#settings_button").off().on("click touch", settingsMenu);

  // Close Menu Button
  CLOSE_BUTTON.off().on("click touch", function () {
    playClick();
    mainMenu();
  });

  //Next mode Button
  MODE_NEXT_BUTTON.off().on("click touch", function () {
    playClick();
    //-- go to next game mode --//
    if (currentGameMode < 3) {
      currentGameMode++;
      updateGameMode(this);
    }
  });

  //Next theme Button
  THEME_NEXT_BUTTON.off().on("click touch", function () {
    playClick();
    //-- go to next game theme --//
    if (currentTheme < 3) {
      currentTheme++;
      updateGameTheme(this);
    }
  });

  //Previous mode Button
  MODE_PREV_BUTTON.off().on("click touch", function () {
    playClick();
    //-- go to previous game mode --//
    if (currentGameMode > 0) {
      currentGameMode--;
      updateGameMode(this);
    }
  });

  //Previous theme Button
  THEME_PREV_BUTTON.off().on("click touch", function () {
    playClick();
    //-- go to previous game mode --//
    if (currentTheme > 0) {
      currentTheme--;
      updateGameTheme(this);
    }
  });

  //-- Start the game when the Play or Replay buttons are pressed --//
  $(".play")
    .off()
    .on("click touch", function () {
      playClick();
      updateScore();
      //-- Close any open modals --//
      $.modal.close();
      //-- Start the game with the computers turn after 300ms--//
      setTimeout(function () {
        computerPlayRound(gameSpeed);
      }, 300);
    });

  //-- Social Buttons --//
  $(".social")
    .off()
    .on("click touch", function () {
      playClick();
    });
});
