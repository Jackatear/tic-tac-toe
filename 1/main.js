let counter = 0;
const tiles = document.querySelectorAll(".sq")
let gridArray = [0,1,2,3,4,5,6,7,8,9];

const player1 = {
    marker: 'X',
    played: 0,
    win: false
}

const player2 = {
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
        return true;
    };
    if (gridArray[3] == gridArray[4] && gridArray[3] ==  gridArray[5]){
        return true;
    };
    if (gridArray[6] == gridArray[7] && gridArray[6] ==  gridArray[8]){
        return true;
    };

    return false
}

function checkDiagonals() {
    if (gridArray[1] == gridArray[4] && gridArray[1] ==  gridArray[8]){
        return true;
    };
    if (gridArray[2] == gridArray[4] && gridArray[2] ==  gridArray[6]){
        return true;
    };

    return false
}

function checkVerticals() {
    if (gridArray[0] == gridArray[3] && gridArray[0] ==  gridArray[6]){
        return true;
    };
    if (gridArray[1] == gridArray[4] && gridArray[1] ==  gridArray[7]){
        return true;
    };
    if (gridArray[2] == gridArray[5] && gridArray[2] ==  gridArray[8]){
        return true;
    };

    return false
}





for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", () => {
       
        counter++;
        let game = new whosTurn(counter);
        tiles[i].textContent = game.marker;
        gridArray[tiles[i].id] = game.marker;
        console.log(gridArray);
        if (checkDiagonals()){
            console.log("winner")
        }
        if (checkVerticals()){
            console.log("winner")
        }
        if (checkHorizontals()){
            console.log("winner")
        }   
    })
};

