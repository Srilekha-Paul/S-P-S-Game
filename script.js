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
  const play = u => {
  const c = getComp(), r = getResult(u, c);
  if (r === "win") result.textContent = `🎉 You Win! ${u} beats ${c}`, user++;
  else if (r === "lose") result.textContent = `😢 You Lose! ${c} beats ${u}`, comp++;
  else result.textContent = `😐 It's a Draw! You both chose ${u}`;
  userScoreEl.textContent = user;
  compScoreEl.textContent = comp;
};

choices.forEach(c => c.onclick = () => play(c.dataset.choice));








