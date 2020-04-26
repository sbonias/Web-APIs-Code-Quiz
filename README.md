# 04 Web APIs: Code Quiz

* The URL of the functional, deployed application: https://sbonias.github.io/Web-APIs-Code-Quiz/

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project: https://github.com/sbonias/Web-APIs-Code-Quiz

## Visual Representation

The following animation demonstrates the application functionality:

https://drive.google.com/file/d/1Riv-RyjR1F0QDCv4LgJCVB0VN6dbwpj-/view?usp=sharing

## Description

For this assignment I was required to create a coding based quiz applying the fundamentals of Javascript. First off, the application needed to have a starting page with the following on it: Title, Description of quiz, start button, view high scores link, and a timer. As soon as the user clicks the start button, they are faced with their first question and the countdown is initiated. The answers are displayed as buttons on the page. If the user selects the correct answer then the next question appears, however, if the user selects an incorrect answer they are penalized by having their timer decrement by 10 seconds, at which point the next question will display. Either way, the user is prompted with the result of their selection "Correct" or "Incorrect." This continues until the length of the object (last question) is reached or the countdown timer reaches 0 seconds. From here, the results screen displays which provides the user with their final score that is equivalent to the number of seconds left in the game, therefore speed in addition to accuracy impact your final score. On this screen the user is also prompted to submit their initials, upon clicking the submit button, the view high scores page displays and the user can view their scoreboard. Then the user has the option of restarting the quiz or clearing their scores, both of which are represented by buttons.

## Challenges

This was a very demanding project that was very challenging. And by challenging I mean really made me rethink coding in general. The amount of time I allocated to this versus the final result was a major disappointment. Most of the quiz doesn't work and I was lucky to even get as far as I did. Long story short, Javascript is a new language to me that I clearly don't speak and as an individual that's new to the coding game, it's both disappointing and expected. The positives were that this assignment made me understand the following: a) the importance of functions and how they're organized and "called" within the context of a somewhat complex application b) how to make divs disappear and reappear (which took me the absolute longest time to figure out) c) how to implement a timer. Time was of the essence in the game as well as outside the game, I could've definitely used 2 weeks as opposed to 1 week to get this fully completed.


## Sources
-Bootstrap
https://getbootstrap.com/docs/4.0/utilities/spacing/

-Event.target
https://developer.mozilla.org/en-US/docs/Web/API/Event/target

-InnerHTML, TextContent, InnerText
https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc

### 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

### User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

### Acceptance Criteria

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


### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
