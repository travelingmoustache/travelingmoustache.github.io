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

var floor = 300;
var ceiling = 300;

var gameMode = 1;
var players = 1;

var money = [1000,1000,1000,1000];
var bet = 50;

var timer = 0;
var screenW = 1200;
var screenH = 900;






function preload() {
  face = loadImage('images/Asteroid11.png');
  cat = loadImage('images/Asteroid2.png');
  crabBlue = loadImage('images/Crab BLUE.png');
  crab = loadImage('images/testcrab.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  floor = windowHeight - 240;
  ceiling = windowHeight - 300;

  screenW = windowWidth;
  screenH = windowHeight;

}

function draw() {
  if (gameMode == 1){
    background(0, 100, 50);
    textSize(windowWidth / 20);
    text("CRAB STAB 2", windowWidth / 3, windowHeight / 4);
    fill(0,155,100);

    textSize(windowWidth / 30);
    text("NUMBER OF PLAYERS", windowWidth / 3, windowHeight / 2);
    text(players, windowWidth / 2, windowHeight / 2 + 40);
    fill(0,55,100);


  }
  if (gameMode == 2){
    timer += 1;

    background(0, 100, 50);
    textSize(windowWidth / 20);
    text("Your Bet", windowWidth / 3, windowHeight / 4);
    fill(0,155,100);

    textSize(windowWidth / 30);
    text(bet, windowWidth / 3, windowHeight / 2);
    fill(0,55,100);

  }
  if (gameMode == 3){
  background(0, 100, 50);

  stroke(55,55,99);
  fill(col,0,0);
  rect(50,40,crab1.hp*2,20);

  stroke(55,55,99);
  fill(col,0,0);
  rect(windowWidth - 300,40,crab2.hp*2,20);

  //stroke(0,255,255);
  //fill(255,0,col);
  //ellipse(200,100,100,200);

  //fill(col,0,col);
  //ellipse(50,80,10,30);

  //if (random(0, 100) > 98){
    //enemies[count] = new Enemy();
    //count += 1;
  //}

  //for (let i = 0; i < enemies.length; i++) {
    //image(cat, enemies[i].x, enemies[i].y);
  //}


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
  crab1.draw();
  crab2.draw();
  crabMovement(crab1);
  crabMovement(crab2);
  if (crab1.hp <= 0 || crab2.hp <= 0){
    resetCrabs();
    }
  }
}

class Enemy {
  constructor() {
    this.x = random(0, 600);
    this.y = random(0, 200);
  }
}

class Crab {
  constructor(xPos, crab, speed, strength){
    this.x = xPos;
    this.y = floor;
    this.moveFrame = 0;
    this.mustache = Math.floor(Math.random() * 10);
    this.hp = 100;
    this.strength = strength;
    this.crab = crab;
    this.speed = speed;
    this.moving = false;
    this.moveTimer = 0;
    this.direction = 1;
    this.attacking = false;
    this.attackTimer = 0;
    this.attackFrame = 0;
    this.attacked = false;
    this.jumping = false;
    this.blocking = false;

  }
  draw(){
    if (this.attacking){
      this.attackTimer += 1;
      if (this.attackTimer > 30){
        this.attackTimer = 0;
        this.attacking = false;
      }
    }
    if (this.attackTimer > 10 && this.attackTimer < 16){
      this.attackFrame = 1;
    }
    else if (this.attackTimer > 15){
      this.attackFrame = 2;
      this.attacked = true;
    }
    else{
      this.attackFrame = 0;
    }

    if (this.moving){
      this.moveTimer += 1;
    }
    if (this.moveTimer > 40){
      this.moveTimer = 0;
      if (Math.random() > .87){
        this.direction = -1;
      }
      else{
        this.direction = 1;
      }
    }
    if (this.moveTimer > 20){
      this.moveFrame = 1;
    }
    else{
      this.moveFrame = 0;
    }

    this.img = image(crab, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 600);
    this.img = image(crab, this.x, this.y, 200, 200, 600 * 2, 0, 600, 600);
    this.img = image(crab, this.x, this.y, 200, 200, 600 * 3, 0, 600, 600);
    this.img = image(crab, this.x, this.y, 200, 200, 600 * (this.attackFrame + 4), 0, 600, 600);
    this.img = image(crab, this.x, this.y, 200, 200, 600 * (this.mustache + 7), 0, 600, 600);
    if (this.blocking){
      image(crab, this.x, this.y, 200, 200, 600 * 18, 0, 600, 600);
    }
  }
}

var crab1 = new Crab(screenW / 3, 1, Math.random() * 2 + .6, Math.floor(Math.random() * 10 + 5));
var crab2 = new Crab(screenW * .6, -1, Math.random() * -2 - .6, Math.floor(Math.random() * 10 + 5));


function mousePressed() {
  if (gameMode == 1){
    if (mouseX > windowWidth / 2){
      players += 1;
    }
    else{
      players -= 1;
    }
    if (mouseY > windowHeight * .75){
      gameMode = 2;
    }
  }
  if (gameMode == 2){
    if (mouseX > windowWidth / 2){
      if (bet < money[0]){
      bet += 50;
      }
    }
    else{
      if (bet > 50){
        bet -= 50;
      }
    }
    if (mouseY > windowHeight * .75 && timer > 20){
      gameMode = 3;
    }

  }
  if (gameMode == 3){
    newX = mouseX;
    newY = mouseY;
  }
}

function crabMovement(crab){
  a = random(1, 1000);
  if (crab1.x < crab2.x - 60 && !crab.blocking && !crab.attacking){
    crab.moving = true;
    if (random(1, 1000) > 200){
      crab.x += crab.speed * crab.direction;
    }
  }
  else{
    crab.moving = false;
  }
  // randomly jump
  if (random(1, 1000) > 970 && crab.y >= floor && !crab.blocking){
    crab.jumping = true;
  }
  if (crab.jumping){
    if (crab.y > ceiling){
    crab.y -= 2;
    }
    if (crab.y <= ceiling){
      crab.jumping = false;
    }
  }
    if (!crab.jumping){
      if (crab.y < floor){
        crab.y += 2;
      }
    }

    // crab attackss
    if (crab2.x - crab1.x < 100 && !crab.attacking && !crab.blocking){
      if (random(1, 1000) > 900){
        crab.attacking = true;
      }
    }

      if (crab.crab == 1 && crab.attacked){
        if (!crab2.blocking){
          crab2.hp -= crab1.strength / 10;
          crab2.x += crab1.strength / 1.5;
          crab.attacked = false;
          }
        else{
          crab2.hp -= crab1.strength / 20;
          crab.attacked = false;
          }
        }
      if (crab.crab == -1 && crab.attacked){
        if (!crab1.blocking){
          crab1.hp -= crab2.strength / 10;
          crab1.x -= crab2.strength / 1.5;
          crab.attacked = false;
          }
        else{
          crab1.hp -= crab2.strength / 20;
          crab.attacked = false;
          }
        }

    // crab blocks
    if (random(0, 1000) > 995 && !crab.attacking){
      crab.blocking = true;
    }
    if (crab.blocking){
      if (random(0, 1000) > 980){
        crab.blocking = false;
      }
    }


}

function resetCrabs(){
  crab1 = new Crab(screenW / 3, 1, Math.random() * 2 + .4, Math.floor(Math.random() * 10 + 5));
  crab2 = new Crab(screenW *.6, -1, Math.random() * -2 - .4, Math.floor(Math.random() * 10 + 5));
  crab1.mustache = Math.floor(Math.random() * 10);
  crab2.mustache = Math.floor(Math.random() * 10);
  gameMode = 2;
  timer = 0;
}
