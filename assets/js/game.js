//-------- first simple test for Jasmine ------>
function helloJasmine() {
  return "Hello Jasmine Testing";
}

//checks if it is a touch screen device
let isTouch =
  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

$(document).ready(function() {
  // hover effect if its not a touch device
  if (!isTouch) {
    $("#game-buttons > div").hover(
      function() {
        $(this).addClass("game-button-hovered");
      },
      function() {
        $(this).removeClass("game-button-hovered");
      }
    );
  }

  // Game button clicked
  $("#game-buttons > div").click(function() {
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
  $(`audio`).get(0).currentTime = 0;

  $(`#${btnData}-classic-audio`)
    .get(0)
    .play();
}
