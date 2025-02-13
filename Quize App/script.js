const quizQuestions = [
  {
    question: "What does HTML stand for?",
    choices: {
      A: "Hyper Trainer Marking Language",
      B: "Hyper Text Markup Language",
      C: "Home Tool Markup Language",
      D: "Hyper Transfer Markup Language",
    },
    answer: "B",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    choices: {
      A: "<link>",
      B: "<a>",
      C: "<href>",
      D: "<hyperlink>",
    },
    answer: "B",
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    choices: {
      A: "<img>",
      B: "<image>",
      C: "<picture>",
      D: "<src>",
    },
    answer: "A",
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    choices: {
      A: "<h6>",
      B: "<h1>",
      C: "<head>",
      D: "<heading>",
    },
    answer: "B",
  },
  {
    question:
      "Which of the following is the correct way to create an ordered list?",
    choices: {
      A: "<ul>",
      B: "<ol>",
      C: "<li>",
      D: "<list>",
    },
    answer: "B",
  },
  {
    question: "What does CSS stand for?",
    choices: {
      A: "Computer Style Sheets",
      B: "Creative Style Sheets",
      C: "Cascading Style Sheets",
      D: "Colorful Style Sheets",
    },
    answer: "C",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    choices: {
      A: "background-color",
      B: "color",
      C: "bgcolor",
      D: "background",
    },
    answer: "A",
  },
  {
    question:
      "How do you select an element with the class name 'container' in CSS?",
    choices: {
      A: "#container",
      B: ".container",
      C: "container",
      D: "*container*",
    },
    answer: "B",
  },
  {
    question: "Which CSS property is used to make text bold?",
    choices: {
      A: "font-weight",
      B: "bold",
      C: "text-bold",
      D: "weight",
    },
    answer: "A",
  },
  {
    question: "Which CSS property is used to make a website responsive?",
    choices: {
      A: "media-queries",
      B: "responsive",
      C: "flexbox",
      D: "transform",
    },
    answer: "A",
  },
];
const quizeContainer = document.getElementById("quizeContainer");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const question = document.getElementById("question");
const submitBtn = document.getElementById("submit");
let correctAns = 0;
let currentQuestion = 0;
window.onload = loadQuize();

function getSelected() {
  let answerSelect = document.querySelector("input[name='answer']:checked");
  if (!answerSelect) {
    alert("Please select an answer");
    return;
  } else {
    if (
      answerSelect.id === quizQuestions[currentQuestion].answer.toLowerCase()
    ) {
      alert("Correct Answer!");
      correctAns++;
    } else {
      alert("Wrong Answer , get the next one!");
    }
    currentQuestion++;
  }
  if (currentQuestion < quizQuestions.length-1) {
    loadQuize();
  } 
  else if(currentQuestion === quizQuestions.length-1){
    loadQuize();
    submitBtn.innerHTML = "Submit";
    submitBtn.style.background = "#26bd36";
    submitBtn.style.color = "#000";
  }
    else {
    showResult();
  }
}
function loadQuize() {
  let quize = quizQuestions[currentQuestion];
  question.innerText = quize.question;
  aText.innerText = quize.choices.A;
  bText.innerText = quize.choices.B;
  cText.innerText = quize.choices.C;
  dText.innerText = quize.choices.D;
}

submitBtn.addEventListener("click", () => {
  getSelected();
});
function showResult() {
  quizeContainer.innerHTML = `
  <div class="quizeHeader">
        <h1 class="resultsHeader">you have completed the quize!</h1>
      </div>
      <div class="choices">
       <p class = "result">you have scored ${correctAns} out of ${quizQuestions.length} </p>
      </div>
  `;
  alert(`You have scored ${correctAns} out of ${quizQuestions.length}`);
}
