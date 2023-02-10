'use strict'

let secretNumber= Math.trunc(Math.random() *20) +1;
let score=20;
let highScore=0;
const showMessage = function(message){
    document.querySelector('.message').textContent=message;
}
const updateScore = function(score){
    document.querySelector('.score').textContent=score;
}
const updateNumber = function(number){
    document.querySelector('.number').textContent=number;
}

updateNumber('?');
document.querySelector('.check').addEventListener('click',
    function(){
        const guess=Number(document.querySelector('.guess').value);
        if(!guess){
            showMessage("There IS No Number❓");
        }
        else if(guess ==  secretNumber){
            updateNumber(secretNumber);
            showMessage("Correct Answer 🎉 🎉");
            document.querySelector('body').style.backgroundColor='#60b347';
            if(score>highScore){
                highScore=score;
                document.querySelector('.highscore').textContent=highScore;
            }
        }
        else if( guess !== secretNumber && score>1){
            showMessage(guess>secretNumber? "Too High 📈":"Too Low 📉");
            score--;
            updateScore(score);
        }
        else{
            showMessage("You Lost 🥺");
            updateScore(0);
        }

    });

    document.querySelector('.again').addEventListener('click',function(){
        score=20;
        updateScore(score);
        secretNumber= Math.trunc(Math.random() *20)+1;
        document.querySelector('body').style.backgroundColor='#222';
        showMessage("Start guessing...");
        updateNumber('?');
        document.querySelector('.guess').value='';
     });