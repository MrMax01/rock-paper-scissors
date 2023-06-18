let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};
/*
if(!score)
{
    score = {
        wins:0,
        losses: 0,
        ties: 0
    }
}
*/
updateScoreElement();


function playGame(playerMove)
{
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'rock')
    {
        if(computerMove === 'rock'){
            result = 'Tie.';
        }else if(computerMove === 'paper'){
            result = 'You Lose.';
        } else if(computerMove === 'scissors'){
            result = 'You win.';
        }

    }else if(playerMove === 'paper')
    {
        if(computerMove === 'rock'){
            result = 'You win.';
        }else if(computerMove === 'paper'){
            result = 'Tie.';
        } else if(computerMove === 'scissors'){
            result = 'You Lose.';
        }
        
    }else if(playerMove === 'scissors')
    {
        if(computerMove === 'rock'){
            result = 'You Lose.';
        }else if(computerMove === 'paper'){
            result = 'You win.';
        } else if(computerMove === 'scissors'){
            result = 'Tie.';
        }
    }

    if(result === 'You win.'){
        score.wins++;
    }
    else if(result === 'You Lose.'){
        score.losses++;
    }
    else if(result === 'Tie.'){
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    updateResultElement(result);
    updateMoves(computerMove, playerMove);
    /*
    alert('You picked '+playerMove+'. Computer picked '+ computerMove + '. ' + result + 
    '\n Wins: '+ score.wins +'. '+ 'Losses: '+ score.losses+'. '+ 'Ties: '+score.ties+'.');
    */
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}

/*Aggiorna lo score sullo schermo*/
function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML= 'Wins: '+ score.wins +', '+ 'Losses: '+ score.losses+', '+ 'Ties: '+score.ties+',';
}

/*Aggiorna il risultato*/
function updateResultElement(result){
    document.querySelector('.js-result').innerHTML = result;
}

/*Mossa del computer*/
function updateMoves(computerMove, playerMove){
    
    document.querySelector('.js-moves').innerHTML = ' you <img src="./assets/'+playerMove+'-emoji.png" alt="Rock" class="move-icon"><img src="./assets/'+computerMove+'-emoji.png" alt="Scissor" class="move-icon"> Computer';
}