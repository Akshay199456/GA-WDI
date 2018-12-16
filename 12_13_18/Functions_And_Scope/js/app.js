// console.log("Consssss");
/*
function printSum()
{
	console.log(10+10);
}

let argument = 5 ;

for(let i=0; i<argument;i++)
{
	let pattern="";
	for(let j=0; j< argument;j++)
	{
		if(j<=i)
			pattern+="#";
		else
			pattern+=" ";
	}
	console.log(pattern);
}
*/



function calculateArea(width, length){
	return width*length;
}

console.log(calculateArea(10,20));
console.log(calculateArea(30,40));

function stringSum(num1, num2, num3){
	const sum = num1+num2+num3;
	return sum.toString();
}

console.log(stringSum(1,2,3));
console.log(stringSum(1,2,6));


function compareStrings(string1, string2){
	console.log(string1+ " : "+string2);
	return string1===string2;
}

// console.log(compareStrings("Hello", "Hi"));
// console.log(compareStrings("Hello", "Hello"));
//console.log(compareStrings("Hello", "Hello", "Hello"));
//console.log(compareStrings("Hello"));



