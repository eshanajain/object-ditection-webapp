img = "";

function preload(){
    img = loadImage(basket.jpg);
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("desk", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);
}