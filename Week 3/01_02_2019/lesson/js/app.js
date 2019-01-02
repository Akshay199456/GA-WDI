console.log("connected");


/*----- constants -----*/ 

const playerColors = {
	'1': "purple",
	'-1': "lime",
	'null': "white"
};


const winningCombos = [
	[0,1,2], [3,4,5], [6,7,8], //rows
	[0,3,6], [1,4,7], [2,5,8], //columns
	[0,4,8], [2,4,6] // diagonals
	];

/*----- app's state (variables) -----*/ 

let board, turn, winner;


/*----- cached element references -----*/ 


// Is using vanillaJS, don't use $ for variable names. That's only for jQuery
const msgEl = document.querySelector('h1');
const squareEls = Array.from(document.querySelectorAll('section div'));
const playAgainBtn = document.querySelector('button');


/*----- event listeners -----*/ 
document.querySelector('section').addEventListener("click", handleClick);
playAgainBtn.addEventListener("click", init);


/*----- functions -----*/

function handleClick(event){
	// determine the index of the clicked div

	let idx = squareEls.indexOf(event.target);
	if(idx < 0 || board[idx] || winner) return;
	console.log(idx);
	

	// update the board's state using the turn variable
	board[idx] = turn;


	// update the winner
	winner = getWinner();


	// change turn
	turn *= -1;

	render();
}

function getWinner(){

	for(const combo of winningCombos){
		// let a = combo[0];
		// let b = combo[1];
		// let c = combo[2];

		//Does the same as above
		let [a,b,c] = combo;

		if(Math.abs(board[a] + board[b] + board[c] === 3) return board[a];
	}

	if(Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
	if(Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
	if(Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
	if(Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
	if(Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
	if(Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
	if(Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
	return board.includes(null) ? null : "T";

}


function init(){
	board = [
		null, null, null,
		null, null, null,
		null, null, null
	];
	// Does the same thing
	// board = new Array(9).fill(null);

	turn = 1;
	winner = null;

	render();
}

function render(){

	// Learn to use forEach
	squareEls.forEach( (square, idx) => {
		square.style.backgroundColor = playerColors[board[idx]];
	});

	if(winner){
		if(winner === "T")
			msgEl.textContent = "Rats, another tie!"
		else{
			msgEl.textContent = `${playerColors[winner].toUpperCase()} Wins`;
		}
	}
	else{
		// use innerHTML only if you are adding html elements; else use textContent
		msgEl.textContent = `${playerColors[turn].toUpperCase()}'s Turn`;
	}

	// display: none removes the element from the page; style.visibility does not remove the element but only hides it ( its still unclickable)
	playAgainBtn.style.visibility = winner ? "visible" : "hidden";

}