let boxes = document.querySelectorAll('.button');
let rstbtn = document.querySelector('.bn47');
let newGameBtn = document.querySelector('bn47');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enableBtns();
    msgContainer.classList.add("hide");
};


let turn0 = true; //playerX,playerY
    boxes.forEach((button) => {
        button.addEventListener("click", () => {
            // console.log("box was clicked");
            if (turn0) {
                button.innerText = "0";
                turn0 = false;
            } else {
                button.innerText = "X";
                turn0 = true;
            }
            button.disabled=true;

            checkWinner();
        });
    });

const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () => {
    for(let box of boxes){
        box.disabled = false;
        button.disabled = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const checkWinner = () =>{
    for(let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }

    }
};

newGameBtn.addEventListener ("click",resetGame);
rstbtn.addEventListener("click",resetGame);