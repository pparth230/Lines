let cnv;  
let step = 40


function setup() {
    cnv= createCanvas(1000, 1000);

    let newCanvasX= (windowWidth-cnv.width)/2;
    let newCanvasY= (windowHeight-cnv.height)/2;
    console.log(newCanvasX, newCanvasY);
    cnv.position(newCanvasX, newCanvasY);
    
    drawLine();
}

function draw() {
}

function mouseMoved() {
    background(255);
    drawLine();
}

function drawLine() {
    noFill();
    stroke(0);
    strokeWeight(20);
    rect(0, 0, width, height); // 
    strokeWeight(2); // Draws the outline of the canvas


    for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
            drawTile(x, y, step);
        }
    }
}

function drawTile(x, y, s) {
  let leftToRight = random() >= 0.5;
  if (leftToRight) {
    line(x, y, x + s, y + s);
  } else {
    line(x + s, y, x, y + s);
  }
}
