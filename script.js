alert(`Welcome! Let's play`);
alert('Please select any one of them');
let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore() {

    score = JSON.parse(scoreStr) || {
        won: 0,
        lost: 0,
        tie: 0,
    };
    score.displayScore = function () {
        return `Score:Won:${score.won}, Lost:${score.lost}, Tie:${score.tie}`;
    };

    showResult();
}


function generateComputerChoice() {

    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Rock';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Paper';
    }
    else {
        return 'Scissor'
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Rock') {
        if (computerMove === 'Rock') {
            score.tie++;
            return `It's a tie`;
        }
        else if (computerMove === 'Paper') {
            score.lost++;
            return `Computer won`;
        }
        else {
            score.won++;
            return 'User won';
        }
    }
    if (userMove === 'Paper') {
        if (computerMove === 'Paper') {
            score.tie++;
            return `It's a tie`;
        }
        else if (computerMove === 'Rock') {
            score.won++;
            return `User won`;
        }
        else {
            score.lost++;
            return 'COmputer won';
        }
    }
    else {
        if (computerMove === 'Scissor') {
            score.tie++;
            return `It's a tie`;
        }
        else if (computerMove === 'Rock') {
            score.lost++;
            return `Computer won`;
        }
        else {
            score.won++;
            return 'User won';
        }
    }
}

function showResult(userMove, computerMove, result) {
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#user-move').innerText=
    userMove? `You have choose a ${userMove}` : '';
    document.querySelector('#computer-move').innerText=
     computerMove? `Computer choose a ${computerMove}` : '';
    document.querySelector('#result').innerText=
    result || '';
    document.querySelector('#score').innerText=
    score.displayScore();


    // alert(`You have choose a ${userMove}. Computer choose a ${computerMove} 
    //   ${result}
    //   ${score.displayScore()}
    //   `);
}
