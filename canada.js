let canadaFlag; // Variável para armazenar a imagem de fundo

function preload() {
  // Carrega a imagem da bandeira do Canadá
  canadaFlag = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png');
}

function setup() {
  createCanvas(1280, 640); // Define o tamanho do canvas de acordo com o tamanho da imagem
}

function draw() {
  // Desenha a imagem de fundo
  image(canadaFlag, 0, 0, 400,200);
  // Desenhamos a imagem da bandeira do Canadá como fundo
  // ela serve de orientação para o desenho via p5.
  // o desafio é ajustar os comandos da biblioteca P5
  // e ajustar a bandeira não precisa ser exato mais
  // ajuste o melhor que puder.
  // use as referências de : https://p5js.org/reference/
  //Fill();
  fill("red");
  strokeWeight(1);
  strokeJoin(MITER);
  beginShape();
  vertex(125, 70);
  vertex(135, 100);
  vertex(120,100);
  vertex(165,136);
  vertex(160,150);
  vertex(200,145);
  vertex(195,185);
  vertex(205,185);
  vertex(204,145);
  vertex(245,150);
  vertex(300,10);
  // complete os pontos para fechar a figura
  // retir o noFill e deixe o fill("black") para 
  // testar
  endShape();  
}