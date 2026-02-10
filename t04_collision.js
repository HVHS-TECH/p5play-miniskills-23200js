/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
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
platform_1 = new Sprite(300, 500, 400, 100, 'k');
platform_2 = new Sprite(300, 1, 400, 100, 'k');
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