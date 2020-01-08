var viewScoreBtn = document.querySelectorAll("button")[0];
var startBtn = document.querySelectorAll("button")[1];
var quiz = JSON.parse(localStorage.getItem("questions"));
var timeLeft = quiz.length * 15;
console.log(timeLeft);
var countdown = document.createElement("div");
var question = document.createElement("div");
var answer;

// function startQuiz() {
// // for (i=0; i < quiz.length; i++) {
//     var qObject = quiz[0];
//     console.log(qObject.title);
//     // quiz question
//     question.textContent = qObject.title;
//     // answer choices
//     var multipleChoice = parse(qObject.choices);
//     console.log(multipleChoice[0]);
//     // for(i=0; i< multipleChoice.length; i++) {
//     //     var ansOptions = document.createElement("button");
//     //     console.log(multipleChoice[i]);
//     //     ansOptions.textContent = multipleChoice[i];
//     //     question.appendChild(choices);
//     // }
//     document.body.append(question);
    
// // }
// }
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