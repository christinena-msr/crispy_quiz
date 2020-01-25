// pull questions from questions.js stored in local storage
var quiz = JSON.parse(localStorage.getItem("questions"));
console.log(quiz[0].title);
var timeLeft = quiz.length * 15;
// should be 75
console.log(timeLeft);
// div for countdown visual
var countdown = document.querySelectorAll(".time")[0];
// countdown
var timeInterval = setInterval(function() {
    countdown.textContent = "Time: " + timeLeft;
    console.log("Time: " + timeLeft);
    timeLeft--;
    if (timeLeft === 0) {
        countdown.textContent = "Time: 0";
        countdown.textContent = "Time's up!";
        console.log("Time's up!");
        clearInterval(timeInterval);
    } 
}, 1000);
// div for questions to populate
var question = document.querySelectorAll(".quiz")[0];

// function quizQuestion() {

// }
// grab question object
var qObject = quiz[0];
console.log(qObject.title);
// display question
question.textContent = qObject.title;
// push answers to array
var multipleChoice = qObject.choices;
console.log(multipleChoice);
var answer = qObject.answers;
console.log(answer);
// for (let i=0; i<multipleChoice.length; i++) {
//     var ansOption = document.createElement("button");
//     ansOption.textContent = multipleChoice[i];
//     ansOption.setAttribute("class", "answer-button")
//     question.appendChild(ansOption);
// }

var ansBtn = document.querySelectorAll(".answer-button");
console.log(ansBtn);
for (let i=0; i<ansBtn.length; i++) {
    ansBtn[i].textContent = multipleChoice[i];
    console.log(multipleChoice[i]);
    ansBtn[i].addEventListener("click", function(event) {
        event.preventDefault();
        var feedback = document.getElementById("solution");
        if (ansBtn[i].textContent == answer) {
            feedback.textContent = "correct!";
        } else {
            feedback.textContent = "wrong";
        }
    })
}