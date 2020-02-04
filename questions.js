var questionArr = [
    { // question 1
        title: "An if/else statement returns a ____ type.",
        choices: ["integer", "string", "boolean", "char"],
        answers: "ans2"
    },
    { // question 2
        title: "String concatenation uses ____ operator.",
        choices: ["multiply", "divide", "minus", "plus"],
        answers: "ans3"
    },
    { // question 3
        title: "What is the vanilla javascript function to GET an API response?",
        choices: ["fetch()", "get()", "grab()", "ajax()"],
        answers: "ans0"
    },
    { // question 4
        title: "A for loop is a(n) ____ process",
        choices: ["recursive", "iterative", "infinite", "dynamic"],
        answers: "ans1"
    },
    { // question 5
        title: "Bootstrap is for ______ ",
        choices: ["HTML", "Javascript", "CSS", "APIs"],
        answers: "ans2"
    },
];

localStorage.setItem("questions", JSON.stringify(questionArr));

console.log(questionArr);