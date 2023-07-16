const lengthSlider = document.querySelector(".password-length input");


const password = document.querySelector(".generate-btn"); 

function updateSliderValue() {
    document.querySelector(".password-length span").innerText = lengthSlider.value;
}
updateSliderValue();

function generatePassword() {
    let staticPassword = "";
    // Looping through each option check box
    options.forEach(option => {
        // if any option is checked add that particular key value from characters object to that staticPassword
        if (option.checked)
        {
            staticPassword = staticPassword + characters[option.id];
        }
    })
    console.log(staticPassword);
}

lengthSlider.addEventListener("input", updateSliderValue);
password.addEventListener("click", generatePassword)