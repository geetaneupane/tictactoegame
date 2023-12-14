let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector('#new');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turn0=true;     //player X and player Y
//We will use  2D arrays for winning conditions.


const winpattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const disableboxes=()=>{
    for(let box of boxes){
     box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText='';
    }
}

const resetBox=()=>{
turn0=true;
enableboxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
box.addEventListener('click',()=>{
    console.log("Box was clicked!!");
    if(turn0){
    box.innerText="0";
    turn0=false;
    }
    else{
        box.innerText="X";  
        turn0=true;
    }
    box.disabled=true;


    winner();
});
});
const showWinner=(winner)=>{
msg.innerText=`Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableboxes();
}

const winner=()=>{
    for(let x of winpattern){
        let pos1Value=boxes[x[0]].innerText;
        let pos2Value=boxes[x[1]].innerText;
        let pos3Value=boxes[x[2]].innerText;

        if(pos1Value!='' && pos2Value!='' && pos2Value!=''){
            if(pos1Value==pos2Value && pos2Value==pos3Value){
                console.log("Winner!",pos1Value);
                showWinner(pos1Value);
            }
        }
    }
}
newGameBtn.addEventListener('click',resetBox);
resetBtn.addEventListener("click",resetBox);