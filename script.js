const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choices) {
    
    return choices[Math.floor(Math.random() * (choices.length))];
}

function playRound(playerSelection, computerSelection) {
    let tie = "It's a tie!";
    let victory = `You won! ${playerSelection} beats ${computerSelection}`;
    let defeat = `You lose! ${computerSelection} beats ${playerSelection}`;

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        return tie;
    }

    if (player == 'rock') {
        if (computer == 'scissors') {
            return victory;
        } else if (computer == 'paper') {
            return defeat;
        }
    }

    if (player == 'paper') {
        if (computer == 'rock') {
            return victory;
        } else if (computer == 'scissors') {
            return defeat;
        }
    }

    if (player == 'scissors') {
        if (computer == 'paper') {
            return victory;
        } else if (computer == 'rock') {
            return defeat;
        }
    }
}

function game() {
    const computerSelection = getComputerChoice(choices);

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors? ");
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();



