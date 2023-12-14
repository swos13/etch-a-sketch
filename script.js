let grid = document.querySelector('.grid');
const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const lengthContainer = document.querySelector('#length-container');
let lengthPara = document.createElement('p');
const rainbowCheckbox = document.querySelector('#rainbow');

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
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = 'black';
            })
            row.appendChild(box);
        }
        
        row.className = 'row';
        lengthPara.textContent = `${number}x${number}`;
        lengthContainer.insertBefore(lengthPara, slider);
        grid.appendChild(row);
    }
}

slider.addEventListener('input', () =>{
    clearGrid();
    createGrid(slider.value);
})

createGrid(16);


