Status = "";
bedroom_img = "";
objects = [];

function preload(){
    bedroom_img  = loadImage("bedroom.jpg");
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
    object_detector.detect(bedroom_img,gotResult);
}

function gotResult(error,results){
    if(error){
            console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    
    if(status !="")
    {
        image(bedroom_img,0,0,640,350);
        for (i=0; i < objects.length; i++)
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