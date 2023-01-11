const squares = document.querySelectorAll('.sq')

const grid = ['.','.','.','.','.','.','.','.','.']

class Player{
    constructor(){
        this.played = 0;
    }
}

const player1 = new Player();
const player2 = new Player();

function play(i) {
    squares[i].style.backgroundColor = 'red';
    grid[i] = 'O';
    player1.played++

    if (player1.played == 5){
        alert("drew")
        return;
    } else {
        setTimeout(()=>{
        
            while (true){
                let j = Math.floor(Math.random()*squares.length);
                if (grid[j] == '.') {
                    squares[j].style.backgroundColor = 'black';
                    grid[j] = 'X';
                    player2.played++;
                    return false;
                } 
            }
        }, 300);    
    }
}



for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', ()=>{
        play(i);    
        console.log(grid);
    })
}