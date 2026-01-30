const questions = [
    "What's the capital of France?", 
    "Who painted the Mona Lisa?"
];

const choicesArray = [
    ["Paris", "London", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"]
];

const correctAnswers = ["Paris", "Da Vinci"];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`choice${i+1}`);
            btn.innerHTML = choicesArray[currentQuestionIndex][i];
            btn.value = choicesArray[currentQuestionIndex][i];
        }
      } else {
    document.getElementById('result').innerHTML =
      `You scored ${score} out of ${questions.length}!`;
      document.getElementById('question').innerHTML = "";
      document.getElementById('choices').innerHTML = "";
  }
}

function checkAnswer(btn) {
    if (btn.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();