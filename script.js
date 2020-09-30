
const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');
const winner = document.querySelector('#winner');


let activeGame = true;
let playerTurn = true; // turns are toggled in handleclick

const checkForWin = () => {
    const zero = boxes[0].classList[1]; // this identifies the box and the X or O designation
    const one = boxes[1].classList[1];
    const two = boxes[2].classList[1];
    const three = boxes[3].classList[1];
    const four = boxes[4].classList[1];
    const five = boxes[5].classList[1];
    const six = boxes[6].classList[1];
    const seven = boxes[7].classList[1];
    const eight = boxes[8].classList[1];

    if (zero && zero === one && zero === two) {
        activeGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (three && three === four && three === five) {
        activeGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (six && six === seven && six === eight) {
        actviveGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (zero && zero === three && zero === six) {
        activeGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (one && one === four && one === seven) {
        activeGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (eight && eight === five && eight === two) {
        activeGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (six && six === four && six === two) {
        activeGame = false;
        winner.innerHTML = "WINNER!!";
    } else if (zero && zero === four && zero === eight)
        activeGame = false;
}



// event handlers
const handleReset = (e) => {  //handles reset button click
    for (const box of boxes) {
        box.classList.remove('x');
        box.classList.remove('o');
        winner.innerHTML = 'TIC TAC TOE'
        activeGame = true;
    }
}

const handleClick = (e) => { // handles cell clicks
    const classList = e.target.classList;

    if (classList[1] === 'x' || classList[1] === 'o') { // if either class is present do nothing
        return;
    }

    if (playerTurn && activeGame === true) {   // this conditional toggles player turns and adds class to class list
        classList.add('x');
        checkForWin();
        playerTurn = !playerTurn;
    } else if (activeGame === true) {
        classList.add('o');
        checkForWin();
        playerTurn = !playerTurn;
    }
}




//event listeners
reset.addEventListener('click', handleReset);

for (const box of boxes) {
    box.addEventListener('click', handleClick);
}