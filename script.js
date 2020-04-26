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
//Related to the following function: displayResults
var results = document.querySelector("#results");
var finalScore = document.querySelector("#final-score");
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
    reviewAnswers();
}

//Function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft);
        timeElement.textContent = secondsLeft;
        //will need to indicate what needs to be done once the timer reaches 0 which is display results
        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(timerInterval);
            displayResults();
            //window.location.href = "TBD";
        }
    }, 1000);
}

//Create a Display Question(s) Function
function questionDisplay() {
    //increments the objects array by 1, to display the next set of question properties
    questionNumber++;
    //defines where to find correct answer from the current question
    answer = questions[questionNumber].answer
    //outputs the current question to the html
    mainQuestion.textContent = questions[questionNumber].question;
    //sets the HTML content of this element
    answerOptions.innerHTML = "";
    //stores the current questions answer options
    var options = questions[questionNumber].options;
    //loops through the object and outputs the items to their corresponding elements
    for (var i = 0; i < options.length; i++) {
        //creates a button element per each item under the options of the object
        var nextChoice = document.createElement("button");
        //outputs the objects options (answer choices) into the actual buttons
        nextChoice.textContent = options[i]
        //appends the button into the HTML and assigns styling
        answerBtn = answerOptions.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}

//Create a Deduct Time Function (for Incorrect answers)
function timeDeduction() {
    secondsLeft = secondsLeft - 10;
}

//Create a Correct/Incorrect Answers Function (what happens when user selects an answer?):
//  displays next question
//  displays whether or not the prior questions answer was "Correct" or "Incorrect" underneath the current question
//  Adds points to the score
//  Btn.addEventListener("click")

function reviewAnswers() {
    answerOptions.addEventListener("click", function (event) {
        var result = document.getElementsByClassName("result")[0]
        console.log(event.target.textContent);
        // evaluation of user's choices feedback display
        //  event.target.textContent returns the value of the button
        if (answer === event.target.textContent) {
            result.innerHTML = "Correct!";
            questionDisplay();
        } else {
            result.innerHTML = "You are incorrect.";
            timeDeduction();
            questionDisplay();
        }
    });
};

//Create a Display Results Function
function displayResults() {
    //have the #quiz <div> disappear 
    document.getElementById("quiz").classList.add("d-none");
    //have the #results <div> appear
    document.getElementById("results").classList.remove("d-none");
    finalScore.textContent = "Your final score is: " + secondsLeft
}

//Create a Score Keeper Function (needs to be saved to local storage)

//Create a High Score Entry Function

// ## PseudoCode

// 1. The application has a starting page with the following on it
//     Title
//         -"Coding Quiz Challenge"
//         -Center of page
//         -No functionality
//             -Simple HTML
//     Description
//         -"Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
//         -Center of page
//         -No functionality
//             -Simple HTML
//     Button
//         -"Start Quiz"
//         -Center of page
//         -With functionality
//     View High Scores
//         -"View High Scores"
//         -Top left corner of page
//         -With functionality
//             -Brings you to the another html file when selected
//     Timer
//         -"Time: 0"
//         -Top right corner of page
//         -With functionality
//             -Counter does not start until you start the quiz

// 2. As soon as the user clicks the button, they are faced with their first question
//     Question 1
//         -"Commonly used data types DO NOT include:"
//     Potential Answers
//         -"1. Strings"
//         -"2. Booleans"
//         -"3. Alerts"
//         -"4. Numbers"
//         -These are individual buttons that have a hover feature
//         -White font-color
//         -Purple Background
//     If user clicks on wrong answer
//         -Outputs a sound
//         -Outputs text displayed below buttons
//             -"Wrong!"
//         -Time is subtracted from timer (-20 seconds)
//         -Next question is displayed
//     If user clicks on correct answer
//         -Outputs a sound
//         -Outputs text displayed below buttons
//             -"Correct!"
//         -Time is not impacted
//         -Next question is displayed
//     If user runs out of time (timer hits zero)
//         -New content is displayed on page
//             -Title
//                 -"All done!"
//             -Description
//                 -"Your final score is #."
//             -Form
//                 -"Enter initials:" + text box
//             -Button
//                 -To the right of the text box
//                 -"Submit"
//     View High Scores
//         -"View High Scores"
//         -Top left corner of page
//         -With functionality
//             -Brings you to the another html file when selected
//     Timer
//         -"Time: Seconds"
//         -Top right corner of page
//         -With functionality
// 3. Win or Lose, user enters initials and clicks "Submit Button" and is brought to the high scores page
//     Title
//         -"High Scores"
//         -Center of page
//         -No functionality
//             -Simple HTML
//     Listing
//         -Lists high scores starting at 1
//         -User Initials are included
//         -User Score is included
//         -ex. "1. SB - 30"
//     Button
//         -"Go Back"
//         -Directly below the listing
//         -With functionality to bring user back to the opening page
//     Button
//         -"Clear Highscores"
//         -To the right of the "Go Back" button
//         -With functionality to clear the list of highscores but remains on the same page