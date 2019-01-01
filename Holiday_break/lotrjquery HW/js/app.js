console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  let $sectionTag = $('<section></section>');
  $sectionTag.attr("id","middle-earth");
  //console.log($sectionTag);

  // 2. append the section to the body of the DOM.
  let $body = $("body");
  $body.append($sectionTag);



  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

  for(let i=0; i<lands.length; i++){
    let $articleTag = $("<article></article>");
    $articleTag.attr("id",lands[i]);
    let $h1Tag  = $("<h1></h1>");
    $h1Tag.html(lands[i]);
    $articleTag.append($h1Tag);
    $sectionTag.append($articleTag);
  }

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id


  let $shireTag = $("#The-Shire");
  //console.log($shireTag);
  let $ulTag = $("<ul/>");
  for(let i = 0; i<hobbits.length; i++){
    let $liItem  = $("<li/>");
    $liItem.html(hobbits[i]);
    $liItem.addClass("hobbit");
    $ulTag.append($liItem);
    //console.log($ulTag);
  }

  $shireTag.append($ulTag);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  let $divTag = $("<div/>");
  $divTag.attr("id","the-ring");


  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

  $(".hobbit").eq(0).append($divTag);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor
  
  let $shireTag = $("#Mordor");
  //console.log($shireTag);
  let $ulTag = $("<ul/>");
  for(let i = 0; i<baddies.length; i++){
    let $liItem  = $("<li/>");
    $liItem.html(baddies[i]);
    $liItem.addClass("baddy");
    $ulTag.append($liItem);
    //console.log($ulTag);
  }

  $shireTag.append($ulTag);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  const $asideTag = $("<aside/>");
  const $sectionTag = $("section");
  const $h1Tag = $("<h1> Buddies </h1>");
  $h1Tag.attr("id","buds");
  $sectionTag.append($asideTag);

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"


  //console.log($shireTag);
  let $ulTag = $("<ul/>");
  for(let i = 0; i<buddies.length; i++){
    let $liItem  = $("<li/>");
    $liItem.html(buddies[i]);
    $liItem.addClass("buddy");
    $ulTag.append($liItem);
    //console.log($ulTag);
  }

  $asideTag.append($h1Tag);
  $asideTag.append($ulTag);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

  let $hobbits = $("#The-Shire").children().eq(1);
  let $rivendell = $("#Rivendell");
  $rivendell.append($hobbits);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'

  $aragorn  = $("aside").eq(0).children().eq(1).children().eq(3).html("Aragorn");
  console.log($aragorn);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  $buddyHeader = $("#buds");
  $buddyHeader.remove();

  // 1. create a new div with an id 'the-fellowship'
  const $fellowshipDivision = $("<div/>");
  $fellowshipDivision.attr("id","the-fellowship");

  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $h1 = $("<h1> The Fellowship </h1>");
  $fellowshipDivision.append($h1);

  // 3. append the fellowship to middle-earth
  const $middleEarth = $("section");
  $middleEarth.append($fellowshipDivision);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
    const $hobbits = $("#Rivendell").eq(0).children().eq(1);
    $fellowshipDivision.append($hobbits);
    //console.log($hobbits);
    const $buddies = $("aside").eq(0).children().eq(0);//.eq(1);
    console.log($buddies);
    $fellowshipDivision.append($buddies);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  const $fellowshipTag  = $("#the-fellowship").children().eq(2).children().eq(0).html("Gandalf the White");
  console.log($fellowshipTag); 

  // 2. add a class "the-white" to this element
  $fellowshipTag.addClass("the-white");

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("Pew Pew.... The horn of Gondor has been blown!!!");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $boromir  = $("#the-fellowship").children().eq(2).children().eq(4);
  $boromir.css("text-decoration", "line-through");

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

  const $urukHai = $("#Mordor").eq(0).children().eq(1).children().eq(2).remove();
  console.log($urukHai);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $frodo = $(".hobbit").eq(0);
  const $sam = $(".hobbit").eq(1);
  console.log($frodo);
  const $mordor = $("#Mordor");
  $mordor.append($frodo);
  $mordor.append($sam);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $div = $("<div/>");
  $div.attr("id","mount-doom");
  $mordor.append($div);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollum = $("<div/>");
  $gollum.attr("id","gollum");

  const $mordor = $("#Mordor");
  $mordor.append($gollum);



  // 2. Move the ring from Frodo and give it to Gollum
  const $ring = $(".hobbit").eq(0).children().eq(0);
  console.log($ring);
  $gollum.append($ring); 

  // 3. Move Gollum into Mount Doom
  $mountDoom = $("#mount-doom");
  $mountDoom.append($gollum);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $gollum = $("#gollum");
  $gollum.remove();

  // 2. remove all the baddies from the DOM
  $badGuys = $(".baddy").parent().eq(0);
  $badGuys.remove();

  // 3. Move all the hobbits back to the shire
  $hobbits = $(".hobbit");
  console.log($hobbits);
  $shire = $("#The-Shire");
  $shire.append($hobbits);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
