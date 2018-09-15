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




/*----- cached element references -----*/

var body = document.body;
var resetButton = document.querySelector("button");
var gameBoard = document.getElementById("game-board");


/*----- event listeners -----*/

gameBoard.addEventListener("click", function(event) {
    console.log(event.target.id);
    event.target.innerHTML = "<h5>" + event.target.id + "</h5>";
})


/*----- functions -----*/

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
});
