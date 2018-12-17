console.log("Hello");

/*
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety","Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

for(let i=0; i<looneyTunesChars.length; i++)
	if(i%2===0)
		console.log(looneyTunesChars[i]);

for(i=0; i<looneyTunesChars.length; i++)
	if(i%2===0 || i===3)
		console.log(looneyTunesChars[i]);

for(i=0; i<looneyTunesChars.length; i++)
	if(i%2!==0)
		console.log(looneyTunesChars[i]);

*/

var shows = ["Friends", "HIMYM"];
shows.push("Game of Thrones");
for(let i=0; i<shows.length; i++)
	console.log(shows[i]);

var sortedShows = shows.sort();
for(let i=0; i<sortedShows.length; i++)
	console.log(sortedShows[i]);

sortedShows.push("Daredevil");
var reverseSorted = sortedShows.reverse();
for(let i=0; i<reverseSorted.length; i++)
	console.log(reverseSorted[i]);

reverseSorted.pop();
for(let i=0; i<reverseSorted.length; i++)
	console.log(reverseSorted[i]);

//  push and pop insert and remove to/from end of array; 
// shift and unshift insert and remove to/from beginning of array;


//slice makes a carbon copy of an array from a certain positions. Doesn't modify the original array
// splice adds, removes and edits the original array with elements.
