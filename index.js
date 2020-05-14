alert("working!");
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextsequence() {
    var randomNumber = Math.random();
    randomNumber * 3;
    randomNumber = Math.floor(n) +1;
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#" + randomChoosenColor);
    soundplay(randomChosenColour);
}

function soundplay(name) {
  var audio = new Audio("sound" + name + ".mp3");
  audio.play();
}
