/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth , windowHeight );
	world.gravity.y = 10;
Rectangle = new Sprite(300, 300, 100, 100);
Rectangle.rotationSpeed = 10;
Rectangle.vel.x = 2;
Rectangle.color = 'green';
Rectangle.bounciness = 10;


wallLH  = new Sprite(0, 10/2, 8, 10, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(1300, 470, 100, 650,'k');

wallLH  = new Sprite(100, 470, 100, 650,'k');

wallTop = new Sprite(500, 800, 1500, 10, 'k');

wallBot = new Sprite(500, 150, 1500, 10, 'k');

ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.color = 'cyan';

ball_1.vel.x = 2;

ball_1.bounciness = 1;

ball_1.friction = 0;

ball_1.drag = 0;
}
	
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
				background('pink'); 

	
}

/*******************************************************/
//  END OF APP
/*******************************************************/