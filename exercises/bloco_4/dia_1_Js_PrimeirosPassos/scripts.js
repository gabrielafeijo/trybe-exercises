let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
let base = 5;
let altura = 8;
let area = base*altura;
let perimetro = base*2+altura*2;

console.log(typeof patientId);
console.log(area);
console.log(perimetro);

let pessoaCandidata ="Joana";

switch (pessoaCandidata){
  
  case "Gabriela":
  console.log("aprovada");
  break;

  case "José":
  console.log("lista");
  break;
  
  case "João":
  console.log("reprovada");
  break;

  default:
    console.log("Não se aplica")
}