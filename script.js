//Declare Variables
//Related to the following function: setTime
var introDiv = document.querySelector("#intro");
var questionDiv = document.querySelector("#questions");
var timeElement = document.querySelector("#countdown");
var startQuizBtn = document.querySelector("#start-quiz")
var currentScore = document.querySelector("#current-score");
var initialQuestion = document.querySelector(".primary-question");
var secondsLeft = 60;
var score = 0;
//Related to the following function: questionDisplay
var questionsDiv = document.querySelector("#questions");
var optionOneBtn = document.querySelector("#option-one");
var optionTwoBtn = document.querySelector("#option-two");
var optionThreeBtn = document.querySelector("#option-three");
var optionFourBtn = document.querySelector("#option-four");
var answerResult = document.querySelector("#result");
//Declare Variable-object that contains questions, choices and right answer
var questionOne = {
    question: "A loop that never ends is referred to as which type of loop?",
    options: ["While Loop", "Infinite Loop", "Recursive Loop", "For Loop"],
    answer: "2",
};

//Related to the following function: 


//Create a Countdown Function (what happens when countdown kicks off?):
//      Countdown should initiate when "start-quiz" button is clicked
//      Countdown should start at 60 seconds
//      Countdown should deduct 10 seconds from timer each time incorrect option is selected (a separate function is required)
//      Countdown should end at 0
//      When Countdown hits 0, the game should end and the "results" screen should display

startQuizBtn.addEventListener("click", function () {

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
    setTime();
    questionDisplay();
    retainAnswers();
});

//Create a Display Question(s) Function
//  I could not get the contents of the array to populate the button text with .textcontent or .value, it had to be .innerhtml (this took me hours to figure out)
function questionDisplay() {
    //have the #intro <div> disappear 
    introDiv.style.display = "none";
    //have the #questions <div> appear
    questionDiv.style.display = "inline";

    //Display the contents of the q1 object into its corresponding elements
    initialQuestion.textContent = questionOne.question;
    optionOneBtn.innerHTML = questionOne.options[0];
    optionTwoBtn.innerHTML = questionOne.options[1];
    optionThreeBtn.innerHTML = questionOne.options[2];
    optionFourBtn.innerHTML = questionOne.options[3];

    //Assign an attribute to the buttons, in order
    optionOneBtn.setAttribute("value", "1");
    optionTwoBtn.setAttribute("value", "2");
    optionThreeBtn.setAttribute("value", "3");
    optionFourBtn.setAttribute("value", "4");

    console.log(optionOneBtn, optionTwoBtn, optionThreeBtn, optionFourBtn);
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

    // var questions = {
    //     question: "Commonly used data type DO NOT include:",
    //     choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    //     answer: "Alerts",
    // },
    // var questions = {
    //     question: "Inside which HTML element do we place JavaScript code?",
    //     choices: ["scripting", "javascript", "js", "script"],
    //     answer: "script",
    // },
    // var questions = {
    //     question: "Where is the correct place to insert a JavaScript?",
    //     choices: ["The head", "The body", "Both the head and the body sections are correct"],
    //     answer: "The body",
    // },
    // var questions = {
    //     question: "What's the syntax for creating a function in JS?",
    //     choices: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
    //     answer: "function myFunction()",
