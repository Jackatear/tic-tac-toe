const squares = document.querySelectorAll('.sq');
const x = 'x'
const y = 'y'
const markers = [x, y]



function runGame(l) {
    squares[l].textContent = 'x'

    setTimeout(()=>{
        let computerTurn = Math.floor(Math.random()*squares.length);
        squares[computerTurn].textContent = 'y';
      }, 500);
    

}

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", ()=>{
        runGame(i)
    })

}