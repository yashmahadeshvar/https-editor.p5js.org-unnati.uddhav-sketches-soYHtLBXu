
var monkey , monkey_running ,ground;
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup ;
var obstacleGroup;
var score;

function preload(){

  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
   createCanvas(600, 200);
   
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,180,600,10);
  ground.x = ground.width /2;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

  score=0;
  
}


function draw() {
 background(180);
   text("Score: "+ score, 500,50);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   score = score + Math.round(getFrameRate()/60);
  
   if(keyDown("space") ){
      monkey.velocityY= -12;
   }
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
  
    spawnObstacles();
    spawnBanana();
  
  drawSprites();
  
 }
 
function spawnObstacles(){
  
  if (frameCount % 150 === 0){
   var obstacle = createSprite(600,165,15,45);
   obstacle.velocityX = -(5 + score/100);
   obstacle.scale=0.1
   obstacle.velocityX = -3;
   obstacle.addImage(obstacleImage);
   obstacle.lifetime = 200;
    
   obstacleGroup.add(obstacle);
    
 }
}

function spawnBanana() {
 
  if (frameCount % 50 === 0) {
    var banana = createSprite(600,120,45,10);
    banana.y = Math.round(random(40,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 200;
  
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
  }
}