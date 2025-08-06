function setup() {
  createCanvas(400, 400);
}

let questions = [
  {
    question: "Qual é uma contribuição importante do campo para a cidade?",
    options: ["Tecnologia", "Alimentos", "Trânsito", "Educação Superior"],
    answer: 1
  },
  {
    question: "Como a cidade contribui com o campo?",
    options: ["Comércio, serviços e infraestrutura", "Plantação", "Gado", "Clima"],
    answer: 0
  },
  {
    question: "Qual evento celebra produtos do campo nas cidades?",
    options: ["Festival de Música Urbana", "Feira Agroecológica", "Mostra de Cinema", "Parada Tecnológica"],
    answer: 1
  },
  {
    question: "O que pode fortalecer a conexão entre campo e cidade?",
    options: ["Isolamento rural", "Importação de produtos", "Consumo local e sustentável", "Desmatamento"],
    answer: 2
  },
  {
    question: "O que representa bem a cultura do campo nas cidades?",
    options: ["Shoppings", "Rodízios de pizza", "Feiras livres e festas juninas", "Arranha-céus"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let quizOver = false;

function setup() {
  createCanvas(800, 400);
  textAlign(LEFT, TOP);
  textSize(20);
}

function draw() {
  background(245);
  fill(50);
  
  if (!quizOver) {
    let q = questions[currentQuestion];
    text("Pergunta " + (currentQuestion + 1) + " de " + questions.length, 20, 20);
    text(q.question, 20, 60);
    
    for (let i = 0; i < q.options.length; i++) {
      let y = 120 + i * 40;
      fill(200);
      rect(20, y, 760, 30, 5);
      fill(0);
      text(q.options[i], 30, y + 5);
    }
  } else {
    fill(0, 150, 0);
    text("Quiz finalizado!", 20, 60);
    fill(0);
    text("Sua pontuação: " + score + " de " + questions.length, 20, 100);
    text("Parabéns!", 20, 140);
  }
}

function mousePressed() {
  if (!quizOver) {
    let q = questions[currentQuestion];
    for (let i = 0; i < q.options.length; i++) {
      let y = 120 + i * 40;
      if (mouseX > 20 && mouseX < 780 && mouseY > y && mouseY < y + 30) {
        if (i === q.answer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion >= questions.length) {
          quizOver = true;
        }
        break;
      }
    }
  }
}
