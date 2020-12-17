var tower,towerImage;
var door,doorImage,doorGroup;
var climbers,climbersImage,climbersGroup;
var ghost,ghostImage;
var invisible,invisibleGroup;
var gamestate="play";


var spookysound;
function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climbersImage=loadImage("climber.png");
 doorGroup=new Group();
climbersGroup=new Group();
  ghostImage=loadImage("ghost-standing.png");
invisibleGroup=new Group();
  
  spookysound=loadSound("spooky.wav");
}
  
function setup(){
  CreateCanvas=(600,600);
  spookysound.loop();
  tower=createSprite(200,300);
  tower.addImage("tower",towerImage);
   tower.scale=0.7;

  tower.velocityY=2;

  ghost=createSprite(200,200,50,50);
  
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage);
  
}  
  
  function draw(){
    background("purple");
 
    if(gamestate==="play"){
    
    if(tower.y>400){
   tower.y=200;
 }
 
  if(keyDown("Left_arrow")){
    ghost.x=ghost.x-3;
  }
    
    
    if(keyDown("right_arrow")){
      ghost.x=ghost.x+3;
    }
    
    
    
    if(keyDown("space")){
      ghost.velocityY=-10;
      
    }
    ghost.velocityY=ghost.velocityY+0.6;
    
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY=0;
    }
    
    if(invisibleGroup.isTouching(ghost)||ghost>600){
      ghost.destroy();
    gamestate="end";
    
    }
    
    
    spawndoors();
    drawSprites()
    
    
    }
    
    
    if(gamestate==="end"){
      stroke("red");
      fill("red");
      textSize(24);
      text("gameover",200,250);
    }
    
    
    
    
    
    
    
  }
  
  
  function spawndoors(){
    if(frameCount%240===0){
    door=createSprite(200,50);
      
    door.addImage("door",doorImage);
     climbers=createSprite(200,110);
      climbers.addImage(climbersImage);
       invisible=createSprite(200,120);
      
      invisible.width=climbers.width;
       invisible.height=3;
      
      
      door.x=Math.round(random(120,300));
      climbers.x=door.x;
      door.velocityY=tower.velocityY;
      door.lifetime=-134;
  climbers.velocityY=2;
      invisible.x=door.x;
      invisible.velocityY=2;
      door.lifetime=650;
      climbers.lifetime=650;
      
      doorGroup.add (door);
      climbersGroup.add(climbers);
      
      invisible.debug=true;
      
      invisibleGroup.add(invisible);
      
      
      ghost.depth=door.depth;
      ghost.depth=ghost.depth+1;
      
     
      
    
    }
    
    
  }