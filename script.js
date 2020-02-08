$(document).ready(function() {

    // pull questions from questions.js stored in local storage
    const quiz = JSON.parse(localStorage.getItem("questions"));

    // sets timer value
    let timeLeft = quiz.length * 15;
    // grabs id of html for quiz & answers display
    const quizArea = $("#quiz-area");
    const ansBox = $("#ans-box");
    const feedback = $("#solution");
    // div for countdown visual
    const countdown = $("#time");

    let index = 0;
    // user score variable
    let timeScore = timeLeft;

    // countdown
    let timeInterval = setInterval(function() {
        countdown.text("Time: " + timeLeft);
        // timer run down
        timeLeft--;
        if (timeLeft === 0) {
            // user is out of time & stops quiz
            countdown.text("Time: 0");
            clearInterval(timeInterval);
            quizArea.empty();
            setTimeout(countdown.text("Time's up!"), 1000);
        } else if(index == 5) {
            // user finishes quiz & score recorded
            countdown.text(`Time: ${timeScore}`);
            clearInterval(timeInterval);
            quizArea.empty();
            localStorage.setItem("score", timeScore);
            // user directed to score submit page
            setTimeout(location.href = "./userScore.html", 1000);
        } 
    }, 1000);

    // start the quiz
    setTimeout(displayQ, 1000);

    // function to iterate through the quiz questions
    function displayQ() {
        // clears div that contains answers for questions
        ansBox.empty();
        // grabs question object from quiz object
        const question = quiz[index];
        $(".quiz").text(question.title);
        for(let i=0; i<question.choices.length; i++) {
            let ansBtn = $("<button>");
            ansBtn.attr("id", `ans${i}`);
            ansBtn.text(question.choices[i]);
            ansBox.append(ansBtn);
        }
        let answer = question.answers;
        $("button").on("click", function(event) {
            event.preventDefault();
            timeScore = timeLeft;
            if($(this).attr("id") === answer) {
                feedback.text("correct!");
            } else {
                feedback.text("wrong!");
                timeLeft = timeLeft - 5;
            }
            index++;
            if(index < 5) {
                answer = "";
                displayQ(index);
            } 
            else {
                return timeScore;
            }
        });
    }
});