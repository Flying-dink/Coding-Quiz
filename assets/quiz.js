var startBtn = document.querySelector("#start")
var questionHolder= document.querySelector("#main")
var score;
var timeLeft;

var questions = [                                                                                                                                                                      
  { q: "Are Loops used in JavaScript?", a : 'True', options: ['True', 'False']},
  { q: "Is JavaScript difficult to learn?", a: 'False', options: ['True', 'False']},
  { q: "Can a sophistcated website be written in 10 minutes?", a: 'False', options: ['True', 'False']},
  { q: "Are there many keyboard shortcuts?", a: 'True', options: ['True', 'False']},
  { q: "Is coding fun?", a: 'True', options: ['True', 'False']}
];


function displayQuestions(){
$('#startArea').hide();
 score = 0;
 var current = 0;
 renderQuestion(current);

$(document).on('click', '.option',function(){
    var optionSelected = $(this).text();
    if(optionSelected === questions[current].a){
        score++
        $('#feedback').text('You got it right!')
    }else{
        timeLeft -= 5;
        $('#feedback').text('You got it wrong!')
    }
    if(current < questions.length -1){
        current++;
        setTimeout(function(){
        renderQuestion(current);
        },2000)
   
    }else{
        setTimeout(function(){
        endGame();
        },2000)
    }
})

}

function renderQuestion(current){
    $('#answers').empty();
    $('#feedback').empty();
    questionHolder.innerText = '';
    questionHolder.innerText=questions[current].q;
    questions[current].options.forEach(function(option){
        var answer = $('<button>').addClass('option')
        answer.text(option);
            $('#answers').append(answer);
    })
}

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message = 'Game Over!';
var words = message.split(' ');

function endGame(){
    var submitScore = document.querySelector(".submit-score")
    var container = document.querySelector(".container")
    $('#endScore').text(score)
    submitScore.style.display="block"
    container.style.display="none"

    var lsScores = JSON.parse(localStorage.getItem('scores'));
    if(lsScores != null){
        var key = Object.keys(lsScores)[0];
        if(lsScores[key] < score){
            $('#save-high-score').show()
        }
    }else{
        $('#save-high-score').show()
    }

    $(document).on('click','#submit-button', function(){
        var initials = $('#initals').val();
        if(initials != ''){

            var highscore = {[initials]: score} 
            var highscoreString =JSON.stringify(highscore);
            localStorage.setItem('scores', highscoreString);
        }else{
            //handle initials where left empty
        }

    })
   
      
    
}



//Use the querySelector to select the elements by their ids
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
//save score in addevent listener
//Decrements the count on click and calls setCounterText()
startBtn.addEventListener('click', function() {
    timeLeft = 60;

    //use the 'setInterval()' to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        //As long as the 'timeleft' is greater than 1
        if (timeLeft > 1) {
            //Set the 'textContent' of the 'timerEl' to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            //Decrement 'timeleft' by 1
            timeLeft--;
 
        }else if (timeLeft ===1) {
            //When time left is equal to 1, rename to 'second' instead of seconds
            timerEl.textContent = timeLeft + ' second remaining !';
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






