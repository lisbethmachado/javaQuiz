var body = document.body;

var h1El = document.createElement("h1");
h1El.textContent = "Welcome to javaQuiz!";
body.appendChild(h1El);
h1El.setAttribute("style", "width:100%; text-align:center;");

var h2El = document.createElement("h2");
h2El.textContent = "This is a timed quiz to guage your knowledge on Javascript. You will have 60 seconds to read each question and select the correct choice. When you are ready to begin, click on the 'Ready!' button to display the first question and start the timer. Good luck!";
body.appendChild(h2El);
h2El.setAttribute("style", "width:100%; text-align:center;");

var timeEl = document.querySelector(".time");
var goBtn = document.createElement("main");

goBtn.textContent = "Ready!"
body.appendChild(goBtn);
goBtn.setAttribute("style", "font-size:25px; text-align:center; font-weight:bold");

var correct = 0;
var wrong = 0;
var i = [0];

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {

    secondsLeft--;
    timeEl.textContent =  "Time: " + secondsLeft;
    if(secondsLeft === 0) {
 
      clearInterval(timerInterval);
      h1El.textContent = "Time's Up!"
      h2El.textContent = "Don't sweat it. You did great!"
    }

  }, 1000);
}

goBtn.addEventListener("click",function() {
  setTime();
  displayQuestion();
});

function displayQuestion() {
  h1El.textContent = question;
  h2El.textContent = "";
}

var question = [
{
title:"JavaScript is ______ Language.",
choices: ["Scripting", "Programming", "Application"],
answer: "alerts"
},
];

for (var i = 0; i < 5; i++);

var submitAnswer = function() {
    event.preventDefault();

    var radios = document.getElementsByName("choice");
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert("Please select choice answer");
    } else if ( val == "Scripting" ) {
        correct++;
      alert("You've got " + correct + " correct!");
    } else {
        wrong++;
      alert("You've got " + wrong + " wrong.");
    }
    
    alert("Total correct: " + correct + "\nTotal wrong: " + wrong);
    console.log(correct);
    console.log(wrong);
  };