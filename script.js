//Declare Variables
//Related to the following function: setTime
var timeElement = document.querySelector("#countdown");
var startQuizBtn = document.querySelector("#start-quiz")
var initialQuestion = document.querySelector(".primary-question");
var scoreElement = document.querySelector("#score");
var secondsLeft = 60;
var score = 0;
//Related to the following function: questionDisplay
var questionsDiv = document.querySelector("#questions");
var optionOneBtn = document.querySelector("#option-one");
var optionTwoBtn = document.querySelector("#option-two");
var optionThreeBtn = document.querySelector("#option-three");
var optionFourBtn = document.querySelector("#option-four");
var answerResult = document.querySelector("#result");
var questionOne = {
    question: "A loop that never ends is referred to as which type of loop?",
    options: ["While Loop", "Infinite Loop", "Recursive Loop", "For Loop"],
    answer: "Infinite Loop", //I should actually make this into an array spot like [1]
};
//Related to the following function: 


//Create a Countdown Function (what happens when countdown kicks off?):
//Countdown should initiate when "start-quiz" button is clicked
//Countdown should start at 60 seconds
//Countdown should deduct 10 seconds from timer each time incorrect option is selected (a separate function is required)
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
    //I could not get the contents of the array to populate the button text with .textcontent or .value, it had to be .innerhtml (this took me hours to figure out)


    function questionDisplay() {
        initialQuestion.textContent = questionOne.question;
        optionOneBtn.innerHTML = questionOne.options[0];
        optionTwoBtn.innerHTML = questionOne.options[1];
        optionThreeBtn.innerHTML = questionOne.options[2];
        optionFourBtn.innerHTML = questionOne.options[3];

        console.log(optionOneBtn, optionTwoBtn, optionThreeBtn, optionFourBtn);
        console.log(answerOne, answerTwo, answerThree, answerFour);
    }

    optionOneBtn.addEventListener("click", function () {
        secondsLeft = secondsLeft - 5;
        score++;

    });


    questionDisplay();
});


//display hidden or display none is what hides
//when you click a button you want to impact the display properties
//when you want it to reappear you have to change it back

//Create a Correct Answers Function (what happens when user selects the correct answer?):
//displays next question
//displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//Adds points to the score
//optionOneBtn.addEventListener("click")

//Create an Incorrect Answers Function (what happens when the user selects an incorrect answer):
//displays next question
//displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//deducts 10 seconds from the timer
//deducts points from the score

//Create a Deduct Time Function (for Incorrect answers)

//Create a Score Keeper Function (needs to be saved to local storage)

scoreElement.textContent = score;


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