noseX = "";
noseY = "";

function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav")
	kick = loadSound("kick.wav")
	game_over = loadSound("gameover.wav")
	mariodie = loadSound("mariodie.wav")
	coin = loadSound("coin.wav")

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')

	instializeInSetup(mario);

	vid = createCapture(VIDEO);
	vid.size(800, 400);
	vid.parent("webcam")

	poseNet = ml5.poseNet(vid, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}
function draw() {
	game()
}






