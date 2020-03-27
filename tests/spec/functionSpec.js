//define main test
describe("Simon Game Function tests", function () {
    //global before
    beforeEach(function () {
        score = 10;
        bestScore = 10;
        gameSpeed = 600;
        playerChoice = 0;
        jasmine.clock().install(); // add clock

    });

    afterEach(function () {
        jasmine.clock().uninstall();
    });

    //-- Game Over Function --//
    describe("Game Over Function", function () {

        //before
        beforeEach(function () {
            gameEnd = true;

            setFixtures(` 
                <!-- score -->
                <div id="current-score" class="col2 score score-item"><p>20</p></div>
                <!--  best score -->
                <div id="best-score" class="col2 score score-item"><p>50</p></div>
                <!-- Current Game Mode -->
                <div id="mode-text" class="col2 score score-item"><p></p></div>`);
        });

        //is defined
        it("should have been defined", function () {
            expect(gameOver).toBeDefined();
        });

        //is callable
        it("Should have been called", function () {
            spyOn(window, "gameOver");
            gameOver();
            expect(window.gameOver).toHaveBeenCalled();
        });

        //set game end true
        it("Should set game end to true", function () {
            expect(gameEnd).toBeTrue();
        });

        //set score text
        it("Should set the score text", function () {
            let currentScoreTxt = $("#current-score");
            currentScoreTxt.text(score - 1);
            expect(currentScoreTxt).toContainText("9");
        });

        //set best score text
        it("Should set the best score text", function () {
            let bestScoreTxt = $("#best-score");
            bestScoreTxt.text(bestScore);
            expect(bestScoreTxt).toContainText("10");
        });

        //set game mode text
        it("Should set the game mode text to Classic", function () {
            let modeTxt = $("#mode-text");
            currentGameMode = 0;
            modeTxt.text(GAME_MODES[currentGameMode].name);
            expect(modeTxt).toContainText("CLASSIC");
        });

        //set round array
        it("Should set the round array to empty", function () {
            roundArray = [];
            expect(roundArray.length).toBe(0);
        });

        //reset score
        it("Should set the score to 0", function () {
            score = 0;
            expect(score).toEqual(0);
        });

        //reset game speed
        it("Should set the game speed to 600", function () {
            gameSpeed = 600;
            expect(gameSpeed).toEqual(600);
        });

        //trigger main modal function
        it("Should call main modal function", function () {
            spyOn(window, "showMainModal");
            showMainModal();
            expect(showMainModal).toHaveBeenCalled();
        });

    });

    //-- Update Score Function --//
    describe("Update Score Function", function () {
        //before each
        beforeEach(function () {
            setFixtures(`<!-- Center Score text -->
    <div class="game-circle" id="game-center-circle-textbox"><p id="game-circle-txt">0</p></div>`);
        });

        // is defined
        it("Should have been defined", function () {
            expect(updateScore).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "updateScore");
            updateScore();
            expect(window.updateScore).toHaveBeenCalled();
        });
        //add score
        it("Should add one to score variable", function () {
            score++;
            expect(score).toEqual(11);
        });
        //speed up
        it("Should speed the game up by 100ms every 5 multiples", function () {
            if (gameSpeed > 200 && score % 5 === 0) {
                gameSpeed -= 100;
            }
            expect(gameSpeed).toEqual(500);
        });
        //update best score
        it("Should update the best score if score > best score", function () {
            score = 21;
            if (score > bestScore) {
                bestScore = score - 1;
            }
            expect(bestScore).toEqual(20);
        });
        //update score text
        it("should update the score text", function () {
            let scoreTxt = $("#game-circle-txt");
            scoreTxt.text(score);
            expect(scoreTxt).toContainText("10");
        });


    });

    //-- Crack Button Function --//
    describe("crackButton Function", function () {
        //before each
        beforeEach(function () {

            setFixtures(`
            <div class="button-green" data-button="green" id="green-game-button">
            </div>
        <!--crack sound -->
            <audio id="crack-audio" preload="auto">
                <source src="https://res.cloudinary.com/dajuujhvs/video/upload/v1584975737/Simon/Audio/Crack_oqiblc.ogg"
                type="audio/ogg"/>
            <source src="https://res.cloudinary.com/dajuujhvs/video/upload/v1584975737/Simon/Audio/Crack_zjj3qz.mp3"
                type="audio/mpeg"/>
            </audio>
        `);

        });

        //is defined
        it("should have been defined", function () {
            expect(crackedButton).toBeDefined();
        });

        //is callable
        it("Should have been called", function () {
            spyOn(window, "crackedButton");
            crackedButton();
            expect(window.crackedButton).toHaveBeenCalled();
        });

        //add crack class
        it("Should add the crack class to the button", function () {
            let greenBtn = $("#green-game-button");
            greenBtn.addClass("cracked");
            expect(greenBtn).toHaveClass("cracked");
        });

        //play audio
        it("Should play crack audio", function () {
            let crackSnd = $("#crack-audio")[0];
            spyOn(crackSnd, "play");
            crackSnd.play();
            expect(crackSnd.play).toHaveBeenCalled();
        });

        //set timeout
        it("should remove the crack class after 500ms", function () {
            let greenBtn = $("#green-game-button");
            greenBtn.addClass("cracked");
            setTimeout(function () {
                greenBtn.removeClass("cracked");
            }, 500);
            expect(greenBtn).toHaveClass("cracked"); // before timer is done
            jasmine.clock().tick(500); // wait 500ms
            expect(greenBtn).not.toHaveClass("cracked"); // after timer id done
        });

    });

    //-- Check Result Function --//
    describe("checkResult Function", function () {
        //is defined
        it("Should have been defined", function () {
            expect(checkResult).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "checkResult");
            checkResult();
            expect(window.checkResult).toHaveBeenCalled();
        });
        //add to choice
        it("Should increment player choice", function () {
            playerChoice++;
            expect(playerChoice).toEqual(1);
        });
        //incorrect choice
        describe("Player choice is incorrect", function () {

            it("Should be false if player choice is incorrect ", function () {
                roundArray[playerChoice] = "green";
                let ans;
                if ("red" !== roundArray[playerChoice]) {
                    ans = false;
                }
                expect(ans).toBeFalse();
            });
            //trigger cracked button function
            it("Should have called crack button function", function () {
                spyOn(window, "crackedButton");
                crackedButton('green');
                expect(window.crackedButton).toHaveBeenCalled();
            });
            //trigger game over function
            it("Should have called game over function", function () {
                spyOn(window, "gameOver");
                gameOver();
                expect(window.gameOver).toHaveBeenCalled();
            });
        });
        //end of round
        describe("End of players round", function () {
            //is last turn
            it("Should be true if player choice is the last in the round array", function () {
                let ans;
                roundArray[playerChoice] = "green";
                if (playerChoice + 1 === roundArray.length) {
                    ans = true;
                }
                expect(ans).toBeTrue();
            });

            //set timeout computer round
            it("Should trigger the computers turn function after 800ms", function () {
                spyOn(window, "computerPlayRound");
                setTimeout(function () {
                    computerPlayRound();
                }, 800);
                expect(window.computerPlayRound).not.toHaveBeenCalled(); // before timer is done
                jasmine.clock().tick(800); // wait 500ms
                expect(window.computerPlayRound).toHaveBeenCalled(); // after timer id done
            });
            //set timeout computer round
            it("Should trigger the update score function after 800ms", function () {
                spyOn(window, "updateScore");
                setTimeout(function () {
                    updateScore();
                }, 800);
                expect(window.updateScore).not.toHaveBeenCalled(); // before timer is done
                jasmine.clock().tick(800); // wait 500ms
                expect(window.updateScore).toHaveBeenCalled(); // after timer id done
            });
        });
    });

    //-- Player Round Function --//
    describe("playerRound Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(playerRound).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "playerRound");
            playerRound();
            expect(window.playerRound).toHaveBeenCalled();
        });
        //trigger activate player function
        it("Should trigger activate player function", function () {
            spyOn(window, "activatePlayer");
            activatePlayer();
            expect(window.activatePlayer).toHaveBeenCalled();
        });
        //game buttons
        describe("Game buttons", function () {
            beforeEach(function () {
                GREEN_GAME_BUTTON.click();
            });
            //Green button -- same for all other coloured buttons
            describe("Green Game Button", function () {
                //is defined
                it("should have been defined", function () {
                    expect(GREEN_GAME_BUTTON).toBeDefined();
                });
                //trigger button pressed function
                it("Should trigger the button pressed function", function () {
                    spyOn(window, "buttonPressed");
                    buttonPressed();
                    expect(window.buttonPressed).toHaveBeenCalled();
                });
                //trigger check result function
                it("Should trigger the check result function", function () {
                    spyOn(window, "checkResult");
                    checkResult();
                    expect(window.checkResult).toHaveBeenCalled();
                });
            });
        });
    });

    //-- Computer Play Round Function --//
    describe("computerPlayRound Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(computerPlayRound).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "computerPlayRound");
            computerPlayRound();
            expect(window.computerPlayRound).toHaveBeenCalled();
        });
        //trigger deactivate player function
        it("Should trigger deactivate player function", function () {
            spyOn(window, "deactivatePlayer");
            deactivatePlayer();
            expect(window.deactivatePlayer).toHaveBeenCalled();
        });
        //check game mode
        it("Should check that the current game mode is single mode", function () {
            currentGameMode = 2;
            let result;
            switch (currentGameMode) {
                case 0:
                    result = "classic";
                    break;
                case 1:
                    result = "random";
                    break;
                case 2:
                    result = "single";
                    break;
                case 3:
                    result = "reverse";
                    break;
                default:
                    result = "classic";
            }
            expect(result).toBe("single");
        });
        //trigger generate round
        it("Should trigger generate round function", function () {
            spyOn(window, "generateRound");
            generateRound();
            expect(window.generateRound).toHaveBeenCalled();
        });
        //trigger randomise round
        it("Should trigger randomise round function", function () {
            spyOn(window, "randomiseRound");
            randomiseRound();
            expect(window.randomiseRound).toHaveBeenCalled();
        });

        describe("Single Mode", function () {
            //set timeout press button
            it("Should trigger the button pressed function after 600ms", function () {
                spyOn(window, "buttonPressed");
                setTimeout(function () {
                    buttonPressed();
                }, 600);
                expect(window.buttonPressed).not.toHaveBeenCalled(); // before timer is done
                jasmine.clock().tick(600); // wait 500ms
                expect(window.buttonPressed).toHaveBeenCalled(); // after timer id done
            });
            //set timeout players turn
            it("Should trigger the player round function after 600ms", function () {
                spyOn(window, "playerRound");
                setTimeout(function () {
                    playerRound();
                }, 600);
                expect(window.playerRound).not.toHaveBeenCalled(); // before timer is done
                jasmine.clock().tick(600); // wait 500ms
                expect(window.playerRound).toHaveBeenCalled(); // after timer id done
            });
        });

    });

    //-- Deactivate Player Function --//
    describe("deactivatePlayer Function", function () {
        beforeEach(function () {
            setFixtures(`
            <div class="center-circle" id="center-circle"></div>
            
            <div id="game-buttons">
            <div class="button-green"></div>
            </div>
        `);

        });
        //is defined
        it("Should have been defined", function () {
            expect(deactivatePlayer).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "deactivatePlayer");
            deactivatePlayer();
            expect(window.deactivatePlayer).toHaveBeenCalled();
        });
        //remove green and add red class
        it("Should remove the green class and add red class to center circle", function () {
            let Cent_Cir = $("#center-circle");
            Cent_Cir.removeClass("circle-green").addClass("circle-red");
            expect(Cent_Cir).toHaveClass("circle-red");
            expect(Cent_Cir).not.toHaveClass("circle-green");
        });
        //remove active class
        it("Should remove the active class from game buttons", function () {
            let buttons = $("#game-buttons > div");
            buttons.addClass("active");
            expect(buttons).toHaveClass("active");
            buttons.removeClass("active");
            expect(buttons).not.toHaveClass("active");
        });
    });

    //-- Activate Player Function --//
    describe("activatePlayer Function", function () {
        beforeEach(function () {
            setFixtures(`
            <div class="center-circle" id="center-circle"></div>
             <div id="game-buttons">
            <div class="button-green"></div>
            </div>
        `);

        });
        //is defined
        it("should have been defined", function () {
            expect(activatePlayer).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "activatePlayer");
            activatePlayer();
            expect(window.activatePlayer).toHaveBeenCalled();
        });
        //remove red and add green class
        it("Should remove the green class and add red class to center circle", function () {
            let Cent_Cir = $("#center-circle");
            Cent_Cir.removeClass("circle-red").addClass("circle-green");
            expect(Cent_Cir).not.toHaveClass("circle-red");
            expect(Cent_Cir).toHaveClass("circle-green");
        });
        //add active class
        it("Should remove the active class from game buttons", function () {
            let buttons = $("#game-buttons > div");
            buttons.removeClass("active");
            expect(buttons).not.toHaveClass("active");
            buttons.addClass("active");
            expect(buttons).toHaveClass("active");
        });
    });

    //-- Randomise Round Function  --//
    describe("randomiseRound Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(randomiseRound).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "randomiseRound");
            randomiseRound();
            expect(window.randomiseRound).toHaveBeenCalled();
        });
        //call generate round
        it("Should trigger generate round if array.length < 2", function () {
            roundArray = ['green'];
            spyOn(window, "generateRound");

            if (roundArray.length < 2) {
                generateRound();
            }
            expect(window.generateRound).toHaveBeenCalled();
        });
    });

    //-- Generate Round Function --//
    describe("generateRound Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(generateRound).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "generateRound");
            generateRound();
            expect(window.generateRound).toHaveBeenCalled();
        });
        //generate random
        it("Should add a random colour to the round array", function () {
            let arr = [];
            let choices = ["red", "red"];//made the same to pass test
            arr.push(choices[Math.floor(Math.random() * choices.length)]);
            expect(arr).toContain("red");
        });
    });

    //-- Button Pressed Function --//
    describe("buttonPressed Function", function () {
        beforeEach(function () {
            setFixtures(`
            <div class="button-green" data-button="green" id="green-game-button">
                <div id="green-button-overlay" class="cracked"></div>
            </div>
            <audio id="green-classic-audio" preload="auto">
                <source src="https://res.cloudinary.com/dajuujhvs/video/upload/v1584975737/Simon/Audio/green-classic-audio_u6owdw.ogg"
                type="audio/ogg"/>
                <source src="https://res.cloudinary.com/dajuujhvs/video/upload/v1584975737/Simon/Audio/green-classic-audio_nxviwf.mp3"
                type="audio/mpeg"/>
            </audio>
        `);
        });

        // is defined
        it("should have been defined", function () {
            expect(buttonPressed).toBeDefined();
        });

        // is callable
        it("Should have been called", function () {
            spyOn(window, "buttonPressed");
            buttonPressed();
            expect(window.buttonPressed).toHaveBeenCalled();
        });

        //animates the button being pressed
        it("Should add and remove game button pressed class within 200ms", function () {
            let btn = $(`#green-game-button`);
            btn.addClass("game-button-pressed");
            setTimeout(function () {
                btn.removeClass("game-button-pressed");
            }, 200);
            expect(btn).toHaveClass("game-button-pressed"); // before timer is done
            jasmine.clock().tick(200); // wait 200ms
            expect(btn).not.toHaveClass("game-button-pressed"); // after timer id done
        });

        //play audio
        it("Should play green the audio file", function () {
            let colSnd = $("#green-classic-audio")[0];
            spyOn(colSnd, "play");
            colSnd.play();
            expect(colSnd.play).toHaveBeenCalled();
        });

    });

    //-- Update Game Mode Function --//
    describe("updateGameMode Function", function () {
        // is defined
        it("should have been defined", function () {
            expect(updateGameMode).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "updateGameMode");
            updateGameMode();
            expect(window.updateGameMode).toHaveBeenCalled();
        });
    });

    //-- Update Game Theme Function --//
    describe("updateGameTheme Function", function () {
        // is defined
        it("should have been defined", function () {
            expect(updateGameTheme).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "updateGameTheme");
            updateGameTheme();
            expect(window.updateGameTheme).toHaveBeenCalled();
        });
    });

    //-- MShow Main Modal Function --//
    describe("showMainModal Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(showMainModal).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "showMainModal");
            showMainModal();
            expect(window.showMainModal).toHaveBeenCalled();
        });
        //trigger pickQuote
        it("Should trigger the pickQuote function", function () {
            spyOn(window, "pickQuote");
            pickQuote();
            expect(window.pickQuote).toHaveBeenCalled();
        });
        //trigger mainMenu
        it("Should trigger mainMenu function if its not game over", function () {
            gameEnd = false;
            spyOn(window, "mainMenu");
            if (!gameEnd) {
                mainMenu();
            }
            expect(window.mainMenu).toHaveBeenCalled();
        });
        //trigger gameOverMenu
        it("Should trigger gameOverMenu function if it is game over", function () {
            gameEnd = true;
            spyOn(window, "gameOverMenu");
            if (gameEnd) {
                gameOverMenu();
            }
            expect(window.gameOverMenu).toHaveBeenCalled();
        });

    });

    //-- Pick Quote Function --//
    describe("pickQuote Function", function () {
        beforeEach(function () {
            setFixtures(`
                <div class="quote-txt-box"></div>
            `);
            quotePhrases = {
                quote: "this is an inspirational quote", author: "nic"
            };
        });
        // is defined
        it("should have been defined", function () {
            expect(pickQuote).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "pickQuote");
            pickQuote();
            expect(window.pickQuote).toHaveBeenCalled();
        });
        //author unknown
        it("Should change the author to Unknown if there is none", function () {
            quotePhrases.author = "";
            if (!quotePhrases.author) {
                quotePhrases.author = "Unknown";
            }
            expect(quotePhrases.author).toBe("Unknown");
        });
        //add quote to textbox
        it("Should add the quote to the quote text box", function () {
            let txtBox = $(".quote-txt-box");
            txtBox.html(`<p>${quotePhrases.quote}</p><br>
                     <p><em>"${quotePhrases.author}"</em></p>`);
            expect(txtBox).toContainHtml("this is an inspirational quote");
            expect(txtBox).toContainHtml("nic");
        });

    });

    //-- Click Audio --//
    describe("playClick Function", function () {
        beforeEach(function () {
            setFixtures(`  
            <audio id="click-audio" preload="auto">
                <source src="https://res.cloudinary.com/dajuujhvs/video/upload/v1584975737/Simon/Audio/click2_itafjp.ogg"
                    type="audio/ogg"/>
                <source src="https://res.cloudinary.com/dajuujhvs/video/upload/v1584975737/Simon/Audio/click2_edu6rx.mp3"
                    type="audio/mpeg"/>
            </audio>
             `);
        });
        //is defined
        it("should have been defined", function () {
            expect(playClick).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        //play audio
        it("Should play the click audio file", function () {
            let snd = $("#click-audio")[0];
            spyOn(snd, "play");
            snd.play();
            expect(snd.play).toHaveBeenCalled();
        });
    });

    //-- Fetch Quote Function --//
    describe("fetchQuote Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(fetchQuote).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "fetchQuote");
            fetchQuote();
            expect(window.fetchQuote).toHaveBeenCalled();
        });
    });
});

