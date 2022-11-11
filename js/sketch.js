
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
        
        
    }

    if(mouseX > width/2){
        console.log('Frown - Right'); //write something in console
        circle(400,400,400);
        fill(255,0,0);
        circle(300,330,100);
        circle(500,330,100);

    }
    console.log('LEFT'); //write something in console
    console.log('RIGHT'); //write something in console

// Simplify the Code and write "else" - not always used but can shorten code in future
}