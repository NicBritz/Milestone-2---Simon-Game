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
      buttonPressed(this);
    });
});


// game play Button Pressed
function buttonPressed(button) {
  // variables
  let btn = $(`#${button.id}`);
  let btnData = button.dataset.button;

  // adds pressed class and removers shortly after
  btn.addClass("game-button-pressed");

  setTimeout(function() {
    btn.removeClass("game-button-pressed");
  }, 100);

  // Plays appropriate sound restarting it if its already playing
  $(`audio`)
    .get(0)
    .currentTime=0;

  $(`#${btnData}-classic-audio`)
    .get(0)
    .play();
}
