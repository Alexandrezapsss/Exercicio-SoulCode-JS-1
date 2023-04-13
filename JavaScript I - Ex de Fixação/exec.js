//começo exercicio 1
var contador = 0;


var numeroAtual = 101;


while (contador < 10) {
//vou tentar criar uma li dnetro da minha ul usando createElement
  let novoNumeroLista = document.createElement("li");
    //pelo que me lembro posso usar isso para armazenar um valor dentro da minha li criada acima 
    novoNumeroLista.textContent = numeroAtual;
    //adicionar no meu documento html vai adicionar a cada loop
    document.getElementById("exc1").appendChild(novoNumeroLista);
    contador ++;
    numeroAtual ++;
}
//fim exercicio 1
//começo exercicio 2
let n1 = parseInt(prompt("Informe o primeiro valor a ser comparado"));
let n2 = parseInt(prompt("Segundo valor a ser comparado"));
let n3 = parseInt(prompt("Terceiro valor a ser comparado"));

let maiorNumero;

if(n1 > n2 && n1 > n3){
    maiorNumero = `O número maior é: ${n1}`;
}
else if (n2 > n1 && n2 > n3){
    maiorNumero = `O número maior é: ${n2}`;
}
else{
    maiorNumero = `O número maior é: ${n3}`;
}

let addParagrafo = document.createElement("p"); // vai criar uma tag <p></p>

addParagrafo.textContent = maiorNumero;

document.getElementById("exc2").appendChild(addParagrafo);
//fim do exercicio2
//começo exercicio 3 - é bem parecido porem só add mais um loop para achar o menor
//reaproveitar a variavel
let maiorNumero1;
let menorNumero1;

if(n1 > n2 && n1 > n3){
    maiorNumero = `O número maior é: ${n1}`;
}
else if (n2 > n1 && n2 > n3){
    maiorNumero = `O número maior é: ${n2}`;
}
else{
    maiorNumero = `O número maior é: ${n3}`;
}

if(n1 < n2 && n1 < n3){
    menorNumero = `O número menor é: ${n1}`;
}
else if (n2 < n1 && n2 < n3){
    menorNumero = `O número menor é: ${n2}`;
}
else{
    menorNumero = `O número menor é: ${n3}`;
}

// Cria elementos de parágrafo para exibir o maior e o menor número
let paragrafoMaior = document.createElement("p");
paragrafoMaior.textContent = maiorNumero;

let paragrafoMenor = document.createElement("p");
paragrafoMenor.textContent = menorNumero;

// Adiciona os parágrafos ao elemento com id "exc3"
document.getElementById("exc3").appendChild(paragrafoMaior);
document.getElementById("exc3").appendChild(paragrafoMenor);
//fim do exercicio 3

//começo do exercicio 4
let nome = prompt("Informe o seu Nome"); // usuario vai colocar o seu nome e outros dados
let cpf = parseInt(prompt("Informe seu CPF"));
let idade = parseInt(prompt("Informe a sua idade"));
let data_nascimento = prompt("informe a sua data de nascimento");

let info = `Bem vindo ${nome} você está registrado no CPF: ${cpf} sua idade é de ${idade} anos e nascido em: ${data_nascimento}`;

let paragrafoInfo = document.createElement("h3");
paragrafoInfo.textContent = info;
document.getElementById("exc4").appendChild(paragrafoInfo);
//fim de exercicio 4

//começo exercicio 5
let nomeProduto = "Batata Frita com oleo de azeite - chiquin";
let preco = 45.85;
let estoque = 125;
let validade = "02/01/2024";

let infoProduto = `Nome do produto: ${nomeProduto} está no valor de R$${preco.toFixed(2)} temos ${estoque} unidades em estoque, com data de validade para ${validade}`;

let paragInfo = document.createElement("h2");
paragInfo.textContent = infoProduto;
document.getElementById("exc5").appendChild(paragInfo);
//fim do exercicio 5

//começo do exercicio 6
let faren = parseFloat(prompt("Informe a temperatura em Fahrenheit. Ela vai ser convertida para Celsios"));

let celsios = (faren - 32) * 5 / 9;

let respCelsios = document.createElement("strong");
respCelsios.textContent = `A temperatura em celsios é: ${celsios.toFixed(2)}`;
document.getElementById("exc6").appendChild(respCelsios);
//fim do exercicio 6

//começo exercicio 7
let yourSalario = parseFloat(prompt("Informe seu salario para informa quanto será o reajuste de 20%"));

let reagust = yourSalario * 1.2;

let infoSalary = document.createElement("h2");
infoSalary.textContent = `O seu salario teve um aumento de 20% e ficou agora um total de R$${reagust}`;
document.getElementById("exc7").appendChild(infoSalary);
//fim exc 7

//começo exc 8
let altura = parseFloat(prompt("Informe a sua altura para calcular seu IMC"));
let peso = parseFloat(prompt("Informe o seu peso"));

let imc = peso / Math.pow(altura, 2);

let resultado;
if(imc < 18.5){
    resultado = `Você está abaixo do Peso seu IMC é de ${imc.toFixed(2)}`;
}
else if(imc >= 18.5 && imc <= 25){
    resultado = `Seu peso está Normal e seu IMC é de ${imc.toFixed(2)}`;
}
else if(imc > 25 && imc <= 30){
    resultado = `Você está acima do Peso e seu IMC é de ${imc.toFixed(2)}`;
}
else{
    resultado = `Você está Obeso e seu IMC é de ${imc.toFixed(2)}. Por favor procurar ajuda médica`;
}

let infoImc = document.createElement("h2");
infoImc.textContent = resultado;
document.getElementById("exc8").appendChild(infoImc);