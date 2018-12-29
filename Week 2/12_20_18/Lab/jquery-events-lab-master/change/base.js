console.log("Sanity Check: JS is working!");


$("#time").text( Date.now() );


//console.log($("#left"));

let inputOne = 0;
let inputTwo = 0;

$("#left").keyup(function() {
    let value = $( this ).val();
   	//console.log(value);
   	inputOne = value;
   	let total = Number(inputOne) + Number(inputTwo);
   	$("#total").val(total);
  });

$("#right").keyup(function() {
    let value = $( this ).val();
   	//console.log(value);
   	inputTwo = value;
   	let total = Number(inputOne) + Number(inputTwo);
   	$("#total").val(total);
  });

$("button").click(function(){
    inputOne = 0;
    inputTwo = 0;
    $("#left").val(inputOne);
    $("#right").val(inputTwo);
    $("#total").val(0);
})
