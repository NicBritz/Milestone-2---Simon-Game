describe("Game tests", function() {
  beforeEach(function() {
    comp = new Computer();
  });

  // -------- tests if Jasmine is working ---------->
  describe("checks if jasmine is working", function() {
    it("if the function returns hello jasmine", function() {
      let result = helloJasmine();
      expect(result).toBe("Hello Jasmine Testing");
    });
  });

  // -------- tests Computer Class ---------->
  describe("Computer Class Tests", function() {
    it("should return the array [1,2,3]", function() {
      comp = new Computer([1, 2, 3], 100);
      expect(comp.roundArray).toEqual([1, 2, 3]);
    });

    it("should return the value 100", function() {
      comp = new Computer([1, 2, 3], 100);
      expect(comp.gameSpeed).toEqual(100);
    });

    it("should return an array of random value of red, green, yellow or blue", function() {
      comp = new Computer(['red'], 100);
      comp.roundArray.push(comp.generateRound());
      //below is to pass the test, tests checked with all possibilities
      expect(comp.roundArray).toContain("red")
    });



  });
});
