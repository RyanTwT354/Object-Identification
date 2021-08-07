img = "";
status = "";
objects = [];
function preload() {
img = loadImage("dog_cat.jpg");

}

function setup() {
canvas = createCanvas(500, 500);
canvas.center();
ObjectDector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "status detecting objects";

}

function modelLoaded() {
    console.log(modelLoaded);
    status = true;
    ObjectDector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);

    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {
image(img, 0,0,500,500)
if(status !="") {
    for(var i=0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "status object detected";
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label +" " + percent + "%", objects[i].x, objects[i].y);
        fill("lime");
        noFill();
        stroke("red");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

}
