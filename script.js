// high scores button
var viewScoreBtn = document.getElementById("score");
// start quiz button
var startBtn = document.getElementById("quiz");
// pull questions from questions.js stored in local storage
var quiz = JSON.parse(localStorage.getItem("questions"));
console.log(quiz[0].title);
var timeLeft = quiz.length * 15;
// should be 75
console.log(timeLeft);
// div for countdown visual
var countdown = document.createElement("div");
// div for questions to populate
var question = document.createElement("div");
var multipleChoice = [];
var answer = "";
var i = 0;

var qObject = quiz[0];
console.log(qObject.title);
question.textContent = qObject.title;
for (let i=0; i<4; i++) {
    //push to new array
    multipleChoice.push(qObject.choices[i]);    
}
console.log(multipleChoice);
var answer = qObject.answers;
for (let i=0; i<multipleChoice.length; i++) {
    var ansOption = document.createElement("button");
    ansOption.textContent = multipleChoice[i];
    ansOption.setAttribute("class", "answer-button")
}

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
        } //else {
        //     startQuiz();
        // }
    }, 1000);
    startQuiz();
});