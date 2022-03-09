//set variables for the page this will let the script place things on the page.

var quiz = document.getElementById("quiz");;
var resultsCup = document.getElementById("results");
var btn = document.createElement("button");
var pTags = document.getElementById("content");
var generateBtn = document.querySelector("#quizstart");

// Make some questions
var myQuestions = [
    {
        question: "Who was not a part of the original 5 X-MEN?",
        answers: {
            a: "Jean Grey",
            b: "Angel",
            c: "Wolverine",
            d: "Iceman"
        },
        correctAnswer: "c"
    },
    {
        question: "Which world event influenced Magneto's perception of humanity?",
        answers: {
            a: "World War II",
            b: "Vietnam War",
            c: "Pearl Harbor",
            d: "September, 11",
        }, 
        correctAnswer: "a"   
    },
    {
        question: "Where is the Xavier institution located?",
        answers:  {
            a: "Los Angeles",
            b: "New York",
            c: "Hawaii",
            d: "Chicago",
        },
        correctAnswer: "b"
    }             
];

// load the quiz page with buttons to start
generateBtn.addEventListener("click", startQuiz);






//build the quiz
function startQuiz(){
// quiz needs to load on page
quiz.children[0].innerHTML = myQuestions[0].question;
pTags.innerHTML = myQuestions[0].answers;
// quiz needs to load next question

// quiz needs to show results 
}

function nextQuestion(){
    for (i = 0; i < myQuestions.length; i++) {
        nextQuestion()
    }
}
//show the results
function showResults(){

}




// Get the questions to display on a webpage


// Display next question       