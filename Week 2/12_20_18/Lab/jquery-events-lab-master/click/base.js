console.log("Sanity Check: JS is working!");

// write your jQuery code here:
let previous, current, diff;
let begin = false;
for(let i=0;i<7;i++){
	$("span").eq(i).click(function(event){
	if(!begin){
		previous = event.timeStamp;
		begin = true;
	}
	const text = $("span").eq(i).text();
	current = event.timeStamp;
	diff = current - previous;
	let li = "<li>"+text+" Timestamp: "+diff+"</li>";
	$("ul").append(li);
	previous = current;
});
}

