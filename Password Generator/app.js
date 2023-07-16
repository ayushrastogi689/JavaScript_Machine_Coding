const lengthSlider = document.querySelector(".password-length input");

function updateSliderValue() {
    document.querySelector(".password-length span").innerText = lengthSlider.value;
}
updateSliderValue();


lengthSlider.addEventListener("input", updateSliderValue);
