let guessField = document.getElementById("guessField");
let resultMessage = document.getElementById('resultMessage');

let attempts = 0;
let randomNumber = 0;

window.onresize = function() {
console.log("Нова ширина вікна: " + window.innerWidth + "px");
console.log("Нова висота вікна: " + window.innerHeight + "px");
};

function generateRandomNumber(min, max){
    randomNumber = Math.floor(Math.random()*(max - min + 1)) +min;
    console.log("Згенероване число:", randomNumber);
}

generateRandomNumber(1, 100);

function checkGuess(){
    // alert("Тут буде результат перевірки введеного числа")
    let userGuess = parseInt(guessField.value);

    if (isNaN(userGuess)){
        resultMessage.textContent = "Введіть цисло!";
        return;
    }
    attempts++;

    if (userGuess < randomNumber){
        resultMessage.textContent = "Замало! Спробуй ще!";
        resultMessage.style.color = "red";

    }
    else if (userGuess > randomNumber){
        resultMessage.textContent = "Забагато! Спробуй ще!";
        resultMessage.style.color = "red";
    }
    else{
        resultMessage.textContent = "Вітаю! Ви вгадали число! Кількість спроб: "+attempts;
        resultMessage.style.color = "green";

    }
    

}