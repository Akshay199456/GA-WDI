console.log("connected!!!!!");

// I. Variables and Datatypes
// A. Q+A

/*
1. By defining the variable and then using the = sign;
	eg: let value = 2;
2. 	By using the = sign to change it to a new value
	eg: value = 4;
3. By using the = sign to change it to the new variabl
	eg: let update = 5;
		value = update;
4. 'declare' means to create a variable before using it in a program. No value is assigned to it. 
	'assign' means to give a variable a value after it has been declared.
	'define' means to create a variable and then assign it a value.
5. Pseudocoding is an informal language that is used to help programmers develop algorithms. It
	is useful since it allows the programmers to sketch out the layout of a program and plan out
	their approach to solving it without actually coding it.
6. 80-85% - Planning
	15-20% - Coding 
*/


// B. Strings
let firstVariable = "Hello World";
firstVariable = 2;
let secondVariable = firstVariable;
secondVariable = "Bye World";
// Value of firstVariable is 2;
let yourName = "Akshay";
const expression = "Hello, my name is " + yourName;
console.log(expression);


// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

//All statements must return true

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false || false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == '48');



// D. The farm

let animal = "dog";
if(animal === "cow")
	console.log("mooooo");
else 
	console.log("not mooooo");


// E. Driver's Ed 

let age = 15;
if(age>=16)
	console.log("Here are the keys");
else
	console.log("Sorry, you're too young.");




// II. Loops

// A. The Basics

for(let i=0; i<=10; i++)
	console.log(i);

for(let i=10; i<=400; i++)
	console.log(i);

for(let i=12;i<=4000; i+=3)
	console.log(i);


// B. Get Even
for(let i=1; i<=100; i++)
	if(i%2===0)
		console.log(i+"<-- is an even number");


// C. Give me Five
for(let i=0; i<101; i++){
		if(i%5===0)
			console.log("I found a "+ i + ". High five!");
		if(i%3===0)
			console.log("I found a "+ i+". Three is a crowd");
	}


// D. Savings account
let sum = 0;
for(let i=1; i<=10; i++)
	sum+=i;
console.log('Check your work! Your banck_account should have $'+sum+' in it.');

sum = 0;
for(let i=1; i<=100; i++)
	sum+=i*2;
console.log('Check your work! Your banck_account should have $'+sum+' in it.');


// E. Multiples of 3 and 5

// Completed in previous assignment





// III. Arrays and Control Flow

// A. Talk about it

/*
	1. The things in an array are called objects(values). An array is a collection of objects
	/ values of either the same or different data types
	2. No.
	3. Name of students in a class
*/



// B. Easy Does IT

const quotes = ["'''","'","''''","''","'''''","''''''","'''''''"];


// C. Accessing Elements

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);



// D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);



// E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.push("Aragon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse(); // Yes, we mutated the array. This is because myArray's content has now changed
// The first element is now the last element and vice versa. Mutate means to change the value of 
// something. Since the array's content has now been changed, it has been mutated.
console.log(myArray);


// F. Biggie Smalls

let integer = 10;
if(integer < 100)
	console.log("little number");
else
	console.log("big number");




// G. Monkey in the Middle

if(integer < 5)
	console.log("little number");
else if(integer > 10)
	console.log("big number");
else 
	console.log("monkey");


// H. What's in Your Closet?

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


console.log("Kristyn is rocking that " + kristynsCloset[2]+ " today!");
kristynsCloset.splice(6,0,"raybans");
kristynsCloset[5] = "stained knit hat";


console.log("Thom is looking fierce in a " + thomsCloset[0][0]+", "+ thomsCloset[1][0]+" and "+ thomsCloset[2][0]+"!");

thomsCloset[1][2] = "Footie Pajamas";



// IV. Functions

// A. completed in previous assignment



// B. printCool

function printCool(name)
{
	return `${name}`+" is cool!";
}

console.log(printCool("Captain Reynolds"));


// C. calculateCube
function calculateCube(value)
{
	return Math.pow(value,3);
}

console.log(calculateCube(3));



// D. isVowel
function isVowel(letter){
	const lowerCaseLetter = letter.toLowerCase();
	switch(lowerCaseLetter){
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			return true;
		default: 
			return false;
	}
}

console.log(isVowel("A"));



// E. getTwoLengths
function getTwoLengths(string1, string2){
	const stringArray = [];
	stringArray.push(string1.length);
	stringArray.push(string2.length);
	return stringArray;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));



// F. getMultipleLengths
function getMultipleLengths(stringArray){
	const stringLengthArray = [];
	for(let i=0; i<stringArray.length; i++){
		stringLengthArray.push(stringArray[i].length);
	}
	return stringLengthArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



// G. maxOfThree
function maxOfThree(num1, num2, num3){
	const array = [num1, num2, num3];
	let max = array[0];
	for(let i=0; i<array.length; i++){
		if(max<array[i])
			max = array[i];
	
}
return max;
}

console.log(maxOfThree(6, 9, 1));


// H. printLongestWord
function printLongestWord(stringArray){
	if(stringArray.length === 0)
		return "Not a valid string array. Enter again";
	else{
		let longestWord = stringArray[0];
		let longestWordLength = longestWord.length;
		for(let i=0; i<stringArray.length; i++){
			if(longestWordLength<stringArray[i].length){
				longestWordLength = stringArray[i].length;
				longestWord = stringArray[i];
			}
		}
		return longestWord;
	}
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



// I. transmogrify

function transmogrify(num1, num2, num3){
	return (num1*num2)**num3;
}

console.log(transmogrify(5, 3, 2));



// J. reverseWordOrder v2
function reverseWordOrder(string){
	let stringArray = [];
	string+=" ";
	let currentWord = "";
	for(let i=0; i<string.length; i++){
		if(string[i] === " "){
				stringArray.unshift(currentWord);
				currentWord = "";
			}
		else{
			currentWord+=string[i];
			}
		}

	let outputString = "";
	for(let i=0; i<stringArray.length; i++){
		if(i !== stringArray.length-1)
			outputString+=stringArray[i]+" ";
		else
			outputString+=stringArray[i];
	}

	return outputString;
}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));



// K. Get down and dirty with Math.random()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomElement(quotes){
	let min = 0 ;
	let max = quotes.length;
	const randomNumber = getRandomInt(min,max);
	return quotes[randomNumber];
}

console.log(getRandomInt(1,11));
console.log(getRandomInt(10,101));
console.log(getRandomNumber(532,13268));
console.log(getRandomNumber(1,11));
console.log(getRandomElement(quotes));




// V. Objects


// A. Make a user object
const user = {} ;
user.name = "Akshay";
user.email = "akshay.kum94@gmail.com";
user.age = 24;
user.purchased = [];



// B. Update the user
user.email = "sam@gmail.com";
++user.age;



// C. Adding keys and values
user.location = "Houston";



// D. Shopaholic!
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[user.purchased.length-1]);



// E. Object-within-object
user.friend = {
	name: "Frodo",
	age: 21,
	location: "Shire",
	purchased: []
};

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[user.friend.purchased.length-1]);




// F. Loops
for(let i=0 ; i<user.purchased.length; i++)
	console.log(user.purchased[i]);
for(let i=0 ; i<user.friend.purchased.length; i++)
	console.log(user.friend.purchased[i]);




// G. Functions can operate on objects
function updateUser(){
	user.age++;
	user.name = user.name.toUpperCase();
}


function oldAndLoud(person){
	person.name = "Batman";
	person.age++;
	person.location = "Gotham City";
	person.purchased = [];
}

updateUser();
console.log(user);
oldAndLoud(user);
console.log(user);







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
