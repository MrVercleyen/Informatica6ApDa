var stepper = 10;
let mover = document.getElementById("mover");

var left = 0;
var topper = 0;

mover.style.left = left + "px";
mover.style.top = topper + "px";

function onKeyDown(event) {
  let code = event.keyCode;
  console.log(code);
  //left
  if (code === 37) {
    left = left - stepper;
    console.log(left);
    mover.style.left = left + "px";
  }
  //top
  if (code === 38) {
    topper = topper - stepper;
    console.log(topper);
    mover.style.top = topper + "px";
  }
  //right
  if (code === 39) {
    left = left + stepper;
    console.log(left);
    mover.style.left = left + "px";
  }
  //down
  if (code === 40) {
    topper = topper + stepper;
    console.log(topper);
    mover.style.top = topper + "px";
  }
}
