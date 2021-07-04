var questions = [
    { q: "Are Loops used in JavaScript?", a : "y"},
    { q: "Is JavaScript difficult to learn?", a: "y"},
    { q: "Can a sophistcated website be written in 10 minutes?", a: "n"},
    { q: "Are there many keyboard shortcuts?", a: "y"},
    { q: "Is coding fun?", a: "y"},

];

//game starts with a score of 0.
var score = 0;
//Loop over every question object
for (var i = 0; i < questions.length; i++) {
    //show current question to user and ask ok /cancel
    var answer = confirm(questions[i].q);

    //compare answers
    if (
     (answer === true && questions [i].answer ==="y") ||
     (answer === false && questions [i].answer ==="n")
    ) {
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
decrementEl.addEventListener('click', function() {
    if (count > 5) {
        count--;
        setCounterText();
    }
});

