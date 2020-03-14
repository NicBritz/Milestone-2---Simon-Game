//define main test
describe("Simon Says Game", function () {

    describe("Constants and Variable tests", function () {

        //---------- Button selectors ----------//
        it("There should be a valid gameCenterCircle jQuery object", function () {
            expect(gameCenterCircle).toBeInstanceOf(Object);
        });

        it("There should be a valid allGameButtons jQuery object", function () {
            expect(allGameButtons).toBeInstanceOf(Object);
        });

        it("There should be a valid greenGameButton jQuery object", function () {
            expect(GREEN_GAME_BUTTON).toBeInstanceOf(Object);
        });

        it("There should be a valid redGameButton jQuery object", function () {
            expect(RED_GAME_BUTTON).toBeInstanceOf(Object);
        });

        it("There should be a valid yellowGameButton jQuery object", function () {
            expect(YELLOW_GAME_BUTTON).toBeInstanceOf(Object);
        });

        it("There should be a valid blueGameButton jQuery object", function () {
            expect(BLUE_GAME_BUTTON).toBeInstanceOf(Object);
        });

        //---------- Audio selectors ----------//

        it("There should be a valid greenClassicAudio jQuery object", function () {
            expect(greenClassicAudio).toBeInstanceOf(Object);
        });

        it("There should be a valid redClassicAudio jQuery object", function () {
            expect(redClassicAudio).toBeInstanceOf(Object);
        });

        it("There should be a valid yellowClassicAudio jQuery object", function () {
            expect(yellowClassicAudio).toBeInstanceOf(Object);
        });

        it("There should be a valid blueClassicAudio jQuery object", function () {
            expect(blueClassicAudio).toBeInstanceOf(Object);
        });

        it("There should be a valid playButton jQuery object", function () {
            expect(playButton).toBeInstanceOf(Object);
        });

        ///---------- Modals ----------//
        it("There should be a valid mainModal jQuery object", function () {
            expect(mainModal).toBeInstanceOf(Object);
        });

        //---------- Game Variables ----------//
        it("The gameSpeed variable should have a valid number > 500", function () {
            expect(gameSpeed).toBeInstanceOf(Number);
            expect(gameSpeed).toBeGreaterThan(500);
        });

        it("The roundArray variable should be a valid object of length 0", function () {
            expect(roundArray).toBeInstanceOf(Object);
            expect(roundArray.length).toBe(0);
        });

        it("The playerActive variable should be a valid boolean of value true", function () {
            expect(playerActive).toBeInstanceOf(Boolean);
            expect(playerActive).toBe(true);
        });

        it("The playerChoice variable should be a valid number of value 0", function () {
            expect(playerChoice).toBeInstanceOf(Number);
            expect(playerChoice).toBe(0);
        });

        it("The score variable should be a valid number of value 0", function () {
            expect(score).toBeInstanceOf(Number);
            expect(score).toBe(0);
        });

    });
});

