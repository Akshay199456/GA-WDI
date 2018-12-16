// console.log("connected");

// 1. Syntax
/*
const object1 = {
	name: "thyme",
	flavor: "savory"
};

const object2 = {};
object2.name = "thyme";
object2.flavor = "savory";

const object3 = {};
object3['name'] = "thyme";
object3['flavor'] = "savory";


// 2. Me
const me = {};
me.name = "Akshay";
me.age = 24;
me.email = "akshay.kum94@gmail.com";
console.log(me.name);
me["age"] =1000;
console.log(me.age);
me["place of residence"] = "SF";
console.log(me["place of residence"]);


// 3. Slmier
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
};

console.log(monster.name);
monster["type"] = "creature";
monster.age = 6;
console.log(monster);
const displayMonsterInfo = () =>{
	console.log(monster.name +" "+ monster.color + " "+ monster.type + " "+ monster.age);
}
monster.displayMonsterInfo = displayMonsterInfo;
monster.displayMonsterInfo();
*/

//4. Ogres


// ogre { healthpoints}
// adventurer {name, healthPoints, attackPoints}
// game{ ogre, adventurer, playOut}

const ogre = {
	healthPoints: 100,
	
	getAttack(){
		let attackPoints = Math.floor(Math.random()*11);
		return attackPoints;
	},

	depleteHealth(points){
		this.healthPoints-=points;
	},

	getHealth(){
		return this.healthPoints;
	}
};

const adventurer = {
	name: "Samwise Gamgee",
	healthPoints: 100,
	attackPoints: 5,
	
	getAttack(){
		return this.attackPoints;
	},
	
	depleteHealth(points){
		this.healthPoints-=points;
	},

	getHealth(){
		return this.healthPoints;
	}
};

const game = {
	ogreAttack(){
		let attackPoints = ogre.getAttack();
		adventurer.depleteHealth(attackPoints);
		return attackPoints;
	},

	adventurerAttack(){
		let attackPoints = adventurer.getAttack();
		ogre.depleteHealth(attackPoints);
		return attackPoints;
	},

	gameLogic(){
		console.log(adventurer.getHealth() + " "+ ogre.getHealth());
		while(adventurer.getHealth()>0 && ogre.getHealth()>0)
		{
			let advAttackPoints = game.adventurerAttack();
			console.log("Adventurer attacks for : " + advAttackPoints + ". Ogre health: "+ ogre.getHealth());

			if(ogre.getHealth()>0)
			{
				let ogreAttackPoints = game.ogreAttack();
				console.log("Ogre attacks for : " + ogreAttackPoints + ". Adventurer health: "+ adventurer.getHealth())
			}
		};

		if(adventurer.getHealth() <= 0)
			console.log("Ogre wins");
		else if(ogre.getHealth() <= 0)
			console.log("Adventurer wins");
		else
			console.log("Both warriors fought valiantly. They deserve a tie!");
	}
};

game.gameLogic();




// Hungry For More

// 1. Mama cat

const cat1 = {
	name: "Sylvester",
	breed: "Persian",
	age: 6
};

console.log("Mama cat age: " + cat1.age);
console.log("Mama cat breed: " + cat1.breed);


// 2.Papa cat
const cat2 = {
	name: "Tom",
	breed: "Siamese",
	age: 9
};



// 3. Combine Cats!
function combineCats(cat1, cat2){
	const catChild ={};
	catChild.name = cat1.name+cat2.name;
	catChild.age = 1;
	catChild.breed = cat1.breed+"-"+cat2.breed;

	return catChild;
}


console.log(combineCats(cat1, cat2));



// 4. Cat brain bender
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

