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
