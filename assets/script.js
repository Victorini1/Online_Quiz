//set variables for the page this will let the script place things on the page.

var quiz = document.getElementById("quiz");;
var resultsCup = document.getElementById("results");
var btn = document.createElement("button");
var pTags = document.getElementById("content");
var generateBtn = document.querySelector("#quizstart");
var timerEl = document.getElementById('countdown');
var btn = document.createElement("button");

// Make some questions
var myQuestions = [
    {
        question: "Who was not a part of the original 5 X-MEN?",
        answers: {
            A: "Jean Grey",
            B: "Angel",
            C: "Wolverine",
            D: "Iceman"
        },
        correctAnswer: "C"
    },
    {
        question: "Which world event influenced Magneto's perception of humanity?",
        answers: {
            A: "World War II",
            B: "Vietnam War",
            C: "Pearl Harbor",
            D: "September, 11",
        }, 
        correctAnswer: "A"   
    },
    {
        question: "Where is the Xavier institution located?",
        answers:  {
            A: "Los Angeles",
            B: "New York",
            C: "Hawaii",
            D: "Chicago",
        },
        correctAnswer: "B"
    }             
];
function submitButton(){
        btn.innerHTML = "Submit";
        document.body.appendChild(btn);
    } 

function removeStart(){
    var startButton = document.getElementById("div1");
    startButton.remove();
}

// load the quiz page with buttons to start
generateBtn.addEventListener("click", showQuestion);
generateBtn.addEventListener("click", showCountdown);
generateBtn.addEventListener("click", submitButton);
generateBtn.addEventListener("click", removeStart);




// build the quiz: because I made my questions into objects, got help from the internet to be able to show them
// on the page. https://www.sitepoint.com/simple-javascript-quiz/ helped to establish the base.

function showQuestion(){
    output = [];

    myQuestions.forEach(
        // This will apply to each of the questions that I make
        (currentQuestion, questionNumber) => {
            answers = [];
                    // This will output the questions with a radio button that can then become selectable by the user
                    // Template literal will allow me to put some code into the statements = Help from TA
                    for(letter in currentQuestion.answers){
                        answers.push(
                            `<label>
                            <input type="radio" name="question ${questionNumber}" value=" ${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                            </label>`
                        );
                    }
                    // since output is made as an array this makes the sections on the html and puts them on the page
                    output.push(
                        `<div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join('')} </div>`
                    );
        }
    );

quiz.innerHTML = output.join('');
// generateBtn.textContent = "Next Question"

btn.addEventListener("click", showResults);
}

// need to validate if the answers are correct and calculate the score
// put answers into an array and validate them with the correct letter answer?
function showResults(){
    // place answers into an array
    var answerBucket = quiz.querySelectorAll(".answers");
    // Declare that the counter starts at 0
    correctCount = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        answerBucket = answerBucket[questionNumber];
        selector = `input[name=question${questionNumber}]:checked`;
        userInput = (answerBucket.querySelector(selector));
        // for each question make sure the correct letter answer is equivalent to the 
        // user's input and increase the count
        if(userInput === currentQuestion.correctAnswer){
            correctCount++
            console.log(correctCount)
        }
        
    })
}







// function showQuestion(){
// // quiz needs to load on page
// quiz.children[0].innerHTML = myQuestions[0].question;
// //This is not displaying the anwers, but we also need to add the radio buttons
// pTags.innerHTML = myQuestions[0].answers;
// console.log(myQuestions[0].answers)

// }

// quiz needs to load next question
// quiz needs to show results 
//show the results


// add a timer

function showCountdown(){
        var timeLeft = 120;
      
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
          // As long as the `timeLeft` is greater than 1
          if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
          } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
          }
        }, 1000);
      }

// timer has to detract when answer is incorrect






