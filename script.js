const choices = document.querySelectorAll(".choice"),
      result = document.getElementById("result"),
      userScoreEl = document.getElementById("user-score"),
      compScoreEl = document.getElementById("comp-score");

let user = 0, comp = 0;
const getComp = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const getResult = (u, c) =>
  u === c ? "draw" : (u === "rock" && c === "scissors") || 
  (u === "paper" && c === "rock") || 
  (u === "scissors" && c === "paper") ? "win" : "lose";