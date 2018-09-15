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

var playedTiles;
var resetGame;
var lastMove;
var move;


/*----- cached element references -----*/

var body = document.body;
var resetButton = document.querySelector("button");
var gameBoard = document.getElementById("game-board");
var gameTiles = document.getElementById("game-board").children;


/*----- event listeners -----*/

gameBoard.addEventListener("click", function(event) {
    switch (lastMove) {
        case "sun":
            event.target.src = "img/cloud.png";
            lastMove = "cloud";
            break;
        case "cloud":
            event.target.src = "img/sun.png";
            lastMove = "sun";
            break;
        default:
            event.target.src = "img/sun.png";
            lastMove = "sun";
            break;
    }
})


/*----- functions -----*/


function initGame() {
    playedTiles = [];
    console.log(gameTiles);
    for (let tile in gameTiles) {
        gameTiles[tile].innerHTML = "<img src='img/rainbow.png'>";
    }
}





document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
});


initGame();