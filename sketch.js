function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here

  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
  background(135, 206, 235);

  //sole
  noStroke();
  fill(255, 220, 0);
  circle(width - 100, 100, 80);

  //montagne
  fill(34, 139, 34);
  triangle(50, height - 100, 250, 150, 450, height - 100);

  fill(0, 100, 0);
  triangle(250, height - 100, 450, 220, 650, height - 100);

  //prato
  fill(80, 170, 70);
  rect(0, height - 100, width, 100);

  //nuvola
  fill(255);
  ellipse(200, 100, 100, 60);
  ellipse(250, 100, 100, 60);
  ellipse(225, 80, 100, 60);

  //ombra montagne
  fill(0, 90, 0, );
  triangle(50, height - 100, 250, 150, 7, height - 100);
  triangle(250, height - 100, 450, 220, 90, height - 100);

  //fiori
  for (let x = 40; x < width; x += 80) {
    if (x < width - 20) {
      fill(255, 220, 0);
      circle(x, height - 125, 15);

      fill(255);
      circle(x - 7, height - 125, 10);
      circle(x + 7, height - 125, 10);

      fill(30, 120, 40);
      rect(x - 2, height - 120, 4, 20);
    }
  }
}


