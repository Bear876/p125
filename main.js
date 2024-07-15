leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(400,170)
    canvas=createCanvas(550,550);
    canvas.position(1000,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function draw(){
    background("#79a1b8");
    document.getElementById("textsize").innerHTML = "The text size is "+difference+"px";
    textSize(difference);
    fill('#8c8aea');
    text('Bella',0,300);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}