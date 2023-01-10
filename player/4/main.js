let counter = 0;
const tiles = document.querySelectorAll(".sq")
let gridArray = [0,1,2,3,4,5,6,7,8,9];
let topBar = document.querySelector(".player");
const winnerBanner = document.querySelector(".winner-banner");
const winnerName = document.querySelector(".winner-name");
const refreshButton = document.querySelector(".reset");

const player1 = {
    name: "Player 1",
    marker: 'X',
    played: 0,
    win: false
}

const player2 = {
    name: "Player: 2",
    marker: 'O',
    played: 0,
    win: false
}

function whosTurn(x)  {
    if (x%2==0){
        this.marker = 'O'
    }
    else {
        this.marker = 'X'
    }
}

function checkHorizontals() {
    if (gridArray[0] == gridArray[1] && gridArray[1] ==  gridArray[2]){
        return 1;
    };
    if (gridArray[3] == gridArray[4] && gridArray[3] ==  gridArray[5]){
        return 3;
    };
    if (gridArray[6] == gridArray[7] && gridArray[6] ==  gridArray[8]){
        return true;
    };

    return false
}

function checkDiagonals() {
    if (gridArray[0] == gridArray[4] && gridArray[0] ==  gridArray[8]){
        return 1;
    };
    if (gridArray[2] == gridArray[4] && gridArray[2] ==  gridArray[6]){
        return 2;
    };

    return false
}

function checkVerticals() {
    if (gridArray[0] == gridArray[3] && gridArray[0] ==  gridArray[6]){
        return 3;
    };
    if (gridArray[1] == gridArray[4] && gridArray[1] ==  gridArray[7]){
        return 1;
    };
    if (gridArray[2] == gridArray[5] && gridArray[2] ==  gridArray[8]){
        return 2;
    };

    return false
}

function displayWinner(x){
    winnerBanner.style.display = "block";  
    let winningMarker = gridArray[x];
    if (player1.marker == winningMarker){
        winnerName.textContent = "Player 1";
        player1.win = true;
    } else {
        winnerName.textContent = "Player 2"
        player2.win = true;
    };
    
}



for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", () => {
        if (gridArray[tiles[i].id] == 'O' || gridArray[tiles[i].id] == 'X') {
            alert("already been clicked")

        } else {
            counter++;
            let game = new whosTurn(counter);
            tiles[i].textContent = game.marker;
            if (player1.marker == game.marker) {
                player1.played++;
            }
            else {
                player2.played++;
            }
            gridArray[tiles[i].id] = game.marker;
            console.log(gridArray);
            if (checkDiagonals() != false){
    
                displayWinner(checkDiagonals());
            }
            if (checkVerticals() != false){
    
                displayWinner(checkVerticals())
            }
            if (checkHorizontals() != false){
    
                displayWinner(checkHorizontals());
            }   
            if (player1.played == 5){
                winnerBanner.style.display = "block";
                winnerName.textContent = "NOBODY"

            }
            
            if (player1.win == false && player2.win == false){
                if (game.marker == 'O') {
                    topBar.style.backgroundColor = 'green';
                    topBar.textContent = "Player 1";
                }
                else {
                    topBar.style.backgroundColor = 'red';
                    topBar.textContent = "Player 2";
                }
            } else {
                topBar.style.backgroundColor = 'black';
            }

        }
 
    })
};

refreshButton.addEventListener("click", () => {
    window.location.reload();
})

