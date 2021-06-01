var nl = 0, ne = 0;
var  gameState = 0;
function preload(){
  stationSpace = loadImage("images/iss.png");
  backgroundImg = loadImage("images/spacebg.jpg");
  craftImg = loadImage("images/spacecraft1.png");
  craftImgF = loadImage("images/spacecraft2.png");
  craftImgL = loadImage("images/spacecraft3.png");
  craftImgR = loadImage("images/spacecraft4.png")
}
function setup() {
  createCanvas(1000,800);

  scraft = createSprite(400,400,50,50);
  scraft.addImage(craftImgR);
  scraft.scale = 0.48;
  
  station = createSprite(400, 200, 50, 50);
  station.addImage(stationSpace)

  
}

function draw() {
  background(backgroundImg);
  if(gameState === 0){
  
  if(keyDown(LEFT_ARROW)){
    scraft.x-=1
    console.log(scraft.x, scraft.y,"left",nl)
    scraft.addImage(craftImgR);
      scraft.scale = 0.48;

      if(nl===0){
        scraft.y += 60;

        nl = 1;
        ne = 1

      }
  }
  else if(keyDown(RIGHT_ARROW)){
    scraft.x+=1;
    console.log(scraft.x, scraft.y,"right")
    scraft.addImage(craftImgL);
   
  if(nl===0){
    scraft.y += 60;
    nl = 1;
    ne = 1
  }
    scraft.scale = 0.48;
  }
  else if(keyDown(DOWN_ARROW)){
    scraft.y+=1;
    console.log(scraft.x, scraft.y)
    scraft.addImage(craftImg);
    scraft.scale = 0.48;


  }
  else if(keyDown(UP_ARROW)){
    scraft.y-=1;
    console.log(scraft.x, scraft.y)
    scraft.addImage(craftImgF);
    scraft.scale = 0.48;

    if(nl===0){
      scraft.y += 60
      nl = 1;
      ne = 1

    }
  } else {
    scraft.addImage(craftImg);
  scraft.scale = 0.48;
  nl = 0;

if(ne ===1){
  scraft.y-=60
  ne=0;
}
}
  }

  if(scraft.x >320 && scraft.x < 340 && scraft.y > 327 && scraft.y < 333){
    textSize (30);
    fill ("white")
    text ("Docking Successful", 557,661);
    text ("Press R to restart",557,661+40)
    gameState = 1

  }

  if(gameState === 1 && keyDown("r")){
      scraft.x = 400;
      scraft.y =400;
      gameState = 0;
  }

  drawSprites();
}