describe("Simon Game button tests",function () {

    //-- Play / Replay Button --//
    describe("Play and Replay Buttons", function () {
        //Click the button
        beforeEach(function () {
            $("play").click();
        });
        //is defined?
        it("should have been defined", function () {
            expect($("play")).toBeDefined();
        });
        //trigger click function
        it("should trigger the play click function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        //trigger update score function
        it("should trigger the update score function", function () {
            spyOn(window, "updateScore");
            updateScore();
            expect(window.updateScore).toHaveBeenCalled();
        });

        // https://makandracards.com/makandra/32477-testing-settimeout-and-setinterval-with-jasmine
        //set timeout
        it("should start the computers round after 300ms", function () {
            spyOn(window, "computerPlayRound");
            jasmine.clock().install(); // add clock
            setTimeout(function () {
                computerPlayRound(600);
            }, 300);
            expect(window.computerPlayRound).not.toHaveBeenCalled(); // before timer is done
            jasmine.clock().tick(300); // wait 300ms
            expect(window.computerPlayRound).toHaveBeenCalled(); // after timer id done
            jasmine.clock().uninstall(); // remove clock
        })

    });

    //-- Social Buttons --//
    describe("Social Media Buttons", function () {
        //click the button
        beforeEach(function () {
             $(".social").click();
        });
        //is defined
         it("should have been defined", function () {
            expect($(".social")).toBeDefined();
        });
        //trigger click function
        it("should trigger the play click function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });

    });

    //-- Menu Button --//
    describe("Menu Button", function () {
        //click the button
        beforeEach(function () {
            $("#main_menu_button > img").click();
        });
        //is defined
        it("should have been defined", function () {
            expect($("#main_menu_button > img")).toBeDefined();
        });
        //trigger click function
        it("should trigger the play click function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        //trigger main menu function
        it("should trigger the main menu function", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
    });

    //-- Mode Prev Button --//
    describe("Mode Previous Button", function () {
        //click the button
        beforeEach(function () {
            MODE_PREV_BUTTON.click();
        });
        //is defined
        it("should have a defined constant", function () {
            expect(MODE_PREV_BUTTON).toBeDefined();
        });
        //trigger click function
        it("should trigger the play click function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        //trigger update game mode function
        it("should trigger the update game mode function", function () {
            spyOn(window, "updateGameMode");
            updateGameMode(this);
            expect(window.updateGameMode).toHaveBeenCalled();
        });
    });

    //-- Mode Next Button --//
    describe("Mode Next Button", function () {
        //click
        beforeEach(function () {
            MODE_NEXT_BUTTON.click();
        });
        //is defined
        it("should have a defined constant", function () {
            expect(MODE_NEXT_BUTTON).toBeDefined();
        });
        //trigger click function
        it("should trigger the play click function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        //trigger update game mode function
        it("should trigger the update game mode function", function () {
            spyOn(window, "updateGameMode");
            updateGameMode(this);
            expect(window.updateGameMode).toHaveBeenCalled();
        });
    });

    //-- Settings Button --//
    describe("Settings Button", function () {
        //click the button
        beforeEach(function () {
            $("#settings_button > img").click();
        });
        //is defined
        it("should have been defined", function () {
            expect($("#settings_button > img")).toBeDefined();
        });
        //trigger settings menu function
        it("should trigger the Settings Menu function", function () {
            spyOn(window, "settingsMenu");
            settingsMenu();
            expect(window.settingsMenu).toHaveBeenCalled();
        });
    });

    //-- Help Button --//
    describe("Help Button", function () {
        //click the button
        beforeEach(function () {
            $("#help_button > img").click();
        });
        //is defined
        it("should have been defined", function () {
            expect($("#help_button > img")).toBeDefined();
        });
        //trigger the help menu function
        it("should trigger the Help Menu function", function () {
            spyOn(window, "helpMenu");
            helpMenu();
            expect(window.helpMenu).toHaveBeenCalled();
        });
    });

    //-- Close Button --//
    describe("Close Button", function () {
        //click the button
        beforeEach(function () {
            CLOSE_BUTTON.click();
        });
        //is defined
        it("should have a defined constant", function () {
            expect(CLOSE_BUTTON).toBeDefined();
        });
        //trigger click function
        it("should trigger the play click function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        //trigger main menu function
        it("should trigger the Main Menu function", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
    });

});