//OBLITERATION SCREEN
//Inspired by Yayoi Kusama "Obliteration Room"
// https://www.tate.org.uk/art/artists/yayoi-kusama-8094/yayoi-kusamas-obliteration-room
//Enrico Isidori

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  //Abbasso il frame rate per aumentare il tempo di applicazione degli stiker
  frameRate(5);
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let d = random(30, 80);
  noStroke();

  // Array con i 5 colori che degli stiker di Kusama
  const MyColors = ["#1355a5", "#e91278", "#d32128", "#228b44", "#eddd1d"];
  // Associo un colore casuale
  let colorHex = random(MyColors);
  fill(color(colorHex));

  circle(x, y, d);
}
