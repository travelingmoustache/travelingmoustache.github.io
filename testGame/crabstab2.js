var x = 10;
var y = 100;
var newX = 0;
var newY = 0;
var speedX = 12;
var speedY = 4;
var col = 0;
var face;
var cat;
var enemies = [];
var count = 0;

var basement = 300;
var ceiling = 300;

var gameMode = 1;
var players = 1;
var betDisplay = 0;
var chooseCrab = false;
var reward = false;

var money = [1000,1000,1000,1000];
var bets = [50,50,50,50];
var whichCrab = [0,0,0,0];
var names = ["Jimbo", "Bob", "Agnes", "Trump"];

var timer = 0;
var dadTimer = 0;
var dadFrame = 9;
var dadPhase = 1;
var deadTimer = 0;
var screenW = 1200;
var screenH = 900;



function preload() {
  face = loadImage('images/ref.png');
  hats = loadImage('images/hats.png');
  hatsFlipped = loadImage('images/hatsFlipped.png');
  //cat = loadImage('images/Asteroid2.png');
  crabBlue = loadImage('images/crabBlue.png');
  crabBlueFlipped = loadImage('images/crabBlueFlipped.png');
  crabRed = loadImage('images/crabRed.png');
  crabRedFlipped = loadImage('images/crabRedFlipped.png');
  crabYellow = loadImage('images/crabYellow.png');
  crabYellowFlipped = loadImage('images/crabYellowFlipped.png');
  crabBlack = loadImage('images/crabBlack.png');
  crabBlackFlipped = loadImage('images/crabBlackFlipped.png');
  crabGray = loadImage('images/crabGray.png');
  crabGrayFlipped = loadImage('images/crabGrayFlipped.png');
  crabBrown = loadImage('images/crabBrown.png');
  crabBrownFlipped = loadImage('images/crabBrownFlipped.png');
  crabSky = loadImage('images/crabSky.png');
  crabSkyFlipped = loadImage('images/crabSkyFlipped.png');
  crabPurple = loadImage('images/crabPurple.png');
  crabPurpleFlipped = loadImage('images/crabPurpleFlipped.png');
  crabWhite = loadImage('images/crabWhite.png');
  crabWhiteFlipped = loadImage('images/crabWhiteFlipped.png');
  crabGreen = loadImage('images/crabGreen.png');
  crabGreenFlipped = loadImage('images/crabGreenFlipped.png');
  dad0 = loadImage('images/000.png');
  dad1 = loadImage('images/001.png');
  dad2 = loadImage('images/002.png');
  dad3 = loadImage('images/003.png');
  dad4 = loadImage('images/004.png');
  dad5 = loadImage('images/005.png');
  dad6 = loadImage('images/006.png');
  dad7 = loadImage('images/007.png');
  dad8 = loadImage('images/008.png');
  dad9 = loadImage('images/009.png');
  dad10 = loadImage('images/010.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  basement = windowHeight - 240;
  ceiling = windowHeight - 300;

  screenW = windowWidth;
  screenH = windowHeight;
  bgIMG2 = dad9;

}

function draw() {
  if (gameMode == 1){
  bgIMG = image(dad10, 0, 0, windowWidth, windowHeight);
  bgIMG = image(dad9, 0, 0, windowWidth, windowHeight);
    fill(200,200,100);
    textSize(windowWidth / 20);
    text("CRAB STAB 2", windowWidth / 3, windowHeight / 4);

    fill(200,50,100);
    textSize(windowWidth / 30);
    text("NUMBER OF PLAYERS", windowWidth / 3, windowHeight / 2);
    text("<< "+players+" >>", windowWidth / 2 - 90, windowHeight / 2 + 40);


    fill(100,255,200);
    rect(windowWidth / 2 - 70, windowHeight*.77, 200, 100);

    textSize(windowWidth / 20);
    fill(0,55,100);
    text("OK!", windowWidth / 2 - 40, windowHeight * .88);



  }
  if (gameMode == 2){
    timer += 1;
    bgIMG = image(dad10, 0, 0, windowWidth, windowHeight);
    bgIMG = image(dad9, 0, 0, windowWidth, windowHeight);

    if (!chooseCrab){
      fill(200,200,100);
      textSize(windowWidth / 20);
      text(names[betDisplay]+", Your Bet", windowWidth / 3, windowHeight / 4);

      fill(200,50,100);
      textSize(windowWidth / 30);
      text("<< "+bets[betDisplay]+" >>", windowWidth * .42, windowHeight / 2);

      fill(100,255,200);
      rect(windowWidth / 2 - 70, windowHeight*.77, 200, 100);

      textSize(windowWidth / 20);
      fill(0,55,100);
      text("OK!", windowWidth / 2 - 40, windowHeight * .88);
    }
    else{
      textSize(windowWidth / 20);
      text(names[betDisplay]+", Your Crab", windowWidth / 3, windowHeight / 4);
      fill(0,155,100);
    }

    crab1.draw();
    crab2.draw();

  }
  if (gameMode == 3){
  //bgIMG = image(dadBG, 0, 0, windowWidth, windowHeight, 0, 0, 600, 301);
  //bgIMG = image(dadBG, 0, 0, windowWidth, windowHeight, 600 * dadFrame, 0, 600, 301);
  //background(0,0,0);
  bgIMG = image(dad10, 0, 0, windowWidth, windowHeight);
  bgIMG = image(bgIMG2, 0, 0, windowWidth, windowHeight);

    if (dadPhase > 1){
      dadTimer += 1;
    }

    if (dadPhase == 1){
      bgIMG2 = dad9;
      if (random(0, 999) > 997){
        dadPhase = 2;
        dadTimer = 0;
      }
      else if (random(0, 999) > 997){
        dadPhase = 3;
        dadTimer = 0;
      }
      else if (random(0, 999) > 997){
        dadPhase = 4;
        dadTimer = 0;
      }
    }

    if (dadPhase == 2){ // gun gun
      if (dadTimer < 50){
        bgIMG2 = dad5;
      }
      else if (dadTimer >= 50 && dadTimer < 90){
        bgIMG2 = dad7;
      }
      else if (dadTimer >= 90 && dadTimer < 120){
        bgIMG2 = dad6;
      }
      else if (dadTimer >= 120 && dadTimer < 160){
        bgIMG2 = dad7;
      }
      else if (dadTimer >= 160){
        bgIMG2 = dad8;
      }
      if (dadTimer > 200){
        dadTimer = 0;
        if (random(0, 99) > 50){
          dadPhase = 1;
        }
      }
    }

    if (dadPhase == 3){  //dance dance
      if (dadTimer < 15){
        bgIMG2 = dad2;
      }
      else if (dadTimer >= 15 && dadTimer < 30){
        bgIMG2 = dad3;
      }
      else if (dadTimer >= 30){
        bgIMG2 = dad4;
      }
      if (dadTimer > 45){
        dadTimer = 0;
        if (random(0, 99) > 80){
          dadPhase = 1;
        }
      }
    }

    if (dadPhase == 4){
      if (dadTimer < 10){
        bgIMG2 = dad0;
      }
      else if (dadTimer >= 10){
        bgIMG2 = dad1;
      }
      if (dadTimer > 20){
        dadTimer = 0;
        if (random(0, 99) > 88){
          dadPhase = 1;
        }
      }
    }

    if (crab1.hp > 0){
      stroke(55,55,99);
      fill(col,col*.5,col*.5);
      rect(50,40,crab1.hp*2,20);
    }
    if (crab2.hp > 0){
      stroke(55,55,99);
      fill(col,col*.5,col*.5);
      rect(windowWidth - 300,40,crab2.hp*2,20);
    }

    for (let i = 0; i < money.length; i++) {
      pp = 0;
      textSize(windowWidth / 40);
      fill(255,255,255);
      if (whichCrab[i] == 0){
        pp = windowWidth*.02;
      }
      else{
        pp = windowWidth*.74;
      }
      if (money[i] > 0){
        text(names[i]+" "+money[i]+"("+bets[i]+")", pp, windowHeight*.2 + (i*40));
      }
    }

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
    image(face, x, y);
    if (crab1.hp > 0){
      crab1.draw();
      }
    if (crab2.hp > 0){
      crab2.draw();
    }
    crabMovement(crab1);
    crabMovement(crab2);
    if (crab1.hp <= 0 || crab2.hp <= 0){
      deadTimer += 1;
      if (!reward){
        for (let i = 0; i < names.length; i++){
          if (crab1.hp > 0 && whichCrab[i] == 0){
            money[i] += bets[i];
          }
          else if (crab2.hp > 0 && whichCrab[i] == 1){
            money[i] += bets[i];
          }
          else{
            money[i] -= bets[i];
          }
        }
      }
      reward = true;
      if (deadTimer > 130){
        if (crab1.hp < 0){
          crab1 = new Crab(screenW / 3, 1, Math.random() * 2 + .9, Math.floor(Math.random() * 10 + 5));
        }
        if (crab2.hp < 0){
          crab2 = new Crab(screenW *.6, -1, Math.random() * -2 - .9, Math.floor(Math.random() * 10 + 5));
        }
        resetCrabs();
      }
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
    this.y = basement;
    this.moveFrame = 0;
    this.mustache = Math.floor(Math.random() * 11);
    this.hat = Math.floor(Math.random() * 12);
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
    this.color = Math.floor(Math.random() * 10);

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
    if (this.moveTimer > 6){
      this.moveTimer = 0;
      if (this.y >= basement){
        this.y -= 5;
      }
      if (Math.random() > .87){
        this.direction = -1;
      }
      else{
        this.direction = 1;
      }
    }
    if (this.moveTimer > 3){
      this.moveFrame = 1;
    }
    else{
      this.moveFrame = 0;
    }

    if (this.crab == 1){
      if (this.color == 0){
        this.img = image(crabBlue, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabBlue, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabBlue, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabBlue, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabBlue, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 1){
        this.img = image(crabGreen, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabGreen, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabGreen, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabGreen, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabGreen, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 2){
        this.img = image(crabBlack, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabBlack, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabBlack, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabBlack, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabBlack, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 3){
        this.img = image(crabGray, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabGray, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabGray, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabGray, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabGray, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 4){
        this.img = image(crabWhite, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabWhite, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabWhite, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabWhite, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabWhite, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 5){
        this.img = image(crabBrown, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabBrown, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabBrown, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabBrown, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabBrown, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 6){
        this.img = image(crabPurple, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabPurple, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabPurple, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabPurple, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabPurple, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 7){
        this.img = image(crabSky, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabSky, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabSky, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabSky, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabSky, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 8){
        this.img = image(crabRed, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabRed, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabRed, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabRed, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabRed, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 9){
        this.img = image(crabYellow, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabYellow, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabYellow, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabYellow, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabYellow, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
    this.img = image(hats, this.x, this.y, 200, 200, 600 * (this.hat + 11), 0, 600, 603);
    this.img = image(hats, this.x, this.y, 200, 200, 600 * (this.mustache), 0, 600, 603);
  }
  else{
    if (this.color == 0){
      this.img = image(crabBlueFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
      this.img = image(crabBlueFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
      this.img = image(crabBlueFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
      if (this.blocking){
        this.img = image(crabBlueFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
        }
      else{
        this.img = image(crabBlueFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
        }
    }
      if (this.color == 1){
        this.img = image(crabGreenFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabGreenFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabGreenFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabGreenFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabGreenFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 2){
        this.img = image(crabBlackFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabBlackFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabBlackFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabBlackFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabBlackFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 3){
        this.img = image(crabGrayFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabGrayFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabGrayFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabGrayFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabGrayFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 4){
        this.img = image(crabWhiteFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabWhiteFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabWhiteFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabWhiteFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabWhiteFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 5){
        this.img = image(crabBrownFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabBrownFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabBrownFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabBrownFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabBrownFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 6){
        this.img = image(crabPurpleFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabPurpleFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabPurpleFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabPurpleFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabPurpleFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 7){
        this.img = image(crabSkyFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabSkyFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabSkyFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabSkyFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabSkyFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 8){
        this.img = image(crabRedFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabRedFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabRedFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabRedFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabRedFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
      if (this.color == 9){
        this.img = image(crabYellowFlipped, this.x, this.y, 200, 200, 600 * this.moveFrame, 0, 600, 603);
        this.img = image(crabYellowFlipped, this.x, this.y, 200, 200, 600 * 3, 0, 600, 603);
        this.img = image(crabYellowFlipped, this.x, this.y, 200, 200, 600 * 4, 0, 600, 603);
        if (this.blocking){
          this.img = image(crabYellowFlipped, this.x, this.y, 200, 200, 600 * 8, 0, 600, 603);
          }
        else{
          this.img = image(crabYellowFlipped, this.x, this.y, 200, 200, 600 * (this.attackFrame + 5), 0, 600, 603);
          }
    }
    this.img = image(hatsFlipped, this.x, this.y, 200, 200, 600 * (this.hat + 11), 0, 600, 603);
    this.img = image(hatsFlipped, this.x, this.y, 200, 200, 600 * (this.mustache), 0, 600, 603);
  }

  }
}

var crab1 = new Crab(screenW / 3, 1, Math.random() * 2 + 2.5, Math.floor(Math.random() * 10 + 5));
var crab2 = new Crab(screenW * .6, -1, Math.random() * -2 - 2.5, Math.floor(Math.random() * 10 + 5));


function mousePressed() {
  if (gameMode == 1){
    if (mouseX > windowWidth / 2 && mouseY < windowHeight * .75 && players < 2){
      players += 1;
    }
    else if (mouseX <= windowWidth / 2 && mouseY < windowHeight * .75 && players > 1){
      players -= 1;
    }
    else if (mouseY >= windowHeight * .75){
      gameMode = 2;
    }
  }
  if (gameMode == 2){
    y = windowHeight * .6;
    if (chooseCrab){
      if (mouseX > windowWidth / 2){ //click right
        whichCrab[betDisplay] = 1; //choosing right crab
        if (players == 1 || betDisplay == 1){
          gameMode = 3;
          for (let i = 0; i < names.length - players; i++){
            bets[i + players] = Math.floor(random(1,money[i+players] / 50))*50+50;
            whichCrab[i + players] = Math.floor(random(0, 2));
            if (money[i+players] == 0){
              bets[i+players] = 0;
            }
          }
        }
        else{
          betDisplay = 1;
          chooseCrab = false;
          timer =  0;
        }
      }
      else{ // click left
        whichCrab[betDisplay] = 0; //choosing left crab
        if (players == 1 || betDisplay == 1){
          gameMode = 3;
          for (let i = 0; i < names.length - players; i++){
            bets[i + players] = Math.floor(random(1,money[i+players] / 50))*50+50;
            whichCrab[i + players] = Math.floor(random(0, 2));
            if (money[i+players] == 0){
              bets[i+players] = 0;
            }
          }
        }
        else{
          betDisplay = 1;
          chooseCrab = false;
          timer = 0;
        }
      }
    }
    else if (!chooseCrab){ //setting bets
      if (mouseX > windowWidth / 2 && mouseY < windowHeight*.75){
          if (bets[betDisplay] < money[betDisplay]){
            bets[betDisplay] += 50;
          }
        }
      else if (mouseX <= windowWidth / 2 && mouseY < windowHeight*.75){
          if (bets[betDisplay] > 50){
            bets[betDisplay] -= 50;
          }
      }
      if (mouseY > windowHeight * .75 && timer > 20){
        chooseCrab = true;
      }
    }
  }

  if (gameMode == 3){
    newX = mouseX;
    y = windowHeight *.6 + random(-10, 10);
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
  if (random(1, 1000) > 970 && crab.y >= basement && !crab.blocking){
    crab.jumping = true;
  }
  if (crab.jumping){
    if (crab.y > ceiling + 30){
    crab.y -= 6;
    }
    else if (crab.y <= ceiling + 30 && crab.y > ceiling){
      crab.y -= 4;
    }
    if (crab.y <= ceiling){
      crab.jumping = false;
    }
  }
    if (!crab.jumping){
      if (crab.y < basement - 30){
        crab.y += 4;
      }
      else if (crab.y >= basement - 30 && crab.y < basement){
        crab.y += 6;
      }
    }

    // crab attackss
    if (crab2.x - crab1.x < 100 && !crab.attacking && !crab.blocking){
      if (random(1, 1000) > 950){
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
  gameMode = 2;
  crab1.hp = 100;
  crab2.hp = 100;
  timer = 0;
  deadTimer = 0;
  betDisplay = 0;
  chooseCrab = false;
  bets = [50,50,50,50]
  reward = false;
  crab1.y = ceiling - 50;
  crab1.x = screenW * .3;
  crab2.y = ceiling - 50;
  crab2.x = screenW * .58;
}
