function getColor() {
  // Generating Random number using Math.random();
  const randomNumber = Math.floor(Math.random() * 16777215);
  
  // passed 16 to convert it into hexa decimal number
  const hexColorCode = "#" + randomNumber.toString(16);

  //console.log(randomNumber, hexColorCode);
}