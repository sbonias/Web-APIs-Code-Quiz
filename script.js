//Declare Variables
//Related to the following function: setTime
var timeElement = document.querySelector("#countdown");
var startQuizBtn = document.querySelector("#start-quiz")
var secondsLeft = 60;
//Related to the following function: questionDisplay
var questionsDiv = document.querySelector("#questions");
var optionOne = document.querySelector("#option-one");
var optionTwo = document.querySelector("#option-two");
var optionThree = document.querySelector("#option-three");
var optionFour = document.querySelector("#option-four");
var answerResult = document.querySelector("#result");
var questionOne = {
    question: "A loop that never ends is referred to as which type of loop?",
    options: ["While Loop", "Infinite Loop", "Recursive Loop", "For Loop"],
    answer: "Infinite Loop",
};



//Create a Countdown Function (what happens when countdown kicks off?):
//Countdown should initiate when "start-quiz" button is clicked
//Countdown should start at 60 seconds
//Countdown should deduct 10 seconds from timer each time incorrect option is selected
//Countdown should end at 0
//When Countdown arrives at 0, "results" content should be displayed

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



    //Create a Display Question(s) Function

    function questionDisplay() {
        questionsDiv.textContent = questionOne.question;
        optionOne.textContent = questionOne.options[0];
    }

    questionDisplay();
});
//Create a Correct Answers Function (what happens when user selects an incorrect answer):
//displays next question
//displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//Adds points to the score

//Create an Incorrect Answers Function (what happens when the user selects a correct answer):
//displays next question
//displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//deducts 10 seconds from the timer
//deducts points from the score

//Create a Deduct Time Function (for Incorrect answers)

//Create a Score Keeper Function (needs to be saved to local storage)

//Create a Score Deduction Function

//Create a Results Function

//Create a High Score Entry Function

//Declare Variable-object that contains questions, choices and right answer
// var questions = {
//     question: "A loop that never ends is referred to as which type of loop?",
//     choices: ["While Loop", "Infinite Loop", "Resursive Loop", "For Loop"],
//     answer: "Infinite Loop",
// },
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
// },