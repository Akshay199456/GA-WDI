//blueprint for objects
class Player{
	constructor(name){
		this.name = name;
		this.live = 3;
		this.health = 10;
		this.$location = '';
	}

	initBoard(){
		// create the players area on the board
		/*
		let playerText="<div><h2>"+this.name+"</h2></div>";
		$("#board").append(playerText);
		$("h2").eq(this.name).append("<br><button>Attack</button>");
		*/
		// OR

		// create a div
		const $div = $("<div></div>");
		//created the h2 with the name
		const $h2 = $("<h2/>").text("player "+this.name);

		// dont use this.attack(); that's calling the function, we just need to create an event handler
		const $attackButton = $('<button>Attack</button>').on("click", this.attack.bind(this));
		// basically saying that bind the 'this' which was the object that called to inside the 
		// method so whenever 'this' is called inside the method 'attack', it is attached to the object
		// and not the button (since the button is invoking the attack method).


		// attaching the elements to the div as children
		$div.append($h2);
		$div.append($attackButton);

		// attaching the div to the board
		$("#board").append($div);

		// storing a reference to where the div is located on the dom
		this.$location = $div;

	}

	attack(){
		// to attack
		console.log("attack is happening!");

		// creating a span and giving it text using the name of the class
		const $span = $("<span/>").text(this.name+" attacked like sea otter");

		// use the div we stored in $location and append the span
		//console.log(this, 'what is this');
		this.$location.append($span);
	}
}