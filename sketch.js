let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y
let posicaoHorizontal2; // x
let posicaoVertical2; // y
function setup() {
  createCanvas(400, 400);
   background(color(100,0,0));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
  posicaoHorizontal2 = 0;
  posicaoVertical2 = random(height);
}
function draw() {
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,50);
  circle(posicaoHorizontal2,posicaoVertical2,50);
  posicaoHorizontal += random(1,3);
  posicaoVertical += random(-3, 3);
 posicaoHorizontal2 += random(1,3);
posicaoVertical2 += random(-3, 3);
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}
