var viewScoreBtn = document.querySelectorAll("button")[0];
var startBtn = document.querySelectorAll("button")[1];
var quiz = JSON.parse(localStorage.getItem("questions"));
var timeLeft = quiz.length * 15;
console.log(timeLeft);
var countdown = document.createElement("div");
var question = document.createElement("div");
var multipleChoice;
var answer;
var i = 0;

function startQuiz() {
// for (i=0; i < quiz.length; i++) {
    var qObject = quiz[i];
    console.log(qObject.title);
    // quiz question
    question.textContent = qObject.title;
    // answer choices
    multipleChoice = qObject.choices;
    answer = qObject.answer;
    console.log(multipleChoice);
    let ansOptions;
    for(i=0; i< multipleChoice.length; i++) {
        ansOptions[i] = document.createElement("button");
        ansOptions[i].textContent = multipleChoice[i];
        question.append(ansOptions[i]);
    };
    document.body.append(question);
    ansOptions.addEventListener("click", function() {
        if (ansOptions.textContent == answer) {
            i++;
            startQuiz();
        }
    });
    
// }
}
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.append(countdown);
    var timeInterval = setInterval(function() {
        countdown.textContent = "Time: " + timeLeft;
        console.log("Time: " + timeLeft);
        timeLeft--;
        if (timeLeft === 0) {
          countdown.textContent = "Time: 0";
          console.log("Time's up!");
          clearInterval(timeInterval);
        } else {
            startQuiz();
        }
    }, 1000);
});