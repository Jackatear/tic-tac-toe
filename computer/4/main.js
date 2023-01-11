class Player {
    constructor(id, marker) {
        this.id = id;
        this.marker = marker;
        this.win = false;
    }
}

class Game {
    constructor() {
        this.grid = [0,1,2,3,4,5,6,7,8];
        this.player = 0;
    }

    playRound(i, player1, player2) {
        if (this.played == 8) {
            alert("Game Over!")
            return
        }
        
        if (this.grid[i] == player1.marker || this.grid[i] == player2.marker) {
            alert("you can't play here");
            return
        }

        this.grid[i] = player1.marker;
        squares[i].style.backgroundColor = 'blue';
        this.played++;
        console.log(this.grid)

        if (this.played == 9) {
            alert("Game Over!")
            return
        }

        setTimeout(()=>{

            let available = []

            for (let i = 0; i < this.grid.length; i++){
                if (this.grid[i] != player1.marker && this.grid[i] != player2.marker) {
                    available.push(i)
                }
            }

            let j = Math.floor(Math.random()*available.length)
            console.log(j)

            this.grid[available[j]] = player2.marker;
            this.played++;
            console.log(this.grid)
            squares[available[j]].style.backgroundColor = 'red';


            // let check = true;
            // while (check == true){

            //     let j = Math.floor(Math.random()*this.grid.length);

            //     if (this.grid[j] != player1.marker && this.grid[j] != this.player.marker) {
            //         squares[j].style.backgroundColor = 'green';
            //         this.grid[j] = player2.marker;
            //         player2.played++;
            //         check = false;
            //     } 

            // }
        }, 300); 
    }

    checkHorizontal() {
        if (this.grid[0] == this.grid[1] && this.grid[1] ==  this.grid[2]){
            return 1;
        };
        if (this.grid[3] == this.grid[4] && this.grid[3] ==  this.grid[5]){
            return 3;
        };
        if (this.grid[6] == this.grid[7] && this.grid[6] ==  this.grid[8]){
            return 6;
        };
    
        return false
    }

    checkDiagonals() {
        if (this.grid[0] == this.grid[4] && this.grid[0] ==  this.grid[8]){
            return 1;
        };
        if (this.grid[2] == this.grid[4] && this.grid[2] ==  this.grid[6]){
            return 2;
        };
    
        return false
    }

    checkVerticals() {
        if (this.grid[0] == this.grid[3] && this.grid[0] ==  this.grid[6]){
            return 3;
        };
        if (this.grid[1] == this.grid[4] && this.grid[1] ==  this.grid[7]){
            return 1;
        };
        if (this.grid[2] == this.grid[5] && this.grid[2] ==  this.grid[8]){
            return 2;
        };
    
        return false
    }
};

const squares = document.querySelectorAll('.sq');

const game = new Game();
const player1 = new Player(0, 'X')
const player2 = new Player(1, 'O')

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        game.playRound(i, player1, player2);
        if (game.checkDiagonals()){
            setTimeout(()=>{
                alert("winner")
            }, 300); 
        };
        if (game.checkHorizontal()){
            setTimeout(()=>{
                alert("winner")
            }, 300); 
        };
        if (game.checkVerticals()){
            setTimeout(()=>{
                alert("winner")
            }, 300); 
        };
    })
}