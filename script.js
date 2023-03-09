function getChoice() {
  const	choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * (choices.length))];
}

function playRound(playerSelection, computerSelection) {
    let tie = "It's a tie!";
    let victory = `You won! ${playerSelection} beats ${computerSelection}`;
    let defeat = `You lose! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection == computerSelection) {
        return tie;
    }

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            return victory;
        } else if (computerSelection == 'Paper') {
            return defeat;
        }
    }

    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return victory;
        } else if (computerSelection == 'Scissors') {
            return defeat;
        }
    }

    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            return victory;
        } else if (computerSelection == 'Rock') {
            return defeat;
        }
    }
}

function game() {
	const result = document.querySelector('.results');
	result.innerText = playRound(this.innerText, getChoice())
	
}

const buttons = document.querySelectorAll('.choice');

buttons.forEach(choice => {choice.addEventListener('click', game)});	



