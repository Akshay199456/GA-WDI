console.log("connected");


/*----- constants -----*/ 

const playerColors = {
	'1': "purple",
	'-1': "lime",
	'null': "white"
};

/*----- app's state (variables) -----*/ 

let board, turn, winner;


/*----- cached element references -----*/ 


// Is using vanillaJS, don't use $ for variable names. That's only for jQuery
const msgEl = document.querySelector('h1');
const squareEls = Array.from(document.querySelectorAll('section div'));



/*----- event listeners -----*/ 
document.querySelector('section').addEventListener("click", handleClick);


/*----- functions -----*/

init();

function handleClick(event){
	// determine the index of the clicked div

	let idx = squareEls.indexOf(event.target);
	if(idx < 0 || board[idx] || winner) return;
	console.log(idx);
	

	// update the board's state using the turn variable
	board[idx] = turn;


	// update the winner
	// change turn
	turn *= -1;

	render();
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
	// use innerHTML only if you are adding html elements; else use textContent
	msgEl.textContent = `${playerColors[turn].toUpperCase()}'s Turn`;


	// Learn to use forEach
	squareEls.forEach( (square, idx) => {
		square.style.backgroundColor = playerColors[board[idx]];
	});

}