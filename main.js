noseX = 0;
noseY = 0;
diference = 0;
rightWristX = 0;
leftWristX = 0;
function draw(){
    background('crimson')
    fill('navy')
    stroke('white')
    square(noseX, noseY, diference)
}
function setup(){
    canvas = createCanvas(560, 560);
    canvas.position(560, 100);
    video = createCapture(VIDEO);
    video.size(560, 560);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
console.log("thomas");
}
function gotPoses(results){
 if(results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    rightWristX = results[0].pose.rightWrist.x
    leftWristX = results[0].pose.leftWrist.x
    diference = floor(leftWristX - rightWristX)
    console.log(noseX)
    console.log(noseY)
 }
}