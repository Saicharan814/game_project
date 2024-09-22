let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guess = parseInt(userInput.value);
    if (guess > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guess < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "orange";
    } else if (guess === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
    }

}