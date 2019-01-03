console.log("connected");

// $("#submit-btn").on("click", () =>{
// 	console.log("clicked");
// 	// grab the element, then find its value

// 	// const value = $("#input-box").val();
// 	// console.log(value);

// 	alert("Your favorite TV show is: " + $("#input-box").val());
// });


$("form").on("submit", (e) =>{
	e.preventDefault();
	const value = $("input[name='movie']").val();
	console.log(value);

	const $li = $("<li/>");
	$li.text("Hi, your favorite movie is " + value);


	// Velocity UI
	$li.velocity("transition.flipXIn", {
		duration: 2000,
		complete: function(element){
			console.log(element, "animation is finished");
		}
	});


	$("#answers").append($li);
	$("input[name='movie']").val('');
});



// -------------------

// Using velocity

//if jQuery
//$element.velocity({cssProperty: value}, duration ms)

$("div").velocity({width: "100px"}, 3000);
$("img").velocity({
	perspective: [0,50],
	rotateX: 360,
	translateX: 60,
	opacity: [1, 0.55],
	height: "+=350",
	width: "+=350"},{
		duration: 3000,
		loop:4,
		delay: 20
	}
);


//if vanillaJs
// Velocity(document.querySelector("div"), {opacity:0.5}, {duration: 3000});