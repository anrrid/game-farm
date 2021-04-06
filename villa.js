var fp = document.getElementById("farm_puercopoy");
var paper = fp.getContext("2d");
var quantity = aleatorio (1 , 10);
var motion = 10;
var x_chem = 50;
var y_chem = 50;
var x = new Array();
var y = new Array();

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", moveChem);

//Se traen imagenes
var background = {
  url: "tile.png",
  load_ok : false
}

var cows = {
  url: "cow.png",
  load_ok : false
}

var pigs = {
  url: "pig.png",
  load_ok : false
}

var chickens = {
  url: "chicken.png",
  load_ok : false
}

var chemsito = {
  url: "chemsito.png",
  load_ok : false
}

//imagenes y escuchadores

background.image = new Image();
background.image.src = background.url;
console.log(background);
background.image.addEventListener("load", load_Background);

cows.image = new Image();
cows.image.src = cows.url;
console.log(cows);
cows.image.addEventListener("load", load_cows);

pigs.image = new Image();
pigs.image.src = pigs.url;
console.log(pigs);
pigs.image.addEventListener("load", load_pigs);

chickens.image = new Image();
chickens.image.src = chickens.url;
console.log(chickens);
chickens.image.addEventListener("load", load_chickens);

chemsito.image = new Image();
chemsito.image.src = chemsito.url;
console.log(chemsito);
chemsito.image.addEventListener("load", load_chemsito);

//función de carga
function load_Background() {
  background.load_ok = true;
  draw();
}

function  load_cows() {
  cows.load_ok = true;
  draw();
}

function load_pigs() {
  pigs.load_ok = true;
  draw();
}

function load_chickens() {
  chickens.load_ok = true;
  draw();
}

function load_chemsito () {
  chemsito.load_ok = true;
  draw();
}

//función para dibujar
function draw() {
if (background.load_ok){
  paper.drawImage (background.image, 0, 0);
}
if (cows.load_ok){
  for (var i = 0; i < quantity; i++) {
    var x = aleatorio (0, 7);
    var y = aleatorio (0, 10);
    var x = x * 60;
    var y = y * 60;
  } paper.drawImage (cows.image, x, y);
}
if (pigs.load_ok){
  for (var i = 0; i < quantity; i++) {
    var x = aleatorio (0, 7);
    var y = aleatorio (0, 10);
    var x = x * 60;
    var y = y * 60;
  }
  paper.drawImage (pigs.image, x, y);
}
if (chickens.load_ok){
  for (var i = 0; i < quantity; i++) {
    var x = aleatorio (0, 7);
    var y = aleatorio (0, 10);
    var x = x * 60;
    var y = y * 60;
  }
  paper.drawImage (chickens.image, x, y);
}
if (chemsito.load_ok){
paper.drawImage (chemsito.image, x_chem, y_chem);

}

}

//función para mover al chemsito uwu
function moveChem (e){
  if (e.keyCode == teclas.UP) {
    draw(x_chem, y_chem);

    y_chem = y_chem - motion;
  }

  if (e.keyCode == teclas.DOWN) {
      draw(x_chem, y_chem);
    y_chem = y_chem + motion;
  }
  if (e.keyCode == teclas.LEFT) {
       draw(x_chem, y_chem);
    x_chem = x_chem - motion;
  }
  if (e.keyCode == teclas.RIGHT) {
      draw(x_chem, y_chem);
    x_chem = x_chem + motion;
  }
}

//funcion aleatoria

function aleatorio (min, maxi){
  var result;
  result = Math.floor (Math.random() * (maxi - min + 1))
  return result
}
