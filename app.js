let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let newGameBtn = document.querySelector('.new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let mainContainer = document.querySelector('main');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const newGame = () =>
{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    mainContainer.classList.remove('hide');
}

const resetGame = () =>
{
    turnO = true;
    enableBoxes();
}




const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = '';
    }

}

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

boxes.forEach((box) =>
{
    box.addEventListener('click', () =>
    {
        if(turnO)
        {
            box.innerText = 'O';
            turnO = false;
        }
        else
        {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    mainContainer.classList.add('hide');

}

const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != '')
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
                {
                    console.log('winner ' + pos1Val);
                    showWinner(pos1Val);
                    disableBoxes();
                }
        }
    }
}

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', newGame);

boxes.forEach((box) => {
    addEffects(box);
});

addEffects(newGameBtn);
addEffects(resetBtn);

function addEffects(btn) {
    // Click effect
    btn.addEventListener('click', () => {
        btn.classList.add('clicked'); // Enlarge on click
        
        setTimeout(() => {
            btn.classList.remove('clicked'); // Return to normal size after 500ms
        }, 500);
    });
}


