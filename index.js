let myRangeEl = document.getElementById("myRange-el")
let sliderValueEl = document.getElementById("SliderValue-el")
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")
let result = document.getElementById("result")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function setValue() {
    sliderValueEl.textContent = 8
    sliderValueEl.textContent = myRangeEl.value
}

function generate() {
    if (result.style.display === "none") {
        result.style.display = "block";
    } else {
        result.style.display = "none";
    }

    password1El.textContent = getRandomPassword()
    password2El.textContent = getRandomPassword()
    password3El.textContent = getRandomPassword()
    password4El.textContent = getRandomPassword()

}

function getRandomPassword() {

    let randomePassword = ""

    for ( let i = 0; i < myRangeEl.value; i++) {
        randomePassword += characters[Math.floor(Math.random() * characters.length)]
    }

    return randomePassword
}

function copyText(num) {
        let textToCopy = ""

        if (num === 1) {
            textToCopy = password1El.textContent
        } else if (num === 2) {
            textToCopy = password2El.textContent
        } else if (num === 3) {
            textToCopy = password3El.textContent
        } else {
            textToCopy = password4El.textContent
        }

        // Copy the text inside the text field
        navigator.clipboard.writeText(textToCopy);
    
        // Alert the copied text
        alert("Copied the text: " + textToCopy);
}















