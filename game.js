alert("working");

//creating an array
buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 3;
  randomNumber = Math.floor(randomNumber) + 1;
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
};


//adding event listeners
$("#blue").click(playSounds);
$("#yellow").click(playSounds);
$("#red").click(playSounds);
$("#green").click(playSounds);

//adding sounds
function playSounds() {
  var blue = new Audio("sounds/blue.mp3");
  blue.play();

  var green = new Audio("sounds/green.mp3");
  green.play();

  var yellow = new Audio("sounds/yellow.mp3");
  yellow.play();

  var red = new Audio("sounds/red.mp3");
  red.play();

}
