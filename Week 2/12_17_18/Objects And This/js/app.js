console.log("Connected!!!");

const taco = () => {
  console.log(this, ' this is with arrow functions');
}

taco();


const game = {
  	start(){
      const gameTimer = setInterval(() => {
        
        if(this.timer>0){
        	console.log('hi', this);
            this.timer-=1;
            console.log(this.timer);
            }
        else{
        		console.log("gameover");
    			clearInterval(gameTimer);
    		}
      }, 1000);
    }
};

game.timer = 10;
game.start();






// Activity

const player = {};
player.score = 10;
player.name = "Aragon";
player.lives = 3;






const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 };
for(let key in movie){
	console.log(`Key: ${key} ; Value: ${movie[key]}`);
}




const movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ];

const object = {};
let count = 0;
for(let i=0; i<movies.length; i++){	
		object[movies[i].title] = count; 
	}

for(let i=0; i<movies.length; i++){
	for(let key in movies[i]){
		console.log("Keyaaaaa: "+ key + " Valueaaaaa: "+movies[i][key]);
	}
}


console.log(object);