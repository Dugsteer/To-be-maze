// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const mainpic = document.getElementById("mainpic");
const blue = window.matchMedia("(max-width: 800px)");


//switch introduction pic
const dot = document.getElementById("dot");
const gaming = new Audio("sounds/gaming.ogg");
var isPlaying = false;


function addDot(){
  dot.classList.toggle('dotter');
  isPlaying ? gaming.pause() : gaming.play();
}

gaming.onplaying = function() {
  isPlaying = true;
};
gaming.onpause = function() {
  isPlaying = false;
};

gaming.addEventListener('ended', function() {
  gaming.currentTime = 0;
  gaming.play();
}, false);

// function switchpic() {
//   switch (mainpic.innerHTML) {
//     case '<img src="img/fashion/fashion1.png" alt="decorative">':
//       mainpic.innerHTML =
//         '<img src="img/fashion/fashion2.png" alt="decorative">';
//       break;
//     case '<img src="img/fashion/fashion2.png" alt="decorative">':
//       mainpic.innerHTML =
//         '<img src="img/fashion/fashion3.png" alt="decorative">';
//       break;
//     case '<img src="img/fashion/fashion3.png" alt="decorative">':
//       mainpic.innerHTML =
//         '<img src="img/fashion/fashion4.png" alt="decorative">';
//       break;
//     case '<img src="img/fashion/fashion4.png" alt="decorative">':
//       mainpic.innerHTML =
//         '<img src="img/fashion/fashion5.png" alt="decorative">';
//       break;
//     default:
//       mainpic.innerHTML =
//         '<img src="img/fashion/fashion1.png" alt="decorative">';
//   }
// }
// setInterval(switchpic, 2000);




// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//Main Action

const image = document.getElementById("image");
const topText = document.getElementById("topText");
const leftText = document.getElementById("left-text");
const rightText = document.getElementById("right-text");
const wronganswer = document.getElementById("wronganswer");
const good = document.getElementById("good");
// const firstPage = document.getElementById("first-page");
const logOut = document.getElementById("logout");
const imgContainer = document.getElementById('img-container');
const after = document.getElementById('after');


// Counter for index of arrays
let place = 0;
let c;
let d;

// Arrays for top text and text on left and right
const topTextArray = [
  "Her name is Penelope.",
  "She likes diving.",
  "She goes to Egypt.",
  "She lives in Barcelona.",
  "She can speak five languages.",
  "She's twenty years old.",
  "Her hobby is reading.",
  "She has a puppy called Pugsy.",
  "She loves her red car.",
  "She's good at chess.",
  "She's a doctor.",
  "She goes mountain biking.",
  "He goes mountain biking."
];

const leftTextArray = [
  "How her name is?",
  false,
  "What likes she?",
  false,
  "Where she go on holiday?",
  false,
  "Where does she live?",
  true,
  "What languages can she speak?",
  true,
  "How old is she?",
  true,
  "What is her hobby?",
  true,
  "Have she got a pet?",
  false,
  "Does she like her red car?",
  true,
  "She is good at table games?",
  false,
  "What do is she?",
  false,
  "What does she does at the weekend?",
  false,
  "",
];

const rightTextArray = [
  "What is her name?",
  true,
  "What does she like?",
  true,
  "Where does she go on holiday?",
  true,
  "Where lives she?",
  false,
  "What languages know to speak?",
  false,
  "What old is she?",
  false,
  "What hobby she is?",
  false,
  "Has she got a pet?",
  true,
  "She likes her red car?",
  false,
  "Is she good at table games?",
  true,
  "What does she do?",
  true,
  "What does she do at the weekend?",
  true,
  "You DID IT!",
];

// Remove the landing page and/or return user to the start


function restarter(){
  window.location.reload();
}

function begin() {
  place = -2;
  nextOne();
  after.classList.remove('blue');
  topText.style.visibility = "hidden";
  logOut.style.visibility = "hidden";
//   firstPage.style.display = "none";
//   game.style.display = "flex";
  wronganswer.style.display = "none";

}



// Move on to the next 'slide'.

function nextOne() {
  place = place + 2;
  console.log(place);
  d = place;
  if (place > leftTextArray.length - 2){
    leftText.innerHTML = "";
    rightText.innerHTML = "";
    good.style.display = "flex";
    wronganswer.style.display = "none";
    after.classList.remove('blue');
    setTimeout(restarter, 3000);

  } else {
    
    
  topText.innerText = topTextArray[d / 2];
  
 
   {
    leftText.innerText = leftTextArray[place];
    rightText.innerText = rightTextArray[place];
    image.src = `img/maze-peppa/slide${d / 2}.jpg`;
  }
}
}

// Check to see if the correct answer has been chosen


function checkForMistakesOnLeft(clickedElement) {
  // Check to see if game is on last page
  if (topText.innerText === "He can swim") {
    leftText.innerHTML = "";
    rightText.innerHTML = "";
    good.style.display = "flex";
    wronganswer.style.display = "flex";
        setTimeout(restarter, 3000);
  } else {
   
    // Get innerText of clicked element and see if next item in its array is T or F
    let a = clickedElement.innerText;
    let b = leftTextArray.indexOf(a);
    c = leftTextArray[b + 1];
 

    // Restart game if answer is F
    if (c === false) {
      wronganswer.style.display = "flex";
    } else {
      //Move on to next slide if answer is T
      after.classList.add('blue');
      topText.style.visibility = "visible";
      logOut.style.visibility = "visible";
      // game.style.display = "flex";
      wronganswer.style.display = "none";
            nextOne();
    }
  }
}

// Comments same as above
// function checkForMistakesOnRight(clickedElement) {
//   if (topText.innerText === "He can swim") {
//     leftText.innerHTML = "";
//     rightText.innerHTML = "";
//     good.style.display = "flex";
//     wronganswer.hidden = true;
//   } else {
//     let a = clickedElement.innerText;
//     let b = rightTextArray.indexOf(a);
//     c = rightTextArray[b + 1];

//     if (c === false) {
//       wronganswer.hidden = false;
//     } else {
//       after.classList.add('blue');
//       topText.style.visibility = "visible";
//       logOut.style.visibility = "visible";
//     }
//   }
// }
function checkForMistakesOnRight(clickedElement) {
  if (topText.innerText === "He can swim") {
    leftText.innerHTML = "";
    rightText.innerHTML = "";
    good.style.display = "flex";
    wronganswer.style.display = "none";
        setTimeout(restarter, 3000);
  } else {
    let a = clickedElement.innerText;
    let b = rightTextArray.indexOf(a);
    c = rightTextArray[b + 1];

    if (c === false) {
      wronganswer.hidden = false;
    } else {
      after.classList.add('blue');
      topText.style.visibility = "visible";
      logOut.style.visibility = "visible";
    }
  }
}
function checkForMistakesOnLeft(clickedElement) {
  if (topText.innerText === "He can swim") {
    leftText.innerHTML = "";
    rightText.innerHTML = "";
    good.style.display = "flex";
    wronganswer.style.display = "none";
        setTimeout(restarter, 2000);
  } else {
    let a = clickedElement.innerText;
    let b = leftTextArray.indexOf(a);
    c = leftTextArray[b + 1];

    if (c === false) {
      wronganswer.style.display = "flex";
        } else {
      after.classList.add('blue');
      topText.style.visibility = "visible";
      logOut.style.visibility = "visible";
    }
  }
}

function carryOn() {
  after.classList.remove('blue');
  topText.style.visibility = "hidden";
  logOut.style.visibility = "hidden";
  nextOne();
}

logOut.addEventListener("click", carryOn);
mainpic.addEventListener('click', addDot);

begin();
