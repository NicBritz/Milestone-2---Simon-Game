//-------- first simple test for Jasmine ------>
function helloJasmine() {
  return "Hello Jasmine Testing";
}

$(document).ready(function() {
  //-------- hover and click on game buttons ------>
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
      
      $(`#${this.dataset.button}-classic-audio`)
        .get(0)
        .play();
    });
});
