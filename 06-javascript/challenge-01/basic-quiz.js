var questions = [
    {
        q: "What is 5 + 3?",
        a: "8",
        opts: "6, 7, 8, 9"
    },
    {
        q: "What is the capital of France?",
        a: "Paris",
        opts: "London, Paris, Berlin, Madrid"
    },
    {
        q: "What color is the sky?",
        a: "Blue",
        opts: "Red, Green, Blue, Yellow"
    }
];

function runQuiz() {
    console.log("Quiz Game");
    console.log("---------");

    var score = 0;

    for (var i = 0; i < questions.length; i++) {
        var current = questions[i];

        console.log("Question " + (i + 1) + ": " + current.q);
        console.log("Options: " + current.opts);

        var answer = prompt("Question: " + current.q + "\nOptions: " + current.opts + "\nEnter your answer:");

        if (answer != null && answer.toLowerCase() == current.a.toLowerCase()) {
            console.log("Correct!");
            score = score + 1;
        } else {
            console.log("Wrong! The answer is " + current.a);
        }
        console.log("---");
    }

    var result = "You got " + score + " out of " + questions.length;
    console.log(result);
    alert(result);
}

runQuiz();
