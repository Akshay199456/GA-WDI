console.log("connected");

// 1. printGreeting
//Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.


// Need to interpolate
function printGreeting(name){
	const greeting = "Hello there " +name;
	return greeting; 
}

console.log(printGreeting("Slimer"));

//2. reverseWordOrder
//Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverseWordOrder(string){
	const stringArray = string.split(" ");
	let buffer = "";
	for(let i=stringArray.length-1; i>=0; i--)
	{
		buffer+=stringArray[i]+" ";
	}
	return buffer;
}

console.log(reverseWordOrder("Ishmael me Call"));


// 3. calculate
// Write a function called calculate.

// This function should take three arguments: two numbers and a string.

// Name the parameters num1, num2, and operation.

// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

// If if the function is called with the third argument as "sub", it should return return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).


function calculate(num1, num2, operation){
	switch (operation)
	{
		case "add": 
			return (num1+num2);
			break;
		case "sub": 
			return (num1-num2);
			break;
		case "mult": 
			return (num1*num2);
			break;
		case "div": 
			return (num1/num2);
			break;
		case "exp": 
			return (num1**num2);
			break;

	}
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));


// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.

// The number 333 is not 1-to-n pandigital.

// The number 0 is not 1-to-n pandigital.

// The number 987654321 is 1-to-n pandigital.

// Write a function that checks if a number is 1-to-n pandigital.



function checkPanDigital(number){
	if(number<=0)
		return "Not Pan Digital";
	else
	{
		let hashMap = {};
		while(number>0)
		{
			let rem = number%10;
			if(rem===0)
				return "Not Pan Digital";
			else
			{
				let value = hashMap[rem.toString()];
				if(value!==undefined)
					return "Not Pan Digital";
				else
				{
					hashMap[rem.toString()]=1;
					number= Math.floor(number/10);
				}
			}
		}
		return "Pan Digital";
	}
}

console.log(checkPanDigital(0));



// 5. printGreeting v2.0
// There is a very rudimentary JavaScript function for receiving user input called prompt().

// Usage:

// 	const userInput = prompt("Please enter some input");
// userInput is now whatever the user entered.

// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on mdn.

// Let's revisit printGreeting.

// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.

/*
function printGreeting2(name){
	alert("Hello there " + name+" . Hope you are having a great morning");
}

const userInput = prompt("Enter your name: ");
printGreeting2(userInput);
*/

// 6. Functions + loops: a special partnership
// Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a # character (representing a black square). Hence, the characters should form a chessboard.

// Calling your function should print something like this:

function createPattern(boardLength){
	let pattern1="#";
	let pattern2=" ";
	let finalPattern1="";
	let finalPattern2="";
	let finalString="";
	for(let i=0; i<boardLength; i++)
	{
		if(i%2===0)
		{
			finalPattern1 += " ";
			finalPattern2 += "#";
		}
		else
		{
			finalPattern1 += "#";
			finalPattern2 += " ";
		}
	}
	// console.log(finalPattern1);
	// console.log(finalPattern2);

	for(let i=0;i<boardLength; i++)
	{
		if(i%2===0)
			finalString+=finalPattern1+"\n";
		else
			finalString+=finalPattern2+"\n";
	}

	return finalString;
}

console.log(createPattern(8));

// 8. Variable number of arguments
// Modify calculate above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.



function modifiedCalculate(num1, operation, num2){
	switch (operation)
	{
		case "add": 
			return (num1+num2);
			break;
		case "sub": 
			return (num1-num2);
			break;
		case "mult": 
			return (num1*num2);
			break;
		case "div": 
			return (num1/num2);
			break;
		case "exp": 
			return (num1**num2);
			break;
		case "sqrt":
			return Math.sqrt(num1);
	}
}

console.log(modifiedCalculate(25,"sqrt"));