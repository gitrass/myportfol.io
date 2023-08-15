//ball
let ballX = 300;
let ballY = 200;
let ballSize = 20;
let ballRadius = ballSize / 2 ;
let ballXSpd = 7;
let ballYSpd = 7;

//player
let playerX = 2;
let playerY = 150;
let playerH = 90;
let playerW = 10;
let playerSpd = 6;

//player2
let player2 = true;
let player2X = 589;
let player2Y = 150;

//collision
collided = false;

//score
let p1Score = 0;
let p2Score = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  gui();
  ball();
  walls();
  player(playerX, playerY);
  player(player2X, player2Y);
  collision(player2X, player2Y);
  collision(playerX, playerY);
  //bot();
}

//functions
function gui(){
  fill(255)
  text(p1Score, 270, 50)
  text(p2Score, 330, 50)
}

function ball(){
  circle(ballX, ballY, ballSize);
  ballX += ballXSpd;
  ballY += ballYSpd;
}

function player(x, y){
  rect(x, y, playerW, playerH);
  if (keyIsDown(87)) {
    playerY -= playerSpd;
  }
  if(keyIsDown(83)) {
    playerY += playerSpd;
  }
  if(player2){
    if(keyIsDown(UP_ARROW)) {
      player2Y -= playerSpd;
    }
    if(keyIsDown(DOWN_ARROW)) {
      player2Y += playerSpd;
    }
  }
}

function walls(){
  if(ballX+ballRadius>width)
    {p1Score += 1; ballXSpd *= -1;ballX = 580;}
  if(ballX-ballRadius < 0)
  {p2Score += 1; ballXSpd *= -1;ballX=20;}

  if(ballY+ballRadius>height || ballY-ballRadius <0){
    ballYSpd *= -1;
  }
}

function collision(x, y){
  collided = collideRectCircle(x, y, playerW, playerH, ballX, ballY, ballRadius);
  if (collided){
    ballXSpd *= -1;
  }
}
