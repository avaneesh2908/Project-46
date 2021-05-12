var bg,bg2,form,system,code,security;
var score = 0;
var gameState=intro,intro,start,end;

function preload() {
  bg= loadImage("prison.png");
  bg2 = loadImage("freeprison.png");
}

function setup() {
  createCanvas(1200,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 50, 50);
  // add code for changing the background to the treasure background

  if(score === 50) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("You have escaped the prison",250, 200);
  }

  if(gameState == intro) {
    //text("You are stuck in a prison. You have to escape the prison by answering the riddles.",200,50);
  }

  drawSprites();

  fill("red");
  text("Esacpe Prison - Riddles",450,50);
}