var x = 10;
var y = 15;
var newX = 0;
var newY = 0;
var speedX = 4;
var speedY = 4;
var col = 0;
var face;
var cat;
var enemies = [];
var count = 0;


function preload() {
  face = loadImage('images/Asteroid11.png');
  cat = loadImage('images/Asteroid2.png');

}

function setup() {
  createCanvas(640, 480);

}

function draw() {
  background(0, 100, 50);

  stroke(55,55,99);
  fill(col,0,0);
  rect(300,300,100,200);

  stroke(0,255,255);
  fill(255,0,col);
  ellipse(200,100,100,200);

  fill(col,0,col);
  ellipse(50,80,10,30);

  if (random(0, 100) > 98){
    enemies[count] = new Enemy();
    count += 1;
  }

  for (let i = 0; i < enemies.length; i++) {
    image(cat, enemies[i].x, enemies[i].y);
  }


  col = map(mouseX, 0, windowWidth, 0, 255);

  if (x < newX) {
    x += speedX;
  }
  if (x > newX) {
    x -= speedX;
  }
  if (y < newY){
    y += speedY;
  }
  if (y > newY){
    y -= speedY;
  }
  image(face, x, y);
}

class Enemy {
  constructor() {
    this.x = random(0, 600);
    this.y = random(0, 200);
  }
}
function mousePressed() {
newX = mouseX;
newY = mouseY;

}
