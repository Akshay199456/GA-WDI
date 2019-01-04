//Redo this mini-project to make it look like a tomagochi

/*----- cached element references -----*/ 
const stats = Array.from(document.querySelector(".petStats").children);
const image = document.querySelector("img");
const section = document.querySelector("section");



/*----- app's state (variables) -----*/ 

let catAlive = true;
let animationCount = 0;


class Tomagotchi{

	/*----- functions -----*/
	constructor(){
		this.name = "Chucky";
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0; // in weeks	
	}

	getName(){
		return this.name;
	}

	addName(name){
		this.name = name;
		render();
	}

	getAge(){
		return this.age;
	}

	increaseAge(){
		this.age += 1;
		render();
	}

	getHunger(){
		return this.hunger;
	}

	decreaseHunger(){
		this.hunger -= 4;
		if(this.hunger < 0)
			this.hunger = 0;
	}

	getSleepiness(){
		return this.sleepiness;
	}

	decreaseSleepiness(){
		this.sleepiness -= 2; 
		if(this.sleepiness < 0)
			this.sleepiness = 0;
	}

	getBoredom(){
		return this.boredom;
	}

	decreaseBoredom(){
		this.boredom -= 2;
		if(this.boredom < 0)
			this.boredom = 0;
	}

	increaseStats(){
		this.hunger += 1;
		this.sleepiness += 0.5;
		this.boredom += 0.5;
		//console.log(this);
		render();
	}


	// Animate your pet across the screen while it's alive.
	

};



/*----- constants -----*/ 
const petObject = new Tomagotchi();
const petAgeClock = setInterval(petObject.increaseAge.bind(petObject), 3000);
const petStatsClock = setInterval(petObject.increaseStats.bind(petObject), 3000);
const renderClock = setInterval(renderContinously, 100);



/*----- event listeners -----*/ 
section.addEventListener("click", buttonClick);




/*----- functions -----*/

//function to render changes to DOM
function render(){
	stats[0].children[0].textContent = petObject.getHunger();
	stats[1].children[0].textContent = petObject.getSleepiness();
	stats[2].children[0].textContent = petObject.getBoredom();
	stats[3].children[0].textContent = petObject.getAge();
	stats[4].children[0].textContent = petObject.getName();
}


// function to render changes to DOM at a much quicker pace
function renderContinously(){

	// Change images depending on the age of the cat
	let age = petObject.getAge();
	if(age===4 && age<8){
		image.src = "images/tamagotchi/marutchi.gif";
		if(animationCount === 0){
			addAnimation("transition.perspectiveUpIn");
			animationCount++;
		}
	}

	else if(age>4 && age<8){
		animationCount = 0;
	}

	else if(age===8 && age<24){
		image.src = "images/tamagotchi/kuchitamatchi.gif";
		if(animationCount === 0){
			addAnimation("transition.perspectiveUpIn");
			animationCount++;
		}
	}

	else if(age>8 && age<24){
		animationCount = 0;
	}


	else if(age===24 && age<52){
		image.src = "images/tamagotchi/ginjirotchi.gif";
		if(animationCount === 0){
			addAnimation("transition.perspectiveUpIn");
			animationCount++;
		}
	}

	else if(age>24 && age<52){
		animationCount = 0;
	}

	else if(age===52){
		image.src = "images/tamagotchi/kuchipatchi.gif";
		if(animationCount === 0){
			addAnimation("transition.perspectiveUpIn");
			animationCount++;
		}
	}

	else if(age > 52){
		animationCount = 0;
	}


	// Properties to change if cat dies
	if(petObject.getHunger() >= 10 || petObject.getSleepiness() >= 10 || petObject.getBoredom() >= 10){
		catAlive = false;
		image.src = "images/tamagotchi/dead.gif";
		if(animationCount == 0){
			addAnimation("transition.bounceIn");
			animationCount++;
		}

		clearInterval(petAgeClock);
		clearInterval(petStatsClock);
		clearInterval(renderClock);
		section.removeEventListener("click", buttonClick);
	}



	// Provide warning signs to user based on health indexes
	if(petObject.getHunger() < 4)
		stats[0].style.color = "blue";
	else if(petObject.getHunger() >= 4 && petObject.getHunger() < 7)
		stats[0].style.color = "yellow";
	else if(petObject.getHunger() >= 7)
		stats[0].style.color = "red";

	if(petObject.getSleepiness() < 4)
		stats[1].style.color = "blue";
	else if(petObject.getSleepiness() >= 4 && petObject.getSleepiness() < 7)
		stats[1].style.color = "yellow";
	else if(petObject.getSleepiness() >= 7)
		stats[1].style.color = "red";

	if(petObject.getBoredom() < 4)
		stats[2].style.color = "blue";
	else if(petObject.getBoredom() >= 4 && petObject.getBoredom() < 7)
		stats[2].style.color = "yellow";
	else if(petObject.getBoredom() >= 7)
		stats[2].style.color = "red";
}


// Button effects
function buttonClick(event){
	const buttons = event.target;
	if(buttons.innerHTML === " Feed Me "){
		petObject.decreaseHunger();
		render();
		addAnimation("callout.shake");
	}
	else if(buttons.innerHTML === " Make It Dark "){
		petObject.decreaseSleepiness();
		render();
		addAnimation("callout.bounce");
	}
	else if(buttons.innerHTML === " Play With Pet "){
		petObject.decreaseBoredom();
		render();
		addAnimation("callout.flash");
	}
	else if(buttons.innerHTML === " Modify Name "){
		const name = prompt(" Please enter a name for the cute cat ");
		petObject.addName(name);
		render();
	}
}


// Adds the given animation to the image element
function addAnimation(animationType){
	Velocity(image,animationType,{
				duration: 2000,
				loop: false
	});
}




