//console.log("Connected");

//1
/*
for(let i=50;i >=20; i--)
	if(i%3===0)
		console.log(i);
*/


//2
/*
 for(let i=50; i<100; i--)
 console.log("Infinite loop");
*/


//3
/*
const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];
for(let i=1;i<presidents.length; i++)
	console.log(presidents[i]);
*/

//4
/*
const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const glutenFreeItems = [];
for(let i=0; i<menu.length;i++)
{
	let menuName = menu[i].name;
	let menuGlutenFree = menu[i].glutenFree;
	if(menuGlutenFree === true)
		glutenFreeItems.push(menuName);
}

for(let i=0; i<glutenFreeItems.length; i++)
	console.log(glutenFreeItems[i]);
*/

//5
/*
const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]
const notNumberArray = [];

for(let i=0; i<mixedArray.length; i++)
{
	if(typeof(mixedArray[i])!=="number")
		notNumberArray.push(mixedArray[i]);
}

for(let i=0; i<notNumberArray.length; i++)
	console.log(notNumberArray[i]);
*/


//Bonus Question
const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]
const newLeague = [];
for(let i=0; i<league.length; i++)
{
	let leagueName = league[i].name;
	let leagueNameObject = {};
	leagueNameObject.name = leagueName; 
	leagueNameObject.players = [];
	let playerArray = [];

	for(let j=0; j<league[i].players.length; j++)
	{
		let playerObject = {};
		let playerName = (league[i].players)[j].name;
		let playerGoat = (league[i].players)[j].goat;
		if(playerGoat === true)
		{
			playerObject.name = playerName;
			playerArray.push(playerObject);
		}
	}
	leagueNameObject.players = playerArray;
	newLeague.push(leagueNameObject);
}

for(let i=0; i<newLeague.length; i++)
	for(let j=0; j<newLeague[i].players.length; j++)
		console.log(newLeague[i].name + " " + (newLeague[i].players)[j].name);