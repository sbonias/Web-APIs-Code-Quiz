//Declare Variables
//Related to the following function: setTime
var introDiv = document.querySelector("#intro");
var timeElement = document.querySelector("#countdown");
var startQuizBtn = document.querySelector("#start-quiz")
var currentScore = document.querySelector("#current-score");
var initialQuestion = document.querySelector(".primary-question");
var secondsLeft = 60;
var score = 0;
//Related to the following function: questionDisplay
var mainQuestion = document.querySelector("#questions");
var answerOptions = document.querySelector("#answers");
var questionNumber = -1;
var answer;
//Declare Variable-object that contains questions, choices and right answer
var questions = [
    {
        question: "A loop that never ends is referred to as which type of loop?",
        options: ["While Loop", "Infinite Loop", "Recursive Loop", "For Loop"],
        answer: "Infinite Loop",
    },
    {
        question: "Commonly used data type DO NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        question: "Inside which HTML element do we place JavaScript code?",
        options: ["scripting", "javascript", "js", "script"],
        answer: "script",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The head", "The body", "Both the head and the body sections are correct"],
        answer: "The body",
    },
    {
        question: "What's the syntax for creating a function in JS?",
        options: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
        answer: "function myFunction()",
    },
];

//Primary event listener
startQuizBtn.addEventListener("click", startTimer);

//Function
function startTimer() {
    //have the #intro <div> disappear 
    document.getElementById("intro").classList.add("d-none");
    //have the #questions <div> appear
    document.getElementById("quiz").classList.remove("d-none");

    setTime();
    questionDisplay();
}

//Function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft);
        timeElement.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //will need to indicate what needs to be done once the timer reaches 0 which is display results
            //window.location.href = "TBD";
        }
    }, 1000);
}

//Create a Display Question(s) Function
function questionDisplay() {
    questionNumber++;
    answer = questions[questionNumber].answer

    mainQuestion.textContent = questions[questionNumber].question;
    answerOptions.innerHTML = "";

    var options = questions[questionNumber].options;

    for (var i = 0; i < options.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = options[i]
        answerBtn = answerOptions.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}

//Create a Correct Answers Function (what happens when user selects the correct answer?):
//  displays next question
//  displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//  Adds points to the score
//  optionOneBtn.addEventListener("click")
function retainAnswers() {
    optionOneBtn.addEventListener("click", function () {
        if (optionOneBtn.value === questionOne.answer) {
            alert("correct");
            scoreKeeper();
        }
        else {
            alert("incorrect");
            timeDeduction();
        }
    });
    optionTwoBtn.addEventListener("click", function () {
        if (optionTwoBtn.value === questionOne.answer) {
            alert("correct");
            scoreKeeper();
        }
        else {
            alert("incorrect");
            timeDeduction();
        }
    });
    optionThreeBtn.addEventListener("click", function () {
        if (optionThreeBtn.value === questionOne.answer) {
            alert("correct");
            scoreKeeper();
        }
        else {
            alert("incorrect");
            timeDeduction();

        }
    }); optionFourBtn.addEventListener("click", function () {
        if (optionFourBtn.value === questionOne.answer) {
            alert("correct");
            scoreKeeper();
        }
        else {
            alert("incorrect");
            timeDeduction();
        }
    });
}

//Create a Score Keeper Function (needs to be saved to local storage)
function scoreKeeper() {
    score++
    currentScore.textContent = score * 10;
};

//Create a Deduct Time Function (for Incorrect answers)
function timeDeduction() {
    secondsLeft = secondsLeft - 5;
};

//Create an Incorrect Answers Function (what happens when the user selects an incorrect answer):
//displays next question
//displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//deducts 10 seconds from the timer
//deducts points from the score


    //Create a Score Deduction Function

    //Create a Results Function

    //Create a High Score Entry Function


