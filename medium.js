let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

const winPatterns=[
        [0, 1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16],
        [13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22],
        [19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28],
        [25, 26, 27, 28, 29],
        [30, 31, 32, 33, 34],
        [31, 32, 33, 34, 35],
        [0, 6, 12, 18, 24],
        [6, 12, 18, 24, 30],
        [1, 7, 13, 19, 25],
        [7, 13, 19, 25, 31],
        [2, 8, 14, 20, 26],
        [8, 14, 20, 26, 32],
        [3, 9, 15, 21, 27],
        [9, 15, 21, 27, 33],
        [4, 10, 16, 22, 28],
        [10, 16, 22, 28, 34],
        [5, 11, 17, 23, 29],
        [11, 17, 23, 29, 35],
        [0, 7, 14, 21, 28],
        [1, 8, 15, 22, 29],
        [6, 13, 20, 27, 34],
        [7, 14, 21, 28, 35],
        [4, 9, 14, 19, 24],
        [5, 10, 15, 20, 25],
        [11, 16, 21, 26, 31],
        [10, 15, 20, 25, 30]

];

let turnO=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        let pos4val=boxes[pattern[3]].innerText;
        let pos5val=boxes[pattern[4]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="" && pos4val !="" && pos5val !=""){
            if(pos1val===pos2val&&
                pos2val===pos3val&&
                pos3val===pos4val&&
                pos4val===pos5val
            ){
                showWinner(pos1val);
            }
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`The Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);