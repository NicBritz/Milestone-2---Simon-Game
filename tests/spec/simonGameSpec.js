// -------- tests if Jasmine is working ---------->
describe("checks if jasmine is working", function() {
  it("if the function returns hello jasmine", function() {
    let result = helloJasmine();
    expect(result).toBe("Hello Jasmine Testing");
  });
});
