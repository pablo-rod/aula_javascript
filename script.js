//Concatenação de Strings
/*var nome = "Pablo Rodrigues"
var idade = "25"

console.log("Bem vindo, " + nome)
console.log("Você tem " + idade  + " anos")
*/



//Substituindo conteúdo da string com replace
/*var frase = "Argentina é o melhor time do mundo"

console.log(frase.replace("Argentina", "Brasil"))
*/


//Array
/*var lista =  ["pera", "uva", "banana"];
lista.push("morango");
lista.pop("morango");
console.log(lista)
console.log(lista.toString())
console.log(lista.join(" | "))
*/

//Dicionário
/*
var fruta = {nome: "uva", cor: "roxo"};
console.log(fruta)
console.log(fruta.cor)
console.log(fruta.nome)
*/

//Lista de dicionários
/*
var frutas = [{nome: "uva", cor: "roxo"}, {nome: "banana", cor: "amarela"}, {nome: "morango", cor: "vermelho"}];
//console.log(frutas)
console.log(frutas)
*/

//Condicionais
/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18) {
    console.log("Maior de idade!")
}  else {
    console.log("Menor de idade!")
}
*/

//Laços de repitação
//while
/*
var count = 0;
while(count <= 5) {
    console.log(count)
    count = count + 1;
}
*/

//for 
/*var count;
for(count = 0; count <= 5; count++) {
    console.log(count);
};
*/

//Data
/*
var d = new Date();
console.log(d.getHours());
*/

/*
function soma (n1, n2) {
    return n1 + n2
}
console.log(soma(5, 10))
*/

function load() {
    alert("página carregada!")
}

function button() {
    document.getElementById("thank").innerHTML = "Obrigado por clicar"
    //alert("obrigado por clicar")
}

function redirect() {
    window.open("https://github.com/pablo-rod");
}

function change(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar o texto");
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "passe o mouse aqui"
    //alert("trocar o texto");
}

function funChange(elemento) {
    console.log(elemento.value)
}