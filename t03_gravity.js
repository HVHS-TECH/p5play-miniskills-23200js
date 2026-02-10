/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	console.log("setup: ");
	cnv = new Canvas(windowWidth , windowHeight );
	world.gravity.y = -1;
	console.log("setup: ");
Rectangle = new Sprite(300, 300, 100, 100);
Rectangle.rotationSpeed = 67;

Rectangle.vel.x = 2;
Rectangle.color = 'green';
Circle = new Sprite(20, 20, 20);

Circle.color = 'blue';
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