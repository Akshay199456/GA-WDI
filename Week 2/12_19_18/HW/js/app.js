console.log("conected");

const cardArray = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
];
let copiedCardArray = cardArray;


class Game{
	constructor(){
		this.allCards = cardArray;
		this.cardsPlayed = [];
		this.playerPoints = 0;
		this.computerPoints = 0;
		this.roundsCount = 0;
		this.playerRoundsWon = 0;
		this.computerRoundsWon = 0;
		this.computerHand = [];
	}

	getRoundsPlayed(){
		return this.roundsCount;
	}

	setRoundsPlayed(){
		this.roundsCount+=1;
	}

	getPlayersRoundsWon(){
		return this.playerRoundsWon;
	}

	setPlayersRoundsWon(){
		this.playerRoundsWon+=1;
	}

	getComputerRoundsWon(){
		return this.computerRoundsWon;
	}

	setComputerRoundsWon(){
		this.computerRoundsWon+=1;
	}

	getComputerPoints(){
		return this.computerPoints;
	}

	setComputerPoints(){
		this.computerPoints+=1;
	}

	getPlayerPoints(){
		return this.playerPoints;
	}

	setPlayerPoints(){
		this.playerPoints+=1;
	}

	generateComputerHand(){
		//generate hand for computer
		for(let i=0; i<3; i++){
			let randomNumber = Math.floor(Math.random()*cardArray.length);
			this.computerHand.push(cardArray[randomNumber]);
			cardArray.splice(randomNumber, 1);
		}
		// console.log("Computer: ");
		// console.log(this.computerHand);
		// console.log(cardArray);
		return this.computerHand;
	}

	printHand(computerHand){
		for(let i=0; i<computerHand.length; i++){
			console.log(i+". Pokemon: " + computerHand[i].name + " Damage: "+computerHand[i].damage);
		}
	}

	selectRandomCard(computerHand){
		let randomNumber = Math.floor(Math.random()*computerHand.length);
		return randomNumber;
	}

	setCardsPlayed(computerHand, computerChoice){
		this.cardsPlayed.push(computerHand[computerChoice]);
	}

	displayCardsPlayed(){
		for(let i=0; i<this.cardsPlayed.length; i++){
			console.log(i+" Pokemon: " + this.cardsPlayed[i].name +" Damage: "+this.cardsPlayed[i].damage);
		}
	}

	resetPlayerPoints(){
		this.playerPoints = 0;
	}

	resetComputerPoints(){
		this.computerPoints = 0;
	}
};


class Player{

	constructor(){
		this.pointsWon = 0;
		this.roundsWon = 0;
		this.playerHand = [];
		this.cardsPlayed = [];
	}

	getPlayerPoints(){
		return this.pointsWon;
	}

	getRoundsWon(){
		return this.roundsWon;
	}

	setPlayerPoints(){
		this.pointsWon+=1;
	}

	setRoundsWon(){
		this.roundsWon+=1;
	}

	generatePlayerHand(){
		for(let i=0; i<3; i++){
			let randomNumber = Math.floor(Math.random()*cardArray.length);
			this.playerHand.push(cardArray[randomNumber]);
			cardArray.splice(randomNumber, 1);
		}
		// console.log("Player: ");
		// console.log(this.playerHand);
		// console.log(cardArray);
		return this.playerHand;
	}

	printHand(playerHand){
		for(let i=0; i<playerHand.length; i++){
			console.log(i+". Pokemon: " + playerHand[i].name + " Damage: "+playerHand[i].damage);
		}
	}

	setCardsPlayed(playerHand, playerChoice){
		this.cardsPlayed.push(playerHand[playerChoice]);
	}

	displayCardsPlayed(){
		for(let i=0; i<this.cardsPlayed.length; i++){
			console.log(i+" Pokemon: " + this.cardsPlayed[i].name +" Damage: "+this.cardsPlayed[i].damage);
		}
	}

	resetPlayerPoints(){
		this.pointsWon = 0;
	}
};


function playGame(playerObject, gameObject, playerHand, computerHand){
	// const playerObject = new Player();
	// const playerHand = playerObject.generatePlayerHand();
	// const gameObject = new Game();
	// const computerHand = gameObject.generateComputerHand();

	// Player and Computer console

	for(let i=0; i<3; i++){
		console.log("######## Player, the hand you have been dealt is: ########")
		playerObject.printHand(playerHand);
		let playerChoice = Number(prompt("Player, please select a card from your hand (0-2)"));
		console.log("******** Player, you selected the card: ********");
		console.log("Pokemon: " + playerHand[playerChoice].name + " Damage: "+playerHand[playerChoice].damage);
		playerObject.setCardsPlayed(playerHand, playerChoice);
		//playerHand.splice(playerChoice,1);
		console.log("######## The computer has the hand: ########");
		gameObject.printHand(computerHand);
		console.log("******** The computer chooses the card: ********");
		let computerChoice = gameObject.selectRandomCard(computerHand);
		console.log("Pokemon: " + computerHand[computerChoice].name + " Damage: "+computerHand[computerChoice].damage);
		gameObject.setCardsPlayed(computerHand, computerChoice);
		//computerHand.splice(computerChoice,1);

		if(computerHand[computerChoice].damage > playerHand[playerChoice].damage){
			console.log("Computer Beats Player");
			gameObject.setComputerPoints();}
		else if(computerHand[computerChoice].damage < playerHand[playerChoice].damage){
				console.log("Player beats Computer");
				gameObject.setPlayerPoints();
				playerObject.setPlayerPoints();
			}
		else{
			console.log("It's a tie!!!");
		}

		playerHand.splice(playerChoice,1);
		computerHand.splice(computerChoice,1);

		console.log("Score: "+"Player: "+playerObject.getPlayerPoints()+" , Computer: "+gameObject.getComputerPoints());
	}

		if(playerObject.getPlayerPoints()> gameObject.getComputerPoints()){
			playerObject.setRoundsWon();
			gameObject.setPlayersRoundsWon();
			console.log("$$$$$$$$ Player wins this round $$$$$$$$");
			}	
		else if (playerObject.getPlayerPoints()< gameObject.getComputerPoints()){
			gameObject.setComputerRoundsWon();
			console.log("$$$$$$$$ Computer wins this round $$$$$$$$");
			}
		else console.log("$$$$$$$$ This round has been tied. What are the odds!!! $$$$$$$$");

		console.log("Rounds Won: "+"Player: "+playerObject.getRoundsWon()+" , Computer: "+gameObject.getComputerRoundsWon());


	console.log("*******************************************");
	console.log("******** At the end of this round: ********");
	console.log("********                           ********");
	console.log("*******************************************");
	console.log("Cards played by Computer: ");
	gameObject.displayCardsPlayed()
	console.log("Cards played by Player: ");
	playerObject.displayCardsPlayed();



}


function createGame(){
		const playerObject = new Player();
		// const playerHand = playerObject.generatePlayerHand();
		const gameObject = new Game();
		// const computerHand = gameObject.generateComputerHand();
	
		let limit = cardArray.length/6; 
	
	// Game begins
	for(let i=0; i<limit; i++){
		console.log("*******************************");
		console.log("******** Round begins: ********");
		console.log("********               ********");
		console.log("*******************************");
		const playerHand = playerObject.generatePlayerHand();
		const computerHand = gameObject.generateComputerHand();
		playGame(playerObject, gameObject, playerHand, computerHand);
		gameObject.setRoundsPlayed();
		gameObject.resetPlayerPoints();
		gameObject.resetComputerPoints();
		playerObject.resetPlayerPoints();
		}

	if(playerObject.getRoundsWon() > gameObject.getComputerRoundsWon()){
			console.log("*******************************");
			console.log("We have a winner... The player has emerged victorious!");
			console.log("Final round score: Player: "+playerObject.getRoundsWon()+" Computer: "+gameObject.getComputerRoundsWon());
			console.log("*******************************");
		}
	else if(playerObject.getRoundsWon() < gameObject.getComputerRoundsWon()){
			console.log("*******************************");
			console.log("We have a winner... Skynet(Computer) will dominate the world!");
			console.log("Final round score: Player: "+playerObject.getRoundsWon()+" Computer: "+gameObject.getComputerRoundsWon());
			console.log("*******************************");
		}
	else {
			console.log("*******************************");
			console.log("The game has come to a draw! Take a bow...");
			console.log("Final round score: Player: "+playerObject.getRoundsWon()+" Computer: "+gameObject.getComputerRoundsWon());
			console.log("*******************************");
		}
	}


createGame();