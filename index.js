const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = "100px";
dodger.style.left = "0px";
document.addEventListener("keydown", function (event) {
  console.log(event);
});
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  const gameWidth = 400; // replace with the actual width of the game field

  if (left + 40 < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}