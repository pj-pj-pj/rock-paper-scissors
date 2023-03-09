function getChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(player, computer) {
  const result = Math.abs(computer - player);
	const bigger = Math.max(player, computer);
	const smaller = Math.min(player, computer)

	let winner = " ";

	switch (result) {
		case 0:
			return "tie";
		case 1:
			winner = (bigger == player) ? "player" : "computer";
		default:
			winner = (smaller == player) ? "player" : "computer";
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

	const playerChoice = buttons.indexOf(this);
	const computerChoice = getChoice();

	const winner = playRound(playerChoice, computerChoice);
	const winnerHolder = document.querySelector('#winner');
	const resultholder = document.querySelector('#roundResult');

	winnerHolder.innerText = " "; //clears winnerHolder when 

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

	if (winner == "player") {
		resultholder.innerText = `You won! ${selection[playerChoice]} 
															beats ${selection[computerChoice]}`;
	} else if (winner == "computer") {
		resultholder.innerText = `You lost! ${selection[playerChoice]} 
															beats ${selection[computerChoice]}`;
	} else {
		resultholder.innerText = "It's a tie."
	}
}

let playerScore = 0;
let computerScore = 0;

const buttons = Array.from(document.querySelectorAll('.choice'));

buttons.forEach(choice => {choice.addEventListener('click', game)});	



