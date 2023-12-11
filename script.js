let grid = document.querySelector('.grid');

for(let i=0; i<16; i++){
    let row = document.createElement('div');
    for(let j=0; j<16; j++){
        let box = document.createElement('div');
        box.style.border = '1px solid black';
        box.style.minWidth = '32px';
        box.style.minHeight = '32px';

        row.appendChild(box);
    }
    row.style.display = 'flex';
    grid.appendChild(row);
}