//DONE: slang kan botsen tegen zichzelf
//DONE: bug eruit halen als slang tegen de muur aan komt...
//DONE: slang mag niet tegen zichzelf in bewegen
//DONE: css styling verbeteren (positie midden op het scherm)
//DONE: slang hoofd en staart einde
//DONE: slang staart einde
//TODO: game is responsive
//DONE: snake steeds sneller op basis van lengte (en tijd!)

//TODO: game online zetten

let boardSize = 13;
let board = document.getElementById("board");
let keyboardInput = document.getElementById("keyboardInput");
//let direction = [0,0]; //alternatief
let direction = 0;
let foodIsEaten = true;
let snakePosition = { x: Math.floor(boardSize / 2), y: Math.floor(boardSize / 2) };
let foodPosition = { x: 0, y: 0 };

let snakePositions = [];
snakePositions.push("x" + snakePosition.x + "y" + snakePosition.y);

function drawBoard() {
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            board.innerHTML += "<div id='x" + x + "y" + y + "' class='cell'></div>";
        }
        board.innerHTML += "<br>";
    }
}

function clearBoard() {

    document.querySelectorAll('.cell').forEach(function (cell) {
        cell.className = "cell";
    });

}

//updatesnakePosition

function updatesnakePosition() {


    if (direction == 1) {
        snakePosition.y = snakePosition.y - 1;
    }
    if (direction == 2) {
        snakePosition.y = snakePosition.y + 1;
    }
    if (direction == 3) {
        snakePosition.x = snakePosition.x + 1;
    }
    if (direction == 4) {
        snakePosition.x = snakePosition.x - 1;
    }

    snakePositions.shift();
    snakePositions.push("x" + snakePosition.x + "y" + snakePosition.y);

}

//resetGame

function resetGame() {
    direction = 0;
    snakePosition = { x: Math.floor((boardSize - 1) / 2), y: Math.floor((boardSize - 1) / 2) };
    snakePositions = [];
    snakePositions.push("x" + snakePosition.x + "y" + snakePosition.y);
}

//collisionBoarderCheck

function collisionCheck() {
    //checkt of de slang buiten het speelveld komt
    if (snakePosition.x < 0 || snakePosition.y < 0 || snakePosition.x > boardSize - 1 || snakePosition.y > boardSize - 1) { resetGame() }

    //checken of slag zichzelf raakt = als positie van het hoofd hetzelfde is als een van de posities van het lijf

    let snakePositionControle = "x" + snakePosition.x + "y" + snakePosition.y;

    for (let i = 0; i < snakePositions.length - 1; i++) {
        if (snakePositionControle == snakePositions[i]) {
            resetGame();
        }
    }


}

drawSnake
function drawSnake() {
    for (let i = 0; i < snakePositions.length; i++) {
        if (i == 0) document.getElementById(snakePositions[i]).className += " bodyTail";



        if (i == snakePositions.length - 1) document.getElementById(snakePositions[i]).className += " bodyHead";
        document.getElementById(snakePositions[i]).className += " bodySnake";


    }
    document.getElementById("keyboardInput").innerHTML = snakePositions.length;
}
// function drawSnake() {
//     for (let i = 0; i < snakePositions.length; i++) {
//         if (i == 0) {
//             //TODO: staart wordt getekend

//             //document.getElementById(snakePositions[i]).className += " bodyTail";
//             //document.getElementById(snakePositions[i]).className += " bodyHeadDirection" + direction;

//         }
//         if (i == snakePositions.length - 1) {
//             //DONE: hoofd wordt getekend
//             document.getElementById(snakePositions[i]).className += " bodyHead";
//             document.getElementById(snakePositions[i]).className += " bodyHeadDirection" + direction;
//         }
//         document.getElementById(snakePositions[i]).className += " bodySnake";
//     }

//     document.getElementById("keyboardInput").innerHTML = snakePositions.length;

// }

//drawFood

function drawFood() {
    if (foodIsEaten) {
        let xRandom = Math.floor(Math.random() * (boardSize - 1));
        let yRandom = Math.floor(Math.random() * (boardSize - 1));
        foodPosition.x = xRandom;
        foodPosition.y = yRandom;
        foodIsEaten = false;
    }
    let foodPositionID = "x" + foodPosition.x + "y" + foodPosition.y;
    document.getElementById(foodPositionID).className += " food";
}

function snakeEatsFood() {
    if (snakePosition.x == foodPosition.x && snakePosition.y == foodPosition.y) {
        foodIsEaten = true;
        snakePositions.push("x" + snakePosition.x + "y" + snakePosition.y);
    }
}



//gameLoop
let timeCounter = 0;
function gameLoop() {

    updatesnakePosition();
    collisionCheck();
    clearBoard();
    drawFood();
    drawSnake();
    snakeEatsFood();

    timeCounter++;
    var timeoutTime = 550 - snakePositions.length * 30 - timeCounter / 2;
    if (timeoutTime < 100) {
        timeoutTime = 100;
    }
    setTimeout(gameLoop, timeoutTime);
}

//start Game here......

drawBoard();

// setInterVal werkt niet als je de slang sneller wilt laten gaan...
//setInterval(gameLoop, 550-snakePositions.length*100);//500 450 400 350 300

//
// TODO: werk met window.requestAnimationFrame i.p.v. setInterval
//

setTimeout(gameLoop, 0);

// keyboard controls

window.addEventListener("keydown", function (event) {

    if (event.key == "ArrowUp") {
        //direction = [0,-1]; //alternatief
        if (direction != 2) {
            direction = 1;
        }
    }
    if (event.key == "ArrowDown") {
        //direction = [0,1]; //alternatief
        if (direction != 1) {
            direction = 2;
        }
    }
    if (event.key == "ArrowRight") {
        //direction = [1,0]; //alternatief
        if (direction != 4) {
            direction = 3;
        }
    }
    if (event.key == "ArrowLeft") {
        //direction = [-1,0]; //alternatief
        if (direction != 3) {
            direction = 4;
        }

    }

    // TODO: voeg WASD toe (voor de echte gamers onder ons....)
    keyboardInput.innerHTML = "direction:" + direction;
}, true);