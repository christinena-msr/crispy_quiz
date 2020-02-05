$(document).ready(function() {

    // pull questions from questions.js stored in local storage
    var quiz = JSON.parse(localStorage.getItem("questions"));
    console.log(quiz[0].title);
    var timeLeft = quiz.length * 15;
    // should be 75
    console.log(timeLeft);
    var quizArea = $("#quiz-area");
    // div for countdown visual
    var countdown = $("#time");
    var index = 0;

    var userScore = $(".score");
    // countdown
    var timeInterval = setInterval(function() {
        countdown.text("Time: " + timeLeft);
        // console.log("Time: " + timeLeft);
        timeLeft--;
        if (timeLeft === 0 || index == 5) {
            countdown.text("Time: 0");
            countdown.text("Time's up!");
            console.log("Time's up!");
            clearInterval(timeInterval);
            quizArea.empty();
            console.log("Here is the time left: " + timeLeft);
            var score = {
                name: "",
                value: timeLeft};
            localStorage.setItem("score", JSON.stringify(score));
        } 
    }, 1000);

    // index = 0;
    displayQ();

    userScore.on("submit", function() {
        var name = userScore.val();

    });
    function displayQ() {
        console.log(index);
        var question = quiz[index];
        console.log(question.title);
        $(".quiz").text(question.title);
        console.log("this is question:" + $(".quiz").text());
        for(let i=0; i<question.choices.length; i++) {
            $(`#ans${i}`).text(question.choices[i]);
        }
        var answer = question.answers;
        console.log(answer);
        $("button").on("click", function(event) {
            event.preventDefault();
            console.log("this.id: " + $(this).attr("id"));
            if($(this).attr("id") === answer) {
                $("#solution").text("Correct!");
            } else {
                $("#solution").text("Wrong!");
                // timeLeft = timeLeft - 5;
            }
            index++;
            if(index < 5) {
                answer = "";
                displayQ(index);
            } else {
                location.href="./userScore.html";
            }
        });
    }
});