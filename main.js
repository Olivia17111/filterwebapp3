nosex = 0;
nosey = 0;
Mustache = 0;
function preload() {
if(Mustache==0)
{
clone_mustache = loadImage("https://i.postimg.cc/pLRYXLB7/mustache-cartoon-isolated-vector-23490826-removebg-preview.png");
}
else if (Mustache == 1) 
{
    clone_mustache = loadImage("https://i.postimg.cc/pLRYXLB7/mustache-cartoon-isolated-vector-23490826-removebg-preview.png");
}
}

function setup() {
canvas = createCanvas(300,400);
canvas.center();
video = createCapture(VIDEO);
video.size(300,400);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}
 function modelLoaded() {
    console.log("posenet is initialized");
 } 
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
         nosex =  results[0].pose.nose.x -40;
         nosey =  results[0].pose.nose.y -7;
         console.log("nosex= " + nosex);
         console.log("nosey= " + nosey);
    }
} 


function draw() {
    image(video,0,0,300,400);
    image(clone_mustache,nosex,nosey,80,80);

 //fill (255,0,0);
 //stroke (255,1,0);
 //circle(nosex,nosey,30);
}

function take_snapshot() {
    save('MyMustache.png');
}