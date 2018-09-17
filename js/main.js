// USER STORIES:
    // User should see empty tic-tac-toe board on page load

    // User can click any non-played cell in the grid to place
    // either a X or an O

    // User can reset the game with a reset button, which will 
    // remove all Xs and Os from board and allow user to start
    // the game again


/* ----------------------------------------------- */



/*----- constants -----*/




/*----- app's state (variables) -----*/

var lastMove;
var moves = [];
var sunMoves = [];
var cloudMoves = [];
var currentPlayer ="sun";
var currentWinner = "";



var winningMoves = [
    ["A1", "A2", "A3"], 
    ["B1", "B2", "B3"], 
    ["C1", "C2", "C3"], 
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A1", "B2", "C3"],
    ["A3", "B2", "C1"]
]




    



/*----- cached element references -----*/

var body = document.body;
var resetButton = document.querySelector("button");
var gameBoard = document.getElementById("game-board");
var gameTiles = document.getElementById("game-board").children;
var currentPlayerToken = document.getElementById("current-player-token");

/*----- event listeners -----*/

gameBoard.addEventListener("click", function(event) {

    var singleTile = event.target.parentNode.id;

    if (moves.includes(singleTile)) {
        return;  
    } else {
        moves.push(singleTile);
    }

    switch (lastMove) {
        case "sun":
            event.target.src = "img/cloud.png";
            lastMove = "cloud";
            cloudMoves.push(singleTile);
            break;
        case "cloud":
        default:
            event.target.src = "img/sun.png";
            lastMove = "sun";
            sunMoves.push(singleTile);
    }

    setCurrentPlayer();
    checkForWin();
});

resetButton.addEventListener("click", resetGame);


/*----- functions -----*/


function initGame() {
    for (let tile in gameTiles) {
        gameTiles[tile].innerHTML = "<img src='img/rainbow.png'>";
    }
    setCurrentPlayer();
}

function resetGame() {
    lastMove = "";
    moves = [];
    sunMoves = [];
    cloudMoves = [];
    currentPlayer ="sun";
    currentWinner = "";
    initGame();
}

function setCurrentPlayer() {
    if (lastMove === "sun") {
        currentPlayer = "cloud";
    } else {
        currentPlayer = "sun";
    }
    currentPlayerToken.innerHTML = "<h2>Current Player:</h2><img src='img/" + currentPlayer + ".png'>";
}

function checkForWin() {
    if (sunMoves.length >= 3 || cloudMoves.length >= 3) {
        for (var i = 0; i < winningMoves.length; i++) {
            let [a,b,c] = winningMoves[i];
            if (sunMoves.includes(a) && sunMoves.includes(b) && sunMoves.includes(c)) {
                alert(currentWinner = "SUN WINS!!");
                resetGame();
            } else if (cloudMoves.includes(a) && cloudMoves.includes(b) && cloudMoves.includes(c)) {
                alert(currentWinner = "CLOUD WINS!!");
                resetGame();
            }
        }
    }
 }


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
});


initGame();