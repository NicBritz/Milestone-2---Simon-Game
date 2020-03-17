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


    //----------Menu BUTTON---------/ /
    describe("Menu Button", function () {

        beforeEach(function () {
            MENU_BUTTON.click();
        });

        it("should have a defined constant", function () {
            expect(MENU_BUTTON).toBeDefined();
        });

        it("should trigger the main menu function", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
    });

    //----------Mode Prev BUTTON---------/ /
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

    //----------Mode Next BUTTON---------/ /
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

    //----------Settings BUTTON---------/ /
    describe("Settings Button", function () {

        beforeEach(function () {
            SETTINGS_BUTTON.click();
        });

        it("should have a defined constant", function () {
            expect(SETTINGS_BUTTON).toBeDefined();
        });

        it("should trigger the Settings Menu function", function () {
            spyOn(window, "settingsMenu");
            settingsMenu();
            expect(window.settingsMenu).toHaveBeenCalled();
        });
    })

    //----------Help BUTTON---------/ /
    describe("Help Button", function () {

        beforeEach(function () {
            HELP_BUTTON.click();
        });

        it("should have a defined constant", function () {
            expect(HELP_BUTTON).toBeDefined();
        });

        it("should trigger the Help Menu function", function () {
            spyOn(window, "helpMenu");
            helpMenu();
            expect(window.helpMenu).toHaveBeenCalled();
        });
    });

    //----------Close BUTTON---------/ /
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
    })

});

