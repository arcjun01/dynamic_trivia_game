const questions = [
{
    question: "What is a group of cats called?",
    answers: ["clowder", "glaring", "pounce", "meow"],
    correct: "clowder"
},
{
    question: "Which has the thickest fur of any mammal?",
    answers:["polar bear", "sea otter", "arctic fox", "walrus"],
    correct: "sea otter"
},
{
    question: "The age of a lion can be determined by its … ?",
    answers: ["teeth", "mane", "nose", "paws"],
    correct: "nose"
},
{
    question: "How far away can a wolf smell its prey?",
    answers: ["half a mile", "one mile", "almost two miles", "five miles"],
    correct: "almost two miles"
},
{
    question: "What is the deadliest creature in the world?",
    answers: ["box jellyfish", "mosquito", "saltwater crocodile", "blue-ringed octopus"],
    correct: "mosquito"
},
{
    question: "What is the closest living relative to the T-rex?",
    answers: ["ostrich", "alligator", "chicken", "eagle"],
    correct: "chicken"
},
{
    question: "What is a male duck called?",
    answers: ["drake", "stag", "bull", "boar"],
    correct: "drake"
},
{
    question: "What percentage of baby animals are raised by both parents?",
    answers: ["75%", "25%", "50%", "3%"],
    correct: "3%"
},
{
    question: "What is the polar bear's skin color?",
    answers: ["white", "black", "pink", "brown"],
    correct: "black"
},
{
    question: "Which animal is known for spending 80% of its day sleeping?",
    answers: ["sloth", "koala bear", "lion", "panda"],
    correct: "koala bear"
}
];

let currentQuestionIndex = 0;
let score = 0;

const container = document.getElementById("trivia-container");

function showQuestion() {
    container.innerHTML = "";

    if (currentQuestionIndex < questions.length) {
        showResults();
        return;
    }

const q = questions[currentQuestionIndex];

  const questionEl = document.createElement("h2");
  questionEl.textContent = q.question;
  container.appendChild(questionEl);

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(answer));
    container.appendChild(button);
  });
}

function checkAnswer(answer) {
  const q = questions[currentQuestionIndex];
  if (answer === q.correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer was: " + q.correct);
  }

  currentQuestionIndex++;
  showQuestion();
}

function showResults() {
  gameContainer.innerHTML = `
    <h2>Game Over!</h2>
    <p>You scored ${score} out of ${questions.length}</p>
    <button onclick="restartGame()">Play Again</button>
  `;
}

function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

showQuestion();