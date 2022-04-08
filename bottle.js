Status = "";
bottle_img = "";
objects = [];
object_detector = "";

function preload(){
    bottle_img  = loadImage("bottle.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(bottle_img,gotResult);
}

function gotResult(error,results){
    if(error){
            console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(bottle_img,0,0,640,350);

    if(status !="")
    {for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }

    
    
}
