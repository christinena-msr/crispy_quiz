var questionArr = [
    { // question 1
        title: "questionText",
        choices: ["ans1, ans2, ans3, ans4"],
        answers: "ans3"
    },
    { // question 2
        title: "question2Text",
        choices: ["ans1", "ans2", "ans3", "ans4"],
        answers: "ans4"
    },
    {
        title: "questions3Text",
        choices: ["ans1", "ans2", "ans3", "ans4"],
        answers: "ans1"
    },
    {
        title: "questions4Text",
        choices: ["ans1", "ans2", "ans3", "ans4"],
        answers: "ans1"
    },
    {
        title: "questions5Text",
        choices: ["ans1", "ans2", "ans3", "ans4"],
        answers: "ans1"
    },
];

localStorage.setItem("questions", JSON.stringify(questionArr));

console.log(questionArr);