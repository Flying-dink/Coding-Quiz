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