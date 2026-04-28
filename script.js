const questions = [
  {
    q: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "OS"],
    answer: "Markup Language"
  },
  {
    q: "What is CSS used for?",
    options: ["Styling", "Logic", "Database", "Server"],
    answer: "Styling"
  },
  {
    q: "What is JavaScript?",
    options: ["Language", "Browser", "OS", "Hardware"],
    answer: "Language"
  },
  {
    q: "which language is used for web page structure?",
  options: ["HTML", "CSS", "Python", "Java"],
  answer: "HTML"
  },
  {
    q:"Which of the following is used to make a website responsive?",
  options: ["Media Queries", "Loops", "Variables", "Functions"],
  answer: "Media Queries"
  }
];

// Shuffle questions
questions.sort(() => Math.random() - 0.5);

let currentIndex = 0;
let score = 0;
let time = 10;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");

// Load question
function loadQuestion() {
  clearInterval(timer);
  time = 10;
  timerEl.textContent = time;

  timer = setInterval(() => {
    time--;
    timerEl.textContent = time;

    if (time === 0) {
      nextQuestion();
    }
  }, 1000);

  const current = questions[currentIndex];
  questionEl.textContent = current.q;

  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");

    btn.onclick = () => {
      if (option === current.answer) {
        score++;
      }
      nextQuestion();
    };

    optionsEl.appendChild(btn);
  });
}

// Next question
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show result
function showResult() {
  clearInterval(timer);
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("score").textContent = score;
}

// Restart quiz
function restartQuiz() {
  currentIndex = 0;
  score = 0;
  questions.sort(() => Math.random() - 0.5);
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  loadQuestion();
}

// Start
loadQuestion();