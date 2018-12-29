const game = {
	numberOfPlayers: 0,
	players: [],
	createPlayers(){
		for(let i=1; i<=this.numberOfPlayers; i++){
			const player = new Player(i);
			// To reference the players outside the method
			this.players.push(player);
			player.initBoard();
		}
	}
};


// this is instantiating the class or creating the object
new Player(1);









//console.log("Connected!!!!!!");

// How many players is the user choosing
// event is the event object
$("#startScreen").on('click', (e) =>{
	// console.log(e.target, ' target');
	// console.log(e.currentTarget, ' currentTarget');

	if(e.target.tagName === "BUTTON"){
		//retrieving the text
		const numberOfPlayers = $(e.target).text();

		//add info to game object
		game.numberOfPlayers = Number(numberOfPlayers);
		// creating number of players
		game.createPlayers();
		$(e.currentTarget).hide();
		console.log(numberOfPlayers);
	}

//console.log(e.target.tagName);
})