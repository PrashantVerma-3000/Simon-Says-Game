let userSeq = [];
let start = false;
let level = 0;
let idx = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "blue", "green", "orange"];
document.addEventListener("keydown", () => {
  if (start == false) {
    start = true;
    levelUp();
  }
});

function flash(btn) {
  let col = btn.getAttribute("id");
  userSeq.push(col);
  console.log(col);
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  let col = btn.getAttribute("id");
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  level++;
  idx = 0;
  h2.innerText = `Level ${level}`;
  let rand = Math.floor(Math.random() * 4);
  let btn = document.querySelector(`.${btns[rand]}`);
  flash(btn);
}
function gameEnd() {
  let bdy = document.querySelector("body");
  bdy.classList.add("redflash");
  setTimeout(() => {
    bdy.classList.remove("redflash");
  }, 500);
  h2.innerHTML = `Press any Key to Start Again<br><b>&nbsp &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Your Score is ${level}</b>`;
  level = 0;
  userSeq = [];
  idx = 0;
  start = false;
}
function buttonPressed(btn) {
  if (!start) return;
  console.log(userSeq);
  let col = btn.getAttribute("id");
  userflash(btn);
  if (col != userSeq[idx]) {
    gameEnd();
  } else {
    idx++;
    if (idx === userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  }
}
let ele = document.querySelectorAll(".box");
for (e of ele) {
  e.addEventListener("click", function () {
    buttonPressed(this);
  });
}
// ele.forEach((e)=>{
//     e.addEventListener("click",)
// })
