let myCapture;

function setup() {
  let canvas = createCanvas(640, 480);
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  fill(0, 255, 255);
  stroke(255, 204, 0);
  strokeWeight(2);

}

function draw() {
  background('#fae');
  //fill(random(255), random(255), random(255))
  
  //load pixel data into mycapture
  myCapture.loadPixels();
  
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  
  for(let y = 0; y < height; y+=stepSize) {
    for(let x = 0; x < width; x+=stepSize) {
      const i = y * width + x;
      
      const darkness = (255 - myCapture.pixels[i * 3]) / 255;
      const radius = stepSize * darkness;
      fill(random(0), random(255), random(255))
     
      push();
        translate(width, 0);
        scale(-1, 1);
        square(x, y, radius);   
      pop();
      
      
    }
  }
      
}