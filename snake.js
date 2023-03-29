
//board
const blockSize = 25;
const rows = 20;
const cols = 20; 
const canvas;
const context;

//snake head
const snakeX = blockSize * 5;
const snakeY = blocksize * 5;

window.onload = function(){
    canvas = document.getElementById("board");
    canvas.height = rows * blockSize;
    canvas.width = cols *blockSize;
    context = board.getContext("2d"); //used for drawing on the board 

    update();
}

function update(){
    context.fillStyle="black";
    context.strokeStyle="#03cffc";
    context.fillRect(0,0, board.width, board.height);

    context.fillStyle="lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}