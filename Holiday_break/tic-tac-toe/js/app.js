const tttArray = [];
const xArray = [];
const oArray =[];
const winningCombinations = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let player1Win = false;
let player2Win = false;
let tieStatus;



function checkArrayWin(array){
	for(let i=0; i<winningCombinations.length; i++){
		if(winningCombinations[i].every(val => array.includes(val)))
			return true;
	}
	return false;
}

function checkTie(){
	for(let i = 0; i <tttArray.length; i++){
		if(tttArray[i]){

		}
		else{
			return false;
		}
	}

	if(!player1Win && !player2Win)
		return true;
	else 
		return false;

}




// Code to create the modal
function createModal(){
	const $div = document.createElement("div");
	const $innerDiv = document.createElement("div");
	const $span = document.createElement("span");
	const $para = document.createElement("p");
	const $main = document.querySelector("main");
	let $text;
	let $spanText;

	if(player1Win)
		$text = document.createTextNode("Player 1 has won. Congrats!!!");
	else if(player2Win)
		$text = document.createTextNode("Player 2 has won. Congrats!!!");
	else
		$text = document.createTextNode("The game has ended in a tie. Well played!");

	$para.appendChild($text);
	$innerDiv.appendChild($span);
	$innerDiv.appendChild($para);
	$div.appendChild($innerDiv);
	$div.setAttribute("id", "myModal");
	$div.classList.add("modal");
	$innerDiv.classList.add("modal-content");
	$span.classList.add("close");
	$spanText = document.createTextNode("X");
	$span.appendChild($spanText);
	$main.appendChild($div);


	const $modal = document.getElementById("myModal");
	$modal.style.display = "block";


	$span.onclick = function() {
  		$modal.style.display = "none";
	}



	// console.log($div);
}



// -------------------------------------------------------------------------





for(let i=0; i<9; i++){
	tttArray.push(false);
}
// console.log(tttArray);

let playerX = true;
const $player1Button = document.getElementsByClassName("playerButtons")[0];
const $player2Button = document.getElementsByClassName("playerButtons")[1];

$player1Button.classList.toggle("togglePlayer");

// console.log($player1Button);

function mainTriggered(event){
	if(event.target.id === "upperLeft"){
		if(!tttArray[0]){
			tttArray[0] = true;
			const $upperLeft = document.getElementById("upperLeft");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(0);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(0);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$upperLeft.appendChild($image);

		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "top"){
		if(!tttArray[1]){
			tttArray[1] = true;
			const $top = document.getElementById("top");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(1);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(1);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$top.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "upperRight"){
		if(!tttArray[2]){
			tttArray[2] = true;
			const $upperRight = document.getElementById("upperRight");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(2);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(2);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$upperRight.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "left"){
		if(!tttArray[3]){
			tttArray[3] = true;
			const $left = document.getElementById("left");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(3);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(3);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$left.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id == "middle"){
		if(!tttArray[4]){
			tttArray[4] = true;
			const $middle = document.getElementById("middle");
			//console.log($middle);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(4);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(4);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$middle.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "right"){
		if(!tttArray[5]){
			tttArray[5] = true;
			const $right = document.getElementById("right");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(5);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(5);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$right.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "lowerLeft"){
		if(!tttArray[6]){
			tttArray[6] = true;
			const $lowerLeft = document.getElementById("lowerLeft");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(6);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(6);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$lowerLeft.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "bottom"){
		if(!tttArray[7]){
			tttArray[7] = true;
			const $bottom = document.getElementById("bottom");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(7);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(7);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$bottom.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}

	else if(event.target.id === "lowerRight"){
		if(!tttArray[8]){
			tttArray[8] = true;
			const $lowerRight = document.getElementById("lowerRight");
			//console.log($upperLeft);
			const $image = document.createElement("img")
			if(playerX){
				xArray.push(8);
				$image.setAttribute("src","images/yellowX.jpg");
				playerX = false;
			}
			else{
				oArray.push(8);
				$image.setAttribute("src","images/O.jpeg");
				playerX = true;
			}
			$lowerRight.appendChild($image);
		}
		$player1Button.classList.toggle("togglePlayer");
		$player2Button.classList.toggle("togglePlayer");
	}


	xArray.sort();
	oArray.sort();

	if(xArray.length >= 3){
		const gameStatus = checkArrayWin(xArray);
		if(gameStatus){
			// console.log("Player 1 has won the game. Congrats!!!");
			$main.removeEventListener("click", mainTriggered);
			player1Win = true;
			createModal();
		}
	}

	if(oArray.length >= 3){
		const gameStatus = checkArrayWin(oArray);
		if(gameStatus){
			// console.log("Player 2 has won the game. Congrats!!!");
			$main.removeEventListener("click", mainTriggered);
			player2Win = true;
			createModal();
		}
	}

	tieStatus = checkTie();
	if(tieStatus){
		// console.log("The game has ended in a tie. Well played!");
			$main.removeEventListener("click", mainTriggered);
			createModal();
	}

	// console.log("xArray: "+ xArray);
	// console.log("oArray: "+ oArray);
	// console.log(event.target.id + ":target");
	// console.log(event.currentTarget.tagName + ":currentTarget");
}



const $main = document.querySelector("main");
//console.log($main);
$main.addEventListener("click", mainTriggered);




const $button = document.querySelector("button");
$button.addEventListener("click", function(){
	location.reload();
});
