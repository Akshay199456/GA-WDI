console.log("connected");

//Commit 1
/*
1.
	1. Parameter is the value that is given in the function definition. Argument is the value that 
	is given in the function call

	2. Console.log is used to push anything that you want into the stream output.
		Return is used to push a value to whatever called the function in the first value.

	3. Because a function can return a value, we can use it to push the value that is returned 
		by the function into a variable where it was called. Without the retun ability, we wouldn't
		have been able to get the result of calling a function and using that to perform a certain
		action depending on the value returned.
*/


//Commit 2

function checkPalindrome(string){
	for(let i=0; i<Math.floor(string.length/2); i++)
	{
		if(string[i].toLowerCase()!==string[string.length-1-i].toLowerCase())
			return false;
	}
	return true;
}

console.log(checkPalindrome("rasar"));


//Commit 3

function sumDigits(number){
	let sum = 0;
	while(number>0)
	{
		let rem = number%10;
		sum+=rem;
		number= Math.floor(number/ 10);
	}

	return sum;
}

console.log(sumDigits(42));



//Commit 4

function calculateSide(sideA, sideB){
	return Math.sqrt(sideA**2 +sideB**2);
}

console.log(calculateSide(8, 6));



//Commit 5
function sumArray(array){
	let sum=0;
	for(let i=0; i<array.length; i++)
		sum+=array[i];
	return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));



//Commit 6
function checkPrime(number){
	if (number<=1 || Math.ceil(number)!==number)
		return false;
	else
	{
		for(let i=2 ; i<=Math.sqrt(number); i++)
		{
			if(number%i===0)
				return false;
		}
		return true;
	}
}

console.log(checkPrime(13.33));

function printPrimes(number){
	console.log("List of primes starts now: ")
	for(let i=2; i<=number; i++)
		if(checkPrime(i))
			console.log(i);
}

printPrimes(97);


// Commit 7a - HFM Part 2

function insertDash(number){
	if(typeof number!=="number")
		return "Insert a number";
	else
	{
		let isOddFalse = false;
		const stringNumber = number.toString();
		let finalString = "";
		for(let i=0; i<stringNumber.length; i++)
		{
			let currentValue = Number(stringNumber[i]);
			if(currentValue%2!==0)
			{
				let nextValue = Number(stringNumber[i+1]);
				if(nextValue%2!==0)
				{
					if(i===stringNumber.length-1)
						finalString += currentValue.toString();
					else
						finalString = finalString +currentValue.toString()+"-";
				}
				else
				{
					finalString+=currentValue.toString();
					finalString+=nextValue.toString();
					++i;
				}	
			}
			else
				finalString+=currentValue.toString();
		}
		return finalString;
	}
}

console.log(insertDash(12345677));


//Commit 7b - Reverse String

function reverseString(string){
	let output="";
	for(let i=string.length-1; i>=0; i--){
		output+=string[i];
	}
	return output;
}

console.log(reverseString("Hello"));



//Commit 7c - Modified Palindrome Spacing
function checkPalindromeSpacing(string){
	string = string.replace(/\s/g,''); 
	for(let i=0; i<Math.floor(string.length/2); i++)
	{
		if(string[i].toLowerCase()!==string[string.length-1-i].toLowerCase())
			return false;
	}
	return true;
}

console.log(checkPalindromeSpacing("Bird ribsssss"));



//Commit 7d - Modified Palindrome Punctuation
function checkPalindromePunctuation(string){
	let stringWithoutPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g,"");
	//console.log(stringWithoutPunctuation);
	let stringWithoutSpace = stringWithoutPunctuation.replace(/\s/g,"");
	//console.log(stringWithoutSpace);
	for(let i=0; i<Math.floor(stringWithoutSpace.length/2); i++)
	{
		if(stringWithoutSpace[i].toLowerCase()!==stringWithoutSpace[stringWithoutSpace.length-1-i].toLowerCase())
			return false;
	}
	return true;
}

console.log(checkPalindromePunctuation("Cigar? Toss it in a can! It is so tragic."));


// Commit 7e- Word pallindrome
function wordPallindrome(string){
	let cleanStringArray = string.split(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g); // string array without punctuation marks
	let noPunctString = "";
	for(let i=0; i<cleanStringArray.length;i++)
	{
		if(cleanStringArray[i]!=="")
			noPunctString+=cleanStringArray[i]+" "; // string without punctuation marks
	}
	// console.log(cleanStringArray);
	// console.log(noPunctString);

	let noSpaceStringArray = noPunctString.split(" "); // array without space
	//console.log(noSpaceStringArray);
	let outputStringArray = [];
	for(let i=0; i<noSpaceStringArray.length; i++)
	{
		if(noSpaceStringArray[i]!=="")
			outputStringArray.push(noSpaceStringArray[i]); //string without space
	}

	//console.log(outputStringArray);
	for(let i=0; i<Math.floor(outputStringArray.length/2); i++)
	{
		if(outputStringArray[i].toLowerCase()!==outputStringArray[outputStringArray.length-1-i].toLowerCase())
			return false;
	}

	return true;
}

console.log(wordPallindrome("\"Son, I am able,\"" +"she said. "+ "\"Though you scare me, watch!\"" + "said I, "+"\"Beloved,\"" + "I said," +"\"watch me scare you!\""+ "Though, said she: "+"\"able am I, son.\""));