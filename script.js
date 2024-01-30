let lives = 7;
        let selectedWord;
        let displayWord = [];
        document.getElementById("startButton").addEventListener("click", function () {
    this.style.display = "none";
    const words = ["WellCode", "programare", "javascript", "visualstudio"];
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord = selectedWord.split('').map(char => (char === ' ' ? ' ' : '_'));

    document.getElementById("wordDisplay").innerText = displayWord.join(" ");
    document.getElementById("wordContainer").style.display = "flex";
    document.getElementById("letterInput").style.display = "block";
    document.querySelector("button").style.display = "block";
    document.getElementById("lives").style.display = "block";
    document.getElementById("lives").innerText = "Lives: " + lives;
});
        function guessLetter() {
            const inputElement = document.getElementById("letterInput");
            const guessedLetter = inputElement.value.toLowerCase();
             if (/^[a-z]$/.test(guessedLetter)) {
                inputElement.value = "";
                if (selectedWord.toLowerCase().includes(guessedLetter)) {
                    for (let i = 0; i < selectedWord.length; i++) {
                        if (selectedWord[i].toLowerCase() === guessedLetter) {
                            displayWord[i] = selectedWord[i];
                        }
                    }
                    document.getElementById("wordDisplay").innerText = displayWord.join(" ");
                    if (!displayWord.includes("_")) {
                        endGame("Congratulations! You won!");
                    }
                } else {
                    --lives;
                    document.getElementById("lives").innerText = "Lives: " + lives;
                    if (lives === 0) {
                        endGame("Game over. You lost. The word was: " + selectedWord);
                    }
                }
            } else {
                alert("Please enter a valid letter (a-z).");
            }
        }
        function endGame(message) {
            document.getElementById("letterInput").style.display = "none";
            document.querySelector("button").style.display = "none";
            document.getElementById("lives").innerText = message;
        }
