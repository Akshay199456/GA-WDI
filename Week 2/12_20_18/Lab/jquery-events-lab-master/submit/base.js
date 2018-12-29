console.log("Sanity Check: JS is working!");

$("#time").text( Date.now() );


//console.log($("form").eq(1));
// $("form").click(function(event){
// 	event.preventDefault();
// })



console.log($("form").eq(1));
$("form").click(function(event){
	event.preventDefault();
	$("body").append("<p> https://www.youtube.com/embed/dQw4w9WgXcQ </p>");	
})

