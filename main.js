noseX = 0
noseY = 0
difference = 0
difference2 = 0
leftwristX = 0
leftwristY = 0
rightwristX = 0
rightwristY = 0
function setup() {
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    video = createCapture(VIDEO)
    video.size(550, 550)
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}
function draw() {
 background("#09237d")
 document.getElementById("square_side").innerHTML= "height"+ difference
 document.getElementById("square_side2").innerHTML= "width"+ difference2
fill("#65456a")
stroke("#65456a")
rect(noseX,noseY,difference2,difference)
}
function gotposes(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftwristX = results[0].pose.leftWrist.x
        leftwristY = results[0].pose.leftWrist.y
        rightwristX = results[0].pose.rightWrist.x
        rightwristY = results[0].pose.rightWrist.y
        difference= floor(leftwristX-rightwristX)
        difference2= floor(leftwristY-rightwristY)
}
}
function modelloaded() {
    console.log("modelloaded")
}
