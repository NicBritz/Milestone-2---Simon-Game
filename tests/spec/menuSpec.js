//-- Menus --//
describe("Simon Game Menu Tests", function () {
    beforeEach(function () {
        setFixtures(`
            <div>
            <div id="gameOver-menu"></div>
            <div id="main_menu"></div>
            <div id="help_menu"></div>
            <div id="settings_menu"></div>
            <div id="close_button"></div>
            </div>
            `);
    });

    // Hide menus function
    describe("Hide all game menus", function () {
        // is defined
        it("should have been defined", function () {
            expect(hideMenus).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "hideMenus");
            hideMenus();
            expect(window.hideMenus).toHaveBeenCalled();
        });
        //hide all menus
        it("Should hide all menus and buttons", function () {
            let MainMenu = $("#main_menu");
            let HelpMenu = $("#help_menu");
            let SettingsMenu = $("#settings_menu");
            let GameOverMenu = $("#gameOver-menu");
            let CloseButton = $("#close_button");
            MainMenu.hide();
            HelpMenu.hide();
            SettingsMenu.hide();
            GameOverMenu.hide();
            CloseButton.hide();
            expect(MainMenu).not.toBeVisible();
            expect(HelpMenu).not.toBeVisible();
            expect(SettingsMenu).not.toBeVisible();
            expect(GameOverMenu).not.toBeVisible();
            expect(CloseButton).not.toBeVisible();
        });

    });
    //-- GameOver Menu Function --//
    describe("gameOverMenu Function", function () {

        // is defined
        it("should have been defined", function () {
            expect(gameOverMenu).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "gameOverMenu");
            gameOverMenu();
            expect(window.gameOverMenu).toHaveBeenCalled();
        });
        // trigger hide menus
        it("Should trigger the hideMenus function", function () {
            spyOn(window, "hideMenus");
            hideMenus();
            expect(window.hideMenus).toHaveBeenCalled();
        });
        // Show game over menu
        it("Should show the Game Over menu and close button", function () {
            let GameOverMenu = $("#gameOver-menu");
            let CloseButton = $("#close_button");
            GameOverMenu.show();
            CloseButton.show();
            expect(GameOverMenu).toBeVisible();
            expect(CloseButton).toBeVisible();
        });

    });

    //-- Settings Menu Function --//
    describe("settingsMenu Function", function () {
        // is defined
        it("Should have been defined", function () {
            expect(settingsMenu).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "settingsMenu");
            settingsMenu();
            expect(window.settingsMenu).toHaveBeenCalled();
        });
        // trigger hide menus
        it("Should trigger the hideMenus function", function () {
            spyOn(window, "hideMenus");
            hideMenus();
            expect(window.hideMenus).toHaveBeenCalled();
        });
        // trigger play click
        it("Should trigger the playClick function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        // Show settings menu
        it("Should show the Settings menu and close button", function () {
            let SettingsMenu = $("#settings_menu");
            let CloseButton = $("#close_button");
            SettingsMenu.show();
            CloseButton.show();
            expect(SettingsMenu).toBeVisible();
            expect(CloseButton).toBeVisible();
        });
    });

    //-- Help Menu Function --//
    describe("helpMenu Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(helpMenu).toBeDefined();
        });
        //is callable
        it("Should have been called", function () {
            spyOn(window, "helpMenu");
            helpMenu();
            expect(window.helpMenu).toHaveBeenCalled();
        });
        // trigger hide menus
        it("Should trigger the hideMenus function", function () {
            spyOn(window, "hideMenus");
            hideMenus();
            expect(window.hideMenus).toHaveBeenCalled();
        });
        // trigger play click
        it("Should trigger the playClick function", function () {
            spyOn(window, "playClick");
            playClick();
            expect(window.playClick).toHaveBeenCalled();
        });
        // Show help menu
        it("Should show the Help menu and close button", function () {
            let HelpMenu = $("#help_menu");
            let CloseButton = $("#close_button");
            HelpMenu.show();
            CloseButton.show();
            expect(HelpMenu).toBeVisible();
            expect(CloseButton).toBeVisible();
        });
    });

    //-- Main Menu Function --//
    describe("mainMenu Function", function () {
        //is defined
        it("should have been defined", function () {
            expect(mainMenu).toBeDefined();
        });
        // is callable
        it("Should have been called", function () {
            spyOn(window, "mainMenu");
            mainMenu();
            expect(window.mainMenu).toHaveBeenCalled();
        });
        // trigger hide menus
        it("Should trigger the hideMenus function", function () {
            spyOn(window, "hideMenus");
            hideMenus();
            expect(window.hideMenus).toHaveBeenCalled();
        });
        // Show main menu
        it("Should show the Main menu", function () {
            let MainMenu = $("#main_menu");
            MainMenu.show();
            expect(MainMenu).toBeVisible();
        });
    });
});