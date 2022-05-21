//Rideing a bike and jumping over obstcales  
var boyimg, streetimg, street, cycleboy;
var ballimg, pestimg, binimg;

var PLAY = 1;
var END = 0;
var gamestate = 1;
var width = 11881;
var height = 1537;

var score = 0;
var highscore = 0;
var framecountreset = 0;

var obs

function preload(){
    boyimg = loadImage("bikeboy.png")
    streetimg = loadImage("background3.png");
    ballimg = loadImage("ball.png");
    pestimg = loadImage("pest.png");
    binimg = loadImage("bin.png");
}

function setup() {
   createCanvas(1000,700); 
   street = createSprite(1000,700);
   street.addImage(streetimg);
   street.velocityX = -20;
   street.x = 2950;
   street.y = 200
   cycleboy = createSprite(20,20, 40,20);
   cycleboy.addImage(boyimg);
   cycleboy.x = 400
   cycleboy.y = 450
   cycleboy.scale = 0.3
   
   obs = createSprite(1000,550, 10, 10);

   reset()

}

function reset(){

    if(score > highscore){
        highscore = score;
    }

    street.x = 2950;
    score = 0;
    framecountreset = World.frameCount
    obs.destroy();
}

function draw() {
   if(gamestate == PLAY){
       background(0);

       if(street.x < -3000){
           street.x =2950;
       }

       if (World.frameCount % 200 == 0) {
           obs = createSprite(1000,550, 10, 10);
           var choice = Math.round(random(1, 3))
           
           if(choice == 1)
           {
               obs.addImage(ballimg);
               obs.scale=0.02;
               obs.velocityX = -20;
               obs.lifetime = 200;
            } else if(choice == 2){
                obs.addImage(binimg);
                obs.scale=0.17;
                obs.velocityX = -20;
                obs.lifetime = 200; 
            } else {
                obs.addImage(pestimg);
                obs.scale=0.2;
                obs.velocityX = -20;
                obs.lifetime = 200;
            }
        }

        if(keyDown("UP_ARROW") && cycleboy.y == 450) {
            cycleboy.velocityY = -175;
        }
        else{
            if(cycleboy.y < 450){
                cycleboy.velocityY = 5;
            }
            else
             cycleboy.velocityY = -0;
        }
     
        if(obs.isTouching(cycleboy)){
            reset();
        }


        score = World.frameCount - framecountreset;




        drawSprites();



   }
   textSize(20);
   fill(0);
   text("score "+ score,width-150,630); 
   text("highscore "+ highscore,width-150,660); 
   
}