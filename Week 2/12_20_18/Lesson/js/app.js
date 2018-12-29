console.log("connected!!!!!!1");

const liElement = document.createElement('li');
liElement.innerText = "lab";

$("li")[0].before(liElement);


const liElementOne = document.createElement('li');;
liElementOne.innerText = "shepard";
$("li")[2].after(liElementOne);


$("li")[2].remove();


$(".dogs").prepend("<h1>My Favorite Dogs</h1>");



const randomRGB = function () {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`
}
$('#container').css('background-color', randomRGB());