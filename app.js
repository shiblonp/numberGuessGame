let min = 1,
    max = 10,
    winningNum = getWinningNum(min,max),
    guessesLeft = 3;

const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //to validate the input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //to check if the input matches the winning number
    if(guess === winningNum){
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${guess} is correct!`, 'green');
        gameOver(true, `${guess} is correct!`)
    }else{
        guessesLeft -= 1;
        if(guessesLeft === 0){
        // guessInput.style.borderColor = 'red';
        // guessInput.value='';
        // guessInput.disabled=true;
        // setMessage(`Game over, the correct number was ${winningNum}`);
        gameOver(false, `Game over, the correct number was ${winningNum}`)
        
        }else{
        guessInput.style.borderColor = 'red';
        message.style.color = 'red';
        guessInput.value='';
        setMessage (`${guess} is incorrect you have ${guessesLeft} guesses left`);
        // gameOver(false, `${guess} is incorrect you have ${guessesLeft} guesses left`)
    }
    }
});
//created this function to remove some redundency
function gameOver (won, msg){
    let color
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
function getWinningNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
