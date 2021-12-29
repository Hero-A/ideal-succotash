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
    }
}

function draw(){
    background("grey")
}