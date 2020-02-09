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
            // clear time
            clearInterval(timeInterval);
            // clear quiz display
            quizArea.empty();
            setTimeout(countdown.text("Time's up!"), 1000);
            const goBack = $("<button>");
            goBack.attr("class", "btn btn-light");
            goBack.attr("onclick", "location.href='./index.html';");
            goBack.text("Go Back");
            quizArea.append(goBack);
        } else if(index == 5) {
            // user finishes quiz & score recorded
            countdown.text(`Time: ${timeScore}`);
            clearInterval(timeInterval);
            quizArea.empty();
            const scoreBoard = JSON.parse(localStorage.getItem("score"));

            let newScore = {
                name: "",
                score: timeScore
            };
            scoreBoard.push(newScore);
            localStorage.setItem("score", JSON.stringify(scoreBoard));
            // user directed to score submit page
            setTimeout(location.href = "./userScore.html", 500);
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
            ansBtn.attr("class", "btn button-color ans");
            ansBtn.text(question.choices[i]);
            ansBox.append(ansBtn);
        }
        // sets answer of the current quiz question
        let answer = question.answers;
        // click event listener that check user's answer choice
        $(".ans").on("click", function(event) {
            event.preventDefault();
            timeScore = timeLeft;
            if($(this).attr("id") === answer) {
                feedback.text("Correct!");
            } else {
                feedback.text("Wrong!");
                timeLeft = timeLeft - 5;
            }
            setTimeout(() => {
                feedback.text("")}, 700);
            index++;
            // checks if there are more questions
            if(index < quiz.length) {
                answer = "";
                displayQ(index);
            } 
            else {
                return timeScore;
            }
        });
    }
});