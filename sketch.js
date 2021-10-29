var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada, hadaImg;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starryNight.jpg");
	//carga aquí la animación del hada
	hadaImg = loadAnimation ("fairyImage1.png", "fairyImage2.png");
	sound = loadSound ("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	//escribe el código para reproducir el sonido fairyVoice
	sound.loop();

	//crea el sprite del hada, y agrega la animación para el hada
	hada = createSprite(300,300,60,60);
	hada.addAnimation("moving",hadaImg);
	hada.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 270 && starBody.position.y > 270){
	  Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyCode === LEFT_ARROW){
		hada.x = hada.x-20;
	}

	if(keyCode === RIGHT_ARROW){
		hada.x = hada.x+20;
	}
}
