const lengthSlider = document.querySelector(".password-length input");

const options = document.querySelectorAll(".option input");

const password = document.querySelector(".generate-btn"); 

function updateSliderValue() {
    document.querySelector(".password-length span").innerText = lengthSlider.value;
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
        if (option.checked)
        {
            if (option.id !== "duplicates" && option.id !== "spaces") {
                staticPassword = staticPassword + characters[option.id];
            }
            else if(option.id !== "spaces"){
                staticPassword = staticPassword + `${staticPassword}`
            }
            else {
                excludeDuplicates = true;
            }
        }
    })
    
    for (let i = 0; i < passwordLength; i++)
    {
        randomPassword = randomPassword + staticPassword[Math.floor(Math.random() * staticPassword.length)]
        
    }
    
}

lengthSlider.addEventListener("input", updateSliderValue);
password.addEventListener("click", generatePassword)