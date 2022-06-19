var img;

function preload() {
  img = loadImage("greenbar.jpg");
}
  
function setup() {
  createCanvas(2235, 1650);
  noLoop();
}

function draw() {
  background(220);
  image(img, 0, 0)
  let i = 10;
  let j = 50;
  push();
  fill("red");
  for (let i = 25; i < height; i += 75) {
    ellipse(37.5, i, 18.75);
    ellipse(2197.5, i, 18.75);
  }
  for (let j = 10; j < width; j += 40) {
    line(j, 1, j + 10, 1);
    line(j, height - 5, j + 10, height - 5);
  }
  noStroke();
  ellipse(((width / 2) - 27), 183, 40);
  ellipse(((width / 2) + 50), 183, 40);
  pop();
  textSize(50);
  textFont("Times New Roman");
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i += 50;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i += 40;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i += 40;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  text("S", ((width / 2) + 40), j);
  text("S", ((width / 2) - 40), j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i -= 15;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i -= 15;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i -= 20;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  i -= 20;
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", (width / 2) - i, j);
  text("S", (width / 2) + i, j);
  j += 50;
  text("S", ((width / 2) - 10) - i, j);
  text("S", ((width / 2) - 10) + i, j);
  j += 50;
  text("S", ((width / 2) - 15) - i, j);
  text("S", ((width / 2) - 15) + i, j);
  j += 50;
  text("S", ((width / 2) - 20) - i, j);
  text("S", ((width / 2) - 20) + i, j);
  j += 50;
  text("S", ((width / 2) - 25) - i, j);
  text("S", ((width / 2) - 25) + i, j);
  j += 50;
  text("S", ((width / 2) - 30) - i, j);
  text("S", ((width / 2) - 30) + i, j);
  j += 50;
  text("S", ((width / 2) - 20) - i, j);
  text("S", ((width / 2) - 20) + i, j);
  j += 50;
  text("S", ((width / 2) - 15) - i, j);
  text("S", ((width / 2) - 15) + i, j);
  j += 50;
  text("S", ((width / 2) - 5) - i, j);
  text("S", ((width / 2) - 5) + i, j);
  j += 50;
  text("S", ((width / 2) + 40) - i, j);
  text("S", ((width / 2) + 40) + i, j);
  j += 50;
  text("S", ((width / 2) + 60) - i, j);
  text("S", ((width / 2) + 60) + i, j);
  j += 50;
  text("S", ((width / 2) + 85) - i, j);
  text("S", ((width / 2) + 85) + i, j);
  j += 50;
  text("S", ((width / 2) + 110) - i, j);
  text("S", ((width / 2) + 110) + i, j);
  j += 50;
  text("S", ((width / 2) + 135) - i, j);
  text("S", ((width / 2) + 135) + i, j);
  j += 50;
  text("S", ((width / 2) + 185) - i, j);
  text("S", ((width / 2) + 185) + i, j);
  j += 50;
  text("S", ((width / 2) + 210) - i, j);
  text("S", ((width / 2) + 210) + i, j);

  // draw tongue
  text("t", (width / 2) + 75, 125);
  text("t", (width / 2) + 100, 100);
  text("t", (width / 2) + 125, 75);
  text("t", (width / 2) + 110, 40);
  text("t", (width / 2) + 160, 40);

  // draw blades of grass
  for (let i = (height * 9 / 11); i < height - 50; i += 50) {
    for(let j = 100; j < width - 100; j += 100) {
      text("g", j, i);
    }
  }
  
  text("by Margarine O'Leo", width - 500, height - 40);
}