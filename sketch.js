var Human, Huma2, Human3, Chicken, Egg, Healthbar, HumanImg, ChickenImg, Jumps, Background, Gameover, Victory;

function preload() {
  HumanImg = LoadImage("Human");
  ChickenImg = LoadImage("Chicken");
  Background = LoadImage("Background");
  Gameover = LoadImage("Game Over")
  Victory = LoadImage("Victory")
}

function setup() {
  createCanvas(400,400);
  Chicken = createSprite(100, 200)
  Chicken.addImage(ChickenImg)
  Healthbar = createSprite(210, 50);
  Healthbar = 30;
}
function draw() {
  background(51);
  while (keyIsDown(UP_ARROW) && Jumps <= 2){
      Chicken.velocityY = -10;
      Jumps += 1;
      Egg = CreateSprite(50, 50)
      Egg.addImage
      Egg.VelocityY = -15;
      if (Jumps == 2) {
        Jumps = 0;
      }
    }
  while (keyIsDown(RIGHT_ARROW)) {
      this.x += 10;
    }
  while (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;
    }
  Chicken.velocityY += 0.5;
  
  if (Human.x < Chicken.x) {
    Human.x -= 7
  }
  else if (Human.x > Chicken.x) {
    Human.x += 7
  }
  else if (Human2.x < Chicken.x) {
    Human2.x -= 7
  }
  else if (Human2.x > Chicken.x) {
    Human2.x += 7
  }
  else if (Human3.x < Chicken.x) {
    Human3.x -= 7
  }
  else if (Human3.x > Chicken.x) {
    Human3.x += 7
  }
  
  if (Healthbar == 0) {
    Gameover.addImage(Gameover)
  }
  
  if (framecount == 10) {
    Human = createSprite(300, 200);
    Human.addImage(HumanImg);
  }
  else if (framecount == 20) {
    Human2 = createSprite(300, 200);
  Human2.addImage(HumanImg);
  }
  else if (framecount == 30) {
    Human3 = createSprite(300, 200);
  Human3.addImage(HumanImg);
  }

  if (framecount == 40) {
    Victory.addImage(Victory)
  }
}

function Damage() {
  if (Chicken.collide(Human)) {
    Healthbar -= 10;
    Healthbar.width -= 70;
  }
}
function Attack() {
  if (Egg.collide(Human)) {
    Human.remove;
    Egg.remove;
  }
}

