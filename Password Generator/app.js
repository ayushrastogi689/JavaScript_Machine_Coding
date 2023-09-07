const lengthSlider = document.querySelector(".password-length input");

const options = document.querySelectorAll(".option input");

const password = document.querySelector(".generate-btn");

const passwordGenerated = document.querySelector(".input-box input");

const passwordStrengthIndicator = document.querySelector(".password-strength-indicator");

const updatePasswordStrengthIndicator = () => {
  passwordStrengthIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}


function updateSliderValue() {
  document.querySelector(".password-length span").innerText = lengthSlider.value;
  generatePassword();
  updatePasswordStrengthIndicator();
}
updateSliderValue();

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "`~!@#$%^&*(){}[]\|/:;<>,.+=?-",
}

function generatePassword() {
  let staticPassword = "";
  let randomPassword = "";
  let excludeDuplicates = false;
  let passwordLength = lengthSlider.value;
  // Looping through each option check box
  options.forEach(option => {
    // if any option is checked add that particular key value from characters object to that staticPassword
    if (option.checked) {
      if (option.id !== "remove-duplicates") {
        // adding a particular key value 
        staticPassword = staticPassword + characters[option.id];
      }
      else if (option.id === "remove-duplicates") {
        excludeDuplicates = true;
      } else {
        staticPassword = staticPassword + `${staticPassword}`;
      }
    }
  })

  while (randomPassword.length < passwordLength) {
    //randomPassword = randomPassword + staticPassword[Math.floor(Math.random() * staticPassword.length)]
    let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];

    if (excludeDuplicates && randomPassword.includes(randomChar)) {
      continue;
    }
    randomPassword = randomPassword + randomChar;
  }
  passwordGenerated.value = randomPassword;
  console.log(randomPassword);
}

lengthSlider.addEventListener("input", updateSliderValue);
password.addEventListener("click", generatePassword)