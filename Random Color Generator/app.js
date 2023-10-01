const changeColorButton = document.querySelector("#button");

function getRandomColor() {
  const letters = "0123456789abcdef";

  let hex = "#", randomCode = "";

  for (let i = 0; i < 6; i++) {
    randomCode = randomCode + letters[Math.round(Math.random() * 16)];
  }

  let hexColorCode = hex + randomCode;

  // showing the color code on DOM
  document.getElementById("color-code").innerText = hexColorCode;

  // Copy code to clipboard
  navigator.clipboard.writeText(hexColorCode);

  return hexColorCode;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

changeColorButton.addEventListener("click", changeBackgroundColor);

changeBackgroundColor();


// Another way of implementing random color generation

function getColor() {
  // Generating Random number using Math.random();
  const randomNumber = Math.floor(Math.random() * 16777215);

  // passed 16 to convert it into hexa decimal number
  const hexColorCode = "#" + randomNumber.toString(16);

  //console.log(randomNumber, hexColorCode);

  // Changing the background color of body
  document.body.style.backgroundColor = hexColorCode;

  // showing the color code on DOM
  document.getElementById("color-code").innerText = hexColorCode;

  // Copy code to clipboard
  navigator.clipboard.writeText(hexColorCode);
}

// 2. Event Calling and Listening
document.getElementById("btn").addEventListener("click", getColor);

// 1. Initial Call
// Calling getColor() function for First time load 
// getColor();
