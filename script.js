let turn = 'O';
let total_turn = 0;
let wining_patterns = [[0,1,2], [3,4,5],  [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
// console.log(wining_patterns);
let inputs = new Array(9).fill('E');
let checkWinner = function() {
    for(let [index0, index1, index2] of wining_patterns)  {
        if(inputs[index0]!='E' && inputs[index0]==='O' && inputs[index1]==='O' && inputs[index2] ==='O') {
            return 1;
        }
        else if(inputs[index0]!='E' && inputs[index0]==='X' && inputs[index1]==='X' && inputs[index2] ==='X') {
            return 1;
        }
    }
    return 0;
}
let checkValidId = function(id) {
    // console.log(id);
    for(let i=0; i<=9; i++)
    {
        //  console.log(i==id);
        if(i == id)
            return 1;
    }
    return 0;
} 
let printer = (event) => {
    const element = event.target;
    if(inputs[element.id] === 'E') {
        if(checkValidId(event.target.id)) {
            if(turn === 'O') {
                total_turn++;
                element.innerHTML = "O";
                inputs[event.target.id] = "O";
                if(checkWinner()) {
                    document.querySelector('.result').innerHTML = "Player O wins";
                    bord.removeEventListener('click', printer);
                    return;
                }
                turn = "X";
            }
            else {
                total_turn++;
                element.innerHTML = "X";
                inputs[event.target.id] = "X";
                if(checkWinner()) {
                    document.querySelector('.result').innerHTML = "Player X wins";
                    bord.removeEventListener('click', printer);
                    return;
                }
                turn = "O";
            }
            if(total_turn === 9) 
                document.querySelector('.result').innerHTML = "Draw Match"
        }
    }
}
const bord = document.querySelector(".input");
bord.addEventListener('click', printer)

const restart = document.getElementById("restartButton");
restart.addEventListener('click', (event) => {
    const boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach((value) => {
        // console.log(value);
        value.innerHTML = "";
    })
    turn = 'O';
    total_turn = 0;
    inputs = new Array(9).fill('E');
    bord.addEventListener('click', printer);
    document.querySelector(".result").innerHTML = "No Winner"
    
})