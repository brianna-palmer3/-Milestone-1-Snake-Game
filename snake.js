$("#game-container").hide;
$("#game-over").hide;


function hideGame() {
    $(".snake-title").hide();
    $(".snake-p").hide();
    $("#game-container").hide();
    $("#game-over-container").show();
}
function playGame(){
    hideMenu();
        $("#game-over").hide();
    $("#game-over").show();
}

const canvas =document.querySelector("#snakeGame");
const ctx =canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

//color of snake
const snakeColor = #03cffc;

//color of food
const foodColor = #e31b78;

//score
const score = 0;

//setup
(function setup(){
    snake = new Snake();
    food = new Food();
    food.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        food.draw();
        snake.update();
        snake.draw();

        if (snake.eat(food)){
            food.pickLocation();
        }

        document.querySelector('.snake-score').innerText = snake.total;
        snake.checkColision();

    },250);
})();

//event listener
window.addEventListener("keydown",evt => {
    const direction = evt.key.replace("Arrow", "");
    snake.changeDirection(direction);
});

//snake
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function(){
        ctx.fillStyle = snakeColor;

        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    };
    this.update = function(){
        for (leti=0; i<this.tail.length -1; i++){
            this.tail [i+1];
        }

        this.tail[this.total - 1] = {x: this.x, y: this.y};

        if (this.x > canvas.width){
            this.total = 0;
                this.tail = [];
                this.x = 0;
                this.y = 0;
            this.x += this.xSpeed;
                hideGame();
        }
        if (this.x < 0){
            this.total = 0;
                this.tail = [];
                this.x = 0;
                this.y = 0;
            this.x += this.xSpeed;
                hideGame();
        }
        if (this.y < 0){
            this.total = 0;
                this.tail = {};
                this.x = 0;
                this.y = 0;
            this.x += this.xSpeed;
                hideGame();
        }
    }
};

//change direction
this.changeDirection = function(direction){
    switch(direction){
        case "Up":
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
            break;
        case "Down":
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
            break;
        case "Left":
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
            break;
        case "Right":
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
            break;
    }
};
//eating
this.eat = function(food){
    if(this.x === food.x && this.y){
        this.total++;
        return true;
    }
};

//checkcollision
this.checkcollision = function(){
    for (var i =0; i<this.tail.length; i++){
        if (this.x === this.tail[i].x && this.y === this.tail[i].y){
            console.log("Coliding");
                this.total = 0;
                this.tail = [];
                this.x = 0;
                this.y = 0;
                hideGame();
        }
    }
}
//button controls
function Up(){
    snake.xSpeed = 0;
        snake.ySpeed = -scale * 1; 
}
function Down(){
    snake.xSpeed = 0;
        snake.ySpeed = scale *1;
}
function Left(){
    snake.xSpeed = -scale * 1;
        snake.ySpeed = 0;
}
function Right(){
    snake.xSpeed = scale * 1;
        snake.ySpeed = 0;
}

//food
function Food(){
    this.x;
    this.y;

    this.pickLocation = function(){
        this.x(Math.floor(Math.random()* rows - 1) + 1) * scale;
        this.y(Math.floor(Math.random()* columns - 1) + 1) * scale;
    }
    this.draw = function(){
        ctx.fillStyle = foodColor;
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}

