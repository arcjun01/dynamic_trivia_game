const questions = [
{
    progress: "Question 1 of 5",
    question: "What is a group of cats called?",
    answers: ["clowder", "glaring", "pounce", "meow"],
    correct: "clowder"
},
{
    progress: "Question 2 of 5",
    question: "Which has the thickest fur of any mammal?",
    answers:["polar bear", "sea otter", "arctic fox", "walrus"],
    correct: "sea otter"
},
{
    progress: "Question 3 of 5",
    question: "The age of a lion can be determined by its … ?",
    answers: ["teeth", "mane", "nose", "paws"],
    correct: "nose"
},
{
    progress: "Question 4 of 5",
    question: "How far away can a wolf smell its prey?",
    answers: ["half a mile", "one mile", "almost two miles", "five miles"],
    correct: "almost two miles"
},
{
    progress: "Question 5 of 5",
    question: "What is the deadliest creature in the world?",
    answers: ["box jellyfish", "mosquito", "saltwater crocodile", "blue-ringed octopus"],
    correct: "mosquito"
}
// },
// {
//     question: "What is the closest living relative to the T-rex?",
//     answers: ["ostrich", "alligator", "chicken", "eagle"],
//     correct: "chicken"
// },
// {
//     question: "What is a male duck called?",
//     answers: ["drake", "stag", "bull", "boar"],
//     correct: "drake"
// },
// {
//     question: "What percentage of baby animals are raised by both parents?",
//     answers: ["75%", "25%", "50%", "3%"],
//     correct: "3%"
// },
// {
//     question: "What is the polar bear's skin color?",
//     answers: ["white", "black", "pink", "brown"],
//     correct: "black"
// },
// {
//     question: "Which animal is known for spending 80% of its day sleeping?",
//     answers: ["sloth", "koala bear", "lion", "panda"],
//     correct: "koala bear"
// }
];


// The state of the game
let currentQuestionIndex = 0;
let score = 0;

// Current question and selecting answers
const container = document.getElementById("trivia-container");

function showQuestion() {
    container.innerHTML = "";

if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
}

// Display current question
const q = questions[currentQuestionIndex];

// Display progress
  const progressEl = document.createElement("p");
  progressEl.textContent = `Question ${currentQuestionIndex + 1} of 5`;
  container.appendChild(progressEl);

  const questionEl = document.createElement("h2");
  questionEl.textContent = q.question;
  container.appendChild(questionEl);

// Display answers
  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(answer));
    container.appendChild(button);
  });
}

// Function that checks answer and updates score
function checkAnswer(answer) {
  const q = questions[currentQuestionIndex];
  if (answer === q.correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer was: " + q.correct);
  }

// Move to the next question
  currentQuestionIndex++; 
  showQuestion();
}

// Final results and a button option to restart
function showResults() {
  container.innerHTML = `
    <h2>Game Over!</h2>
    <p>You scored ${score} out of ${questions.length}</p>
    <button onclick="restartGame()">Play Again</button>
  `;
}

// Restart the game
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Restart the game when reloaded
showQuestion();