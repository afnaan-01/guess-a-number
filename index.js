const input = document.querySelector('input[type=number]');
const start = document.querySelector('.start');
const submit = document.querySelector('.submit');
const restart = document.querySelector('.restart');
let guesslist = document.querySelector('.guessing');
let result = document.querySelector('.result');
let att = document.querySelector('.att');
input.addEventListener('input', (key) => {

    if (input.value.length > 2) {
        input.value = input.value.substr(0, input.value.length - 1);
    }

});

let guesess = [];
let attempts = 10;
let number;


//To start the game
start.addEventListener('click', () => {
    number = parseInt(Math.random() * 100 + 1);
    input.value = '';
    start.style.display = 'none';
    submit.style.display = 'block';
    document.querySelector('.attemps').style.display = 'block';
    att.innerHTML = attempts;
    console.log(number);
});


//To check for every guessed number
submit.addEventListener('click', () => {
    if (!(input.value == '')) {
        attempts--;
        att.innerHTML = attempts;
        guesslist.innerHTML += input.value + ',';
        if (number == input.value) {
            correctGuess();
        }
        else {
            wrongGuess(number);
        }
    }
});

//To restart the Game
restart.addEventListener('click', () => {
    restart.style.display = 'none';
    submit.style.display = 'block';
    att.innerHTML = '';
    document.querySelector('.attemps').style.display = 'none';
    result.style.display = 'none';
    input.value = '';  
    guesslist.innerHTML = '';
})

//If the guessed number is correct
let correctGuess = () => {
    result.innerHTML = `Congratulations!<br>Your guess ${input.value} is correct`
    result.style.color = 'skyblue'
    endGame();
}


//If the guessed number is wrong
let wrongGuess = (nm) => {
    result.innerHTML = `Your guess ${input.value} is wrong`;
    result.style.color = 'red';
    input.value = '';
    if (attempts == 0) {
        endGame(false);
    }
}


//To end the game
let endGame = (val) => {
    if (val == false) {
        result.innerHTML = 'You guessed wrong numbers';
    }
    submit.style.display = 'none';
    restart.style.display = 'block';
    attempts = 10;
    input.value = '';
}

alert('changes made');