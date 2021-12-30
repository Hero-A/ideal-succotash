difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(0, 100);
 
    canvas = createCanvas(550, 500);
    canvas.position(700, 96);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet activated');
}

function gotPoses(results){
    if(results.length > 0){
          console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("grey")
    textSize(difference);
    fill('green');
    text("Vihaan", 50, 400);
}