console.log("My JS is linked now");

//-------- first simple test for Jasmine ------>
function helloJasmine() {
  return "Hello Jasmine Testing";
}

//-------- hover and click on game buttons ------>
function helloJasmine() {
  $("#game-buttons > div")
    .hover(
      function() {
        $(this).addClass("game-button-hovered");
      },
      function() {
        $(this).removeClass("game-button-hovered");
      }
    )
    .click(function() {
      console.log(this);
    });
}
