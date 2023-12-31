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
getColor();
