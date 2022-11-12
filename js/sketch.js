
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");        
}

function draw() {
    background(220);

    if(mouseX < width/2){
        console.log('Smile - Left'); //write something in console
        circle(400,400,400);
        fill(255,204,0);
        circle(300,330,100);
        circle(500,330,100);
        arc(350, 500, 180, 40, 0, HALF_PI);
        
        
        
    }

    if(mouseX > width/2){
        console.log('Frown - Right'); //write something in console
        circle(400,400,300);
        circle(400,400,400);
        fill(255,0,0);
        circle(300,330,100);
        circle(500,330,100);
        arc(350, 500, 180, 40, 10, HALF_PI);

    }
    console.log('LEFT'); //write something in console
    console.log('RIGHT'); //write something in console

// Simplify the Code and write "else" - not always used but can shorten code in future
}