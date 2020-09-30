// html grab
const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');

let activeGame = true;
let playerTurn = true; // turns are toggled in handleclick

// game functions
// const checkForWin = () => {
//     const topLeft = boxes[0].classList[1];
//     const topMiddle = boxes[1].classList[1];
//     const topRight = boxes[2].classList[1];
//     const middleLeft = boxes[3].classList[1];
//     const middleMiddle = boxes[4].classList[1];
//     const middleRight = boxes[5].classList[1];
//     const bottomLeft = boxes[6].classList[1];
//     const bottomMiddle = boxes[7].classList[1];
//     const bottomRight = boxes[8].classList[1];

//     if ()
// }



// event handlers
const handleReset = (e) => {  //handles reset button click
    for (const box of boxes) {
        box.classList.remove('x');
        box.classList.remove('o');
    }
}

const handleClick = (e) => { // handles cell clicks
    const specific = e.target.classList[1];
    const classList = e.target.classList;
    
    if (classList[1] === 'x' || classList[1] === 'o') { // if either class is present do nothing
        return;
    }

    if (playerTurn === true) {   // this conditional toggles player turns and adds class to class list
        classList.add ('x');
        // checkForWin();
        playerTurn = !playerTurn;        
    } else {
        classList.add('o');
        // checkForWin();
        playerTurn = !playerTurn;
    }
}




//event listeners
reset.addEventListener('click', handleReset);

for (const box of boxes) {
    box.addEventListener('click', handleClick);
}