let $currentSquare;
let score = 0;
let time =30;
let round = 1;
$h1 = $("h1");

$('button').on('click', () =>{
	console.log('working');
	createSquares(40);
	setTimer();
	setUpRound();
});


$(".squares").on('click', (e) =>{
	console.log(e.target, ' target');
	console.log(e.currentTarget, ' currentTarget');

	$clickedSquare = e.target;
	if(e.target!==e.currentTarget){
		$(e.target).fadeTo("fast",0);
		checkValidPoke(e);
		$(e.target).css("background-color", "white");
	}
});



const createSquares = (numOfSquares) =>{
	// squares should be divs

	for(let i=0; i<numOfSquares; i++){
		// creating square with jQuery
		const $square = $("<div/>");
		$currentSquare = $square;
		applyRandomColor();
		$(".squares").append($square);
	}
	applyRandomColor(numOfSquares);
}


const applyRandomColor = () =>{
	const colorArray = ["red","green","blue"];
	let randomElement = Math.floor(Math.random()*colorArray.length);
	$currentSquare.css("background-color",colorArray[randomElement]);
	// You could also pass a function name as the second argument to .css(). 
}


const checkValidPoke = (e) => {
	//console.log($(e.target).css("background-color"));
	if($(e.target).css("background-color") === "rgb(0, 0, 255)"){
		++score;
		console.log("blue selected; score: " + score);
	}
	else if($(e.target).css("background-color") === "rgb(255, 255, 255)"){
	}
	else{
		--score;
		console.log("other color selected; score: " + score);
	}

	$h1.text("scoreboard: " +score);
}

const setTimer = () =>{
	const $timeOnTheBoard = $("#timer");
	const timerDecrease = setInterval(() => {
		time--;
		$timeOnTheBoard.text("timer: "+time);
		if(time===0){
			clearInterval(timerDecrease);
			round++;
		}
	}, 1000);
}


const setUpRound = () =>{
	// decrease time allowed as round goes up and increase no of squares for each round
	$('.squares').empty();
	$('#round').text("round: "+round);
	if(round === 1){
		createSquares(50);
		time = 30;
	}
	else if(round === 2){
		createSquares(60);
		time = 20;
	}
	else if(round === 3){
		createSquares(70);
		time = 10;
	}
}
