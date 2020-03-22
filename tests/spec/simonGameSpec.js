//define main test
describe("Simon Game", function () {

    //----------PLAY / Replay BUTTON---------//
    describe("Play and Replay Buttons", function () {
        beforeEach(function () {
            $("play").click();
        });

        it("should have been defined", function () {
            expect($("play")).toBeDefined();
        });

        it("should trigger the update score function", function () {
            spyOn(window, "updateScore");
            updateScore();
            expect(window.updateScore).toHaveBeenCalled();
        });

        // https://makandracards.com/makandra/32477-testing-settimeout-and-setinterval-with-jasmine
        it("should start the computers round after 300ms", function () {
            spyOn(window, "computerPlayRound");
            jasmine.clock().install();

            setTimeout(function () {
                computerPlayRound(600);
            }, 300);

            expect(window.computerPlayRound).not.toHaveBeenCalled();

            jasmine.clock().tick(300);

            expect(window.computerPlayRound).toHaveBeenCalled();

            jasmine.clock().uninstall();
        })

    });


    //----------Menu BUTTON---------//
    describe("Menu Button", function () {

        beforeEach(function () {
            $("#main_menu_button > img").click();
        });

        it("should have been defined", function () {
            expect($("#main_menu_button > img")).toBeDefined();
        });

        it("should trigger the main menu function", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
    });

    //----------Mode Prev BUTTON---------//
    describe("Mode Previous Button", function () {

        beforeEach(function () {
            MODE_PREV_BUTTON.click();
        });

        it("should have a defined constant", function () {
            expect(MODE_PREV_BUTTON).toBeDefined();
        });

        it("should trigger the update game mode function", function () {
            spyOn(window, "updateGameMode");
            updateGameMode(this);
            expect(window.updateGameMode).toHaveBeenCalled();
        });
    });

    //----------Mode Next BUTTON---------//
    describe("Mode Next Button", function () {

        beforeEach(function () {
            MODE_NEXT_BUTTON.click();
        });

        it("should have a defined constant", function () {
            expect(MODE_NEXT_BUTTON).toBeDefined();
        });

        it("should trigger the update game mode function", function () {
            spyOn(window, "updateGameMode");
            updateGameMode(this);
            expect(window.updateGameMode).toHaveBeenCalled();
        });
    })

    //----------Settings BUTTON---------//
    describe("Settings Button", function () {

        beforeEach(function () {
            $("#settings_button > img").click();
        });

        it("should have been defined", function () {
            expect($("#settings_button > img")).toBeDefined();
        });

        it("should trigger the Settings Menu function", function () {
            spyOn(window, "settingsMenu");
            settingsMenu();
            expect(window.settingsMenu).toHaveBeenCalled();
        });
    })

    //----------Help BUTTON---------//
    describe("Help Button", function () {

        beforeEach(function () {
            $("#help_button > img").click();
        });

        it("should have been defined", function () {
            expect($("#help_button > img")).toBeDefined();
        });

        it("should trigger the Help Menu function", function () {
            spyOn(window, "helpMenu");
            helpMenu();
            expect(window.helpMenu).toHaveBeenCalled();
        });
    });

    //----------Close BUTTON---------//
    describe("Close Button", function () {

        beforeEach(function () {
            CLOSE_BUTTON.click();
        });

        it("should have a defined constant", function () {
            expect(CLOSE_BUTTON).toBeDefined();
        });

        it("should trigger the Main Menu function", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
    });
    //----------Game Over Function ---------//
    describe("Game Over Function", function () {

        it("should have been defined", function () {
            expect(gameOver).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "gameOver");
            gameOver();
            expect(window.gameOver).toHaveBeenCalled();
        });

    });
    //----------Update Score Function ---------//
    describe("Update Score Function", function () {

        it("should have been defined", function () {
            expect(updateScore).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "updateScore");
            updateScore();
            expect(window.updateScore).toHaveBeenCalled();
        });
    });

    //----------Crack Button Function ---------//
    describe("crackButton Function", function () {

        it("should have been defined", function () {
            expect(crackedButton).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "crackedButton");
            crackedButton();
            expect(window.crackedButton).toHaveBeenCalled();
        });
    });

    //----------Check Result Function ---------//
    describe("checkResult Function", function () {

        it("should have been defined", function () {
            expect(checkResult).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "checkResult");
            checkResult();
            expect(window.checkResult).toHaveBeenCalled();
        });
    });

    //----------Player Round Function ---------//
    describe("playerRound Function", function () {

        it("should have been defined", function () {
            expect(playerRound).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "playerRound");
            playerRound();
            expect(window.playerRound).toHaveBeenCalled();
        });
    });
    //----------Computer Play Round Function ---------//
    describe("computerPlayRound Function", function () {

        it("should have been defined", function () {
            expect(computerPlayRound).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "computerPlayRound");
            computerPlayRound();
            expect(window.computerPlayRound).toHaveBeenCalled();
        });
    });
    //----------Deactivate Player Function ---------//
    describe("deactivatePlayer Function", function () {

        it("should have been defined", function () {
            expect(deactivatePlayer).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "deactivatePlayer");
            deactivatePlayer();
            expect(window.deactivatePlayer).toHaveBeenCalled();
        });
    });
    //----------Activate Player Function ---------//
    describe("activatePlayer Function", function () {

        it("should have been defined", function () {
            expect(activatePlayer).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "activatePlayer");
            activatePlayer();
            expect(window.activatePlayer).toHaveBeenCalled();
        });
    });
    //----------Randomise Round Function ---------//
    describe("randomiseRound Function", function () {

        it("should have been defined", function () {
            expect(randomiseRound).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "randomiseRound");
            randomiseRound();
            expect(window.randomiseRound).toHaveBeenCalled();
        });
    });
    //----------Generate Round Function ---------//
    describe("generateRound Function", function () {

        it("should have been defined", function () {
            expect(generateRound).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "generateRound");
            generateRound();
            expect(window.generateRound).toHaveBeenCalled();
        });
    });
    //----------Button Pressed Function ---------//
    describe("buttonPressed Function", function () {

        it("should have been defined", function () {
            expect(buttonPressed).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "buttonPressed");
            buttonPressed();
            expect(window.buttonPressed).toHaveBeenCalled();
        });
    });
//----------Update Game Mode Function ---------//
    describe("updateGameMode Function", function () {

        it("should have been defined", function () {
            expect(updateGameMode).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "updateGameMode");
            updateGameMode();
            expect(window.updateGameMode).toHaveBeenCalled();
        });
    });
    //----------GameOver Menu Function ---------//
    describe("gameOverMenu Function", function () {

        it("should have been defined", function () {
            expect(gameOverMenu).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "gameOverMenu");
            gameOverMenu();
            expect(window.gameOverMenu).toHaveBeenCalled();
        });
    });
    //----------Settings Menu Function ---------//
    describe("settingsMenu Function", function () {

        it("should have been defined", function () {
            expect(settingsMenu).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "settingsMenu");
            settingsMenu();
            expect(window.settingsMenu).toHaveBeenCalled();
        });
    });

    //----------Help Menu Function ---------//
    describe("helpMenu Function", function () {

        it("should have been defined", function () {
            expect(helpMenu).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "helpMenu");
            helpMenu();
            expect(window.helpMenu).toHaveBeenCalled();
        });
    });

    //----------Main Menu Function ---------//
    describe("mainMenu Function", function () {

        it("should have been defined", function () {
            expect(mainMenu).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
    });

    //----------MShow Main Modal Function ---------//
    describe("showMainModal Function", function () {

        it("should have been defined", function () {
            expect(showMainModal).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "showMainModal");
            showMainModal();
            expect(window.showMainModal).toHaveBeenCalled();
        });
    });
//----------Pick Quote Function ---------//
    describe("pickQuote Function", function () {

        it("should have been defined", function () {
            expect(pickQuote).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "pickQuote");
            pickQuote();
            expect(window.pickQuote).toHaveBeenCalled();
        });
    });

    //----------Fetch Quote Function ---------//
    describe("fetchQuote Function", function () {

        it("should have been defined", function () {
            expect(fetchQuote).toBeDefined();
        });

        it("Should have been called", function () {
            spyOn(window, "fetchQuote");
            fetchQuote();
            expect(window.fetchQuote).toHaveBeenCalled();
        });
    });


});

