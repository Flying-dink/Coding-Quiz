
var startBtn = document.querySelector("#start")





var questions = [

    { q: "Are Loops used in JavaScript?", a : true},
    { q: "Is JavaScript difficult to learn?", a: false},
    { q: "Can a sophistcated website be written in 10 minutes?", a: false},
    { q: "Are there many keyboard shortcuts?", a: true},
    { q: "Is coding fun?", a: true},

];


 function displayQuestions(){
    



//game starts with a score of 0.
var score = 0;
//Loop over every question object
for (var i = 0; i < questions.length; i++) {
    //show current question to user and ask ok /cancel
    var answer = confirm(questions[i].q);
    var trueAnswer = questions[i].a
    //compare answers
    if (answer && trueAnswer)
     
     {
        // Increase score
        score++;
        //Alert the user
        alert('Correct!');
    }   else{
        alert('Wrong!');
    }
}
//Show total score at the end
alert( 'You got'+ score + '/' + questions.length);
}

//Adding the Timer
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message = 
'Game Over!';
var words = message.split(' ');
function endGame(){
    var submitScore = document.querySelector(".submit-score")
    var container = document.querySelector(".container")
    submitScore.style.display="block"
    container.style.display="none"
    console.log("abc")
    //Event will be triggered when game is over
    // show a submit score screen div in html
}


//Timer that counts down from 5
function countdown() {
   var timeLeft = 5;

   //use the 'setInterval()' to call a function to be executed every 1000 milliseconds
   var timeInterval = setInterval(function() {

    console.log(timeLeft)
       //As long as the 'timeleft' is greater than 1
       if (timeLeft > 1) {
           //Set the 'textContent' of the 'timerEl' to show the remaining seconds
           timerEl.textContent = timeLeft + 'seconds remaining';
           //Decrement 'timeleft' by 1
           timeLeft--;

       }else if (timeLeft ===1) {
           //When time left is equal to 1, rename to 'second' instead of seconds
           timerEl.textContent = timeLeft + 'second remaining';
           timeLeft--;
       } else {
           //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
           timerEl.textContent = '';
           //Use 'clearInterval()' to stop the timer
           clearInterval(timeInterval);
           //Call the 'displayMessage() function
           displayMessage();
       }

   }, 1000);
}
// //Displays the message one word at a time
// function displayMessage() {
//     var wordCount = 0;
//     // Uses the 'setInterval()' method to call a function to be executed every 300 milliseconds
//     var msgInterval = setInterval(function() {
//         if (words[wordcount] === undefined) {
//           clearInterval(msgInterval);
//         } else {
//             mainEl.textContent = words[wordCount];
//             wordcount++;
//         }
//     }, 300);
// }
// startBtn.onclick = countdown;


// Adding the addEventListener

//Creates Variable to hold the count

var count = 5;

//Use the querySelector to select the elements by their ids
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');

//Displays current count on the page
function setCounterText() {
    countEl.textContent = count;
};
//Decrements the count on click and calls setCounterText()
startBtn.addEventListener('click', function() {
    var timeLeft = 5;

    //use the 'setInterval()' to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
 
     console.log(timeLeft)
        //As long as the 'timeleft' is greater than 1
        if (timeLeft > 1) {
            //Set the 'textContent' of the 'timerEl' to show the remaining seconds
            timerEl.textContent = timeLeft + 'seconds remaining';
            //Decrement 'timeleft' by 1
            timeLeft--;
 
        }else if (timeLeft ===1) {
            //When time left is equal to 1, rename to 'second' instead of seconds
            timerEl.textContent = timeLeft + 'second remaining';
            timeLeft--;
        } else {
            //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
            timerEl.textContent = '';
            //Use 'clearInterval()' to stop the timer
            clearInterval(timeInterval);
            //Call the 'displayMessage() function
            endGame()
        }
 
    }, 1000);




displayQuestions()  
    
});

//use local storage to store score and initials
var score = 0;
var highscore = 0;
localStorage.setItem("highscore",0);

if (score > parseInt(localStorage.getItem("highscore"))) {
    localStorage.setItem("hightscore,score");
}


