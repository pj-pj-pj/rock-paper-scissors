let playerScore = 0;
let computerScore = 0;

const rpsButtons = Array.from(document.querySelectorAll('.choice'));

rpsButtons.forEach(choice => {choice.addEventListener('click', game)});	


function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}


function determineWinner(player, computer) {
  const resultNumber = Math.abs(computer - player);
	const bigNumber = Math.max(player, computer);
	const smallNumber = Math.min(player, computer)

	let winner = " ";

	switch (resultNumber) {
		case 0:
			return "tie";
		case 1:
			winner = (bigNumber == player) ? "player" : "computer";
		default:
			winner = (smallNumber == player) ? "player" : "computer";
	}

	addPoint(winner);
	return winner;
}


function addPoint(winner) {
	if (winner == "player") {
		playerScore++;
	} else if (winner == "computer") {
		computerScore++;
	} else {
		return;
	}
}


function updateScore() {
	document.getElementById('player-score').innerText = playerScore;
	document.getElementById('computer-score').innerText = computerScore;
}


function game() {
	const selection = ['Rock', 'Paper', 'Scissors'];

	const playerChoice = rpsButtons.indexOf(this);
	const computerChoice = getComputerChoice();
	const result = determineWinner(playerChoice, computerChoice);

	const winnerHolder = document.querySelector('#winner');
	const resultholder = document.querySelector('#roundResult');

	winnerHolder.innerText = " ";

	updateScore();

	if (playerScore == 5) {
		winnerHolder.innerText = "PLAYER WINS!"
		playerScore = 0;
		computerScore = 0;
		return;
	} 

	if (computerScore == 5) {
		winnerHolder.innerText = "COMPUTER WINS!"
		playerScore = 0;
		computerScore = 0;
		return;
	}

	if (result == "player") {
		resultholder.innerText = `You won! ${selection[playerChoice]} 
															beats ${selection[computerChoice]}`;
	} else if (result == "computer") {
		resultholder.innerText = `You lost! ${selection[playerChoice]} 
															beats ${selection[computerChoice]}`;
	} else {
		resultholder.innerText = "It's a tie."
	}
}






