let a = 87;
let b = 73;
let c = 565;
let num = 33;
let num2 = 0;
let lado1 = 80;
let lado2 = 60;
let lado3 = 80;
let piece = 'queen';
let nota = 355;

console.log('Soma:', (a+b));
console.log('Subtração: ' + (a-b));
console.log('Multiplicação:', (a*b));
console.log('Divisão:', (a/b));
console.log('Módulo:', (a%b));

if (a>=b && a>=c) {
  console.log(a);
}
else if (b>=a && b>=c) {
  console.log(b);
}else{
  console.log(c);
}

if (num2>0) {
  console.log('positive');
}else if (num2<0){
  console.log('negative');
}else{
  console.log('zero');
}

if (lado1+lado2+lado3 === 180) {
  console.log(true);
}else if (lado1+lado2+lado3 !== 180){
  console.log(false);
}else{
  console.log('Deu ruim, tenta de novo!');
}

//Zero sentido esse toLowerCase já tava dando certo antes.
switch (piece.toLowerCase()) {
  case 'pawn':
    console.log("The pawn can move forward two squares (if desired) on it's first move of the game, but can then only continue forward by moving one square forward per turn.");
    break;
  case 'rook':
    console.log("The rook can move forward, backward, left or right until it reaches the edge of the board or another piece blocks it's path.");
    break;
  case 'bishop':
    console.log('The Bishop can move in any diagonal direction.');
    break;
  case 'knight':
    console.log('The Knight movement shape looks similar to the shape of the letter "L".');
    break;
    case 'queen':
    console.log('The Queen can move in any direction.');
    break;
  case 'king':
    console.log('The King can move in any direction by a single square.');
    break;
  default:
    console.log('Não encontrado')
}

if (nota>100 || nota<0){
  console.log('Pane no sistema. Desconfigurou. Tua nota nem existe.');
}else if (nota>= 90) {
  console.log('A');
}else if (nota>= 80){
  console.log('B');
}else if (nota>= 70){
  console.log('C');
}else if (nota>= 60){
  console.log('D');
}else if (nota>= 50){
  console.log('E');
}else{
  console.log('F');
}