let grid = document.querySelector('.grid');
const button = document.querySelector('#create');


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
            box.style.minWidth = '32px';
            box.style.minHeight = '32px';
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = 'black';
            })
            row.appendChild(box);
        }
        row.style.display = 'flex';
        row.className = 'row';
        grid.appendChild(row);
    }
}


button.addEventListener('click', () =>{

    clearGrid();
    let number = parseInt(document.querySelector('input').value);
    createGrid(number);
    
});

createGrid(16);
