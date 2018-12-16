//console.log("connected!!!");
//This is the final update to the app.js file

//Commit 1

for(let i=1; i<=20; i++)
	console.log(i);


//Commit 2
for(let i=0; i<201; i++)
	if(i%2===0)
		console.log(i);



//Commit 3

let catDomMessage = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
let min = Math.ceil(0);
let max = Math.floor(catDomMessage.length);
for(let i=0; i<20; i++)
{
	let randomValue = Math.floor(Math.random() * (max - min)) + min;
	console.log("Love me, pet me! HSSSSSS!");
	if(i%2===0)
		console.log(catDomMessage[randomValue]);
}

//Commit 4
for(let i=1; i<101; i++)
{
	if(i%3===0 && i%5===0)
		console.log("Fizzbuzz");
	else if(i%3==0)
		console.log("Fizz");
	else if(i%5==0)
		console.log("Buzz");
	else 
		console.log(i);
}


//Commit 5
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy";
daniel[1] +=1;
ryan[2]="Gotham City";
reuben.pop();
reuben.push("Chicago");	
jim.pop();
jim.push("San Francisco", "Seattle", "Austin");
jim.splice(2,1);


//Commit 6
let ninjaTurtles =["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let copy = ninjaTurtles;
for(let i=0; i<copy.length; i++)
{
	copy[i] = copy[i].toUpperCase();
	console.log(copy[i]);
}

for(let i=0; i<copy.length; i++)
{
	let ninja = "";
	let name = copy[i];
	for(let j=0; j<name.length; j++)
	{
		if(j%2!==0)
			ninja+= name[j].toLowerCase();
		else 
			ninja +=name[j];
	}
	console.log(ninja);
}


//Commit 7
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

console.log("Thom will be wearing: ");

console.log(thomsCloset[0][1] +" shirt with "+ thomsCloset[1][0]+" pant and " + thomsCloset[2][1]+" accessory");
console.log(thomsCloset[0][2] +" shirt with "+ thomsCloset[1][1]+" pant and " + thomsCloset[2][0]+" accessory");
console.log(thomsCloset[0][3] +" shirt with "+ thomsCloset[1][0]+" pant and " + thomsCloset[2][2]+" accessory");


console.log("Kristyn will be wearing: ");
console.log(kristynsCloset[0]+" , "+kristynsCloset[3]+" and "+kristynsCloset[4]);
console.log(kristynsCloset[0]+" , "+kristynsCloset[4]+" and "+kristynsCloset[5]);
console.log(kristynsCloset[0]+" , "+kristynsCloset[3]+" and "+kristynsCloset[5]);


//Commit 8
for(let i=0; i<kristynsCloset.length; i++)
	console.log("WHIRR: Now washing " + kristynsCloset[i]);

for(let i=0; i<thomsCloset.length; i++)
	console.log("PURR: Now washing " + thomsCloset[i]);

//Commit 9
let sum=0;
for(let i=1; i<=1000; i++)
{
	if(i%3===0 || i%5===0)
		sum+=i;
}

console.log(sum);



//Commit 10
let argument = 7;
//let argument = 10;


for(let i=0; i<argument; i++)
{
	let pattern ="";	
	for(let j=0; j<=i; j++)
	{
		pattern+="#";
	}
	console.log(pattern);
}

for(let i=0; i<argument; i++)
{
	let pattern ="";	
	for(let j=0; j<argument; j++)
	{
		if(i+j<6)
			pattern+=" ";
		else
			pattern+="#";
	}
	console.log(pattern);
}


for(let i=0; i<argument; i++)
{
	let pattern ="";	
	for(let j=0; j<argument; j++)
	{
		if(i+j<=6)
			pattern+="#";
		else
			pattern+=" ";
	}
	console.log(pattern);
}

for(let i=0; i<argument; i++)
{
	let pattern ="";	
	for(let j=0; j<argument; j++)
	{
		if(j<i)
			pattern+=" ";
		else
			pattern+="#";
	}
	console.log(pattern);
}


//Commit 11
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
//const nums = [270,  290,  300,  310,  320,  355,  400,  430];
nums.sort(); //sorted nums
if(nums.length%2!==0)
{
	console.log("Median: "+ nums[Math.floor(nums.length/2)]);
}
else
{
	let avg = (nums[nums.length/2] + nums[(nums.length/2) - 1])/2;
	console.log("Medianssss: "+ avg);
}
