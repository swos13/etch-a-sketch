const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const lengthContainer = document.querySelector('#length-container');
const lengthPara = document.createElement('p');
const rainbowCheckbox = document.querySelector('#rainbow');
const grid = document.querySelector('.grid');
let rainbowMode = false;


function clearGrid(){
    while(grid.firstChild)
        grid.removeChild(grid.firstChild);
}

function createGrid(number){
    for(let i=0; i<number; i++){
        let row = document.createElement('div');
        for(let j=0; j<number; j++){
            let box = document.createElement('div');
            box.style.border = '1px solid black';
            box.style.flexGrow = '1';
            box.className = 'box';
            box.onmouseenter = () => {
                setColor(box)
            };
            row.appendChild(box);
        }
        
        row.className = 'row';
        lengthPara.textContent = `Length ${number}x${number}`;
        lengthContainer.insertBefore(lengthPara, slider);
        grid.appendChild(row);
    }
}

function setColor(box){
    box.style.backgroundColor = rainbowMode ? getRandomColor() : 'black';
}

function setColorListenerOnAllBoxes(){
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.ELEMENT_NODE.onmouseenter = () => {
            setColor(box.ELEMENT_NODE);
        }
    })
}

function getRandomColor(){
    return `rgb(${Math.random() * 255},
                ${Math.random() * 255},
                ${Math.random() * 255})`
}

slider.addEventListener('input', () =>{
    clearGrid();
    createGrid(slider.value);
})


rainbowCheckbox.addEventListener('change', () => {
    rainbowMode = rainbowMode ? false : true;
})

createGrid(16);


