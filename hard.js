let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true;

const winPatterns = [];

// Horizontal win patterns
for (let row = 0; row < 10; row++) {
  for (let col = 0; col <= 4; col++) {
    let start = row * 10 + col;
    winPatterns.push([start, start+1, start+2, start+3, start+4, start+5]);
  }
}

// Vertical win patterns
for (let col = 0; col < 10; col++) {
  for (let row = 0; row <= 4; row++) {
    let start = row * 10 + col;
    winPatterns.push([start, start+10, start+20, start+30, start+40, start+50]);
  }
}

// Diagonal \ win patterns
for (let row = 0; row <= 4; row++) {
  for (let col = 0; col <= 4; col++) {
    let start = row * 10 + col;
    winPatterns.push([start, start+11, start+22, start+33, start+44, start+55]);
  }
}

// Diagonal / win patterns
for (let row = 0; row <= 4; row++) {
  for (let col = 5; col < 10; col++) {
    let start = row * 10 + col;
    winPatterns.push([start, start+9, start+18, start+27, start+36, start+45]);
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c, d, e, f] = pattern;
    let valA = boxes[a].innerText;
    let valB = boxes[b].innerText;
    let valC = boxes[c].innerText;
    let valD = boxes[d].innerText;
    let valE = boxes[e].innerText;
    let valF = boxes[f].innerText;

    if (valA && valA === valB && valA === valC && valA === valD && valA === valE && valE===valF) {
      showWinner(valA);
      break;
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
