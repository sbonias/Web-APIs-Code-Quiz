# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

## PseudoCode

1. The application has a starting page with the following on it
    Title
        -"Coding Quiz Challenge"
        -Center of page
        -No functionality
            -Simple HTML
    Description
        -"Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
        -Center of page
        -No functionality
            -Simple HTML
    Button
        -"Start Quiz"
        -Center of page
        -With functionality
    View High Scores
        -"View High Scores"
        -Top left corner of page
        -With functionality
            -Brings you to the another html file when selected
    Timer
        -"Time: 0"
        -Top right corner of page
        -With functionality
            -Counter does not start until you start the quiz

2. As soon as the user clicks the button, they are faced with their first question
    Question 1
        -"Commonly used data types DO NOT include:"
    Potential Answers
        -"1. Strings"
        -"2. Booleans"
        -"3. Alerts"
        -"4. Numbers"
        -These are individual buttons that have a hover feature
        -White font-color
        -Purple Background
    If user clicks on wrong answer
        -Outputs a sound
        -Outputs text displayed below buttons
            -"Wrong!"
        -Time is subtracted from timer (-20 seconds)
        -Next question is displayed
    If user clicks on correct answer
        -Outputs a sound
        -Outputs text displayed below buttons
            -"Correct!"
        -Time is not impacted
        -Next question is displayed
    If user runs out of time (timer hits zero)
        -New content is displayed on page
            -Title
                -"All done!"
            -Description
                -"Your final score is #."
            -Form
                -"Enter initials:" + text box
            -Button
                -To the right of the text box
                -"Submit"
    View High Scores
        -"View High Scores"
        -Top left corner of page
        -With functionality
            -Brings you to the another html file when selected
    Timer
        -"Time: Seconds"
        -Top right corner of page
        -With functionality
3. Win or Lose, user enters initials and clicks "Submit Button" and is brought to the high scores page
    Title
        -"High Scores"
        -Center of page
        -No functionality
            -Simple HTML
    Listing
        -Lists high scores starting at 1
        -User Initials are included
        -User Score is included
        -ex. "1. SB - 30"
    Button
        -"Go Back"
        -Directly below the listing
        -With functionality to bring user back to the opening page
    Button
        -"Clear Highscores"
        -To the right of the "Go Back" button
        -With functionality to clear the list of highscores but remains on the same page


### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
