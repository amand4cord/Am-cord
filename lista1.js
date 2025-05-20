function exercicio2(){
let idade = Number(prompt("Digite sua idade: "))
let temEspadaMagica = prompt("Tem espada mágica? Sim/Não");

if(idade >= 18 && temEspadaMagica == "Sim"){
	console.log("Você pode lutar contra o dragão!")
} else {
	console.log("Fuja enquanto é tempo!")
}
}

function exercicio3(){
let temDinheiro = prompt("Tem dinheiro? Sim/Não")
let estaComFome = prompt("Está com fome? Sim/Não")
let hojeSexta = prompt("Hoje é sexta? Sim/Não")

if((temDinheiro && estaComFome) || hojeSexta){
    console.log("Vamos pedir pizza!")
} else {
    console.log("Hoje não é dia de pizza.")
}
}

function exercicio4(){
let fruta = prompt("Digite a fruta para o suco: Laranja, Uva ou Morango")

if(fruta == "Laranja"){
    console.log("Preparando suco de laranja ")
} else if (fruta === "Uva"){
    console.log("Preparando suco de uva ")
} else if(fruta == "Morango"){
    console.log("Preparando suco de morango ")
} else {
    console.log("Essa fruta não está disponível ")
}
}

function exercicio5(){
let suspeito1 = Number(prompt("Digite o valor do primeiro suspeito: "))
let suspeito2 = Number(prompt("Digite o valor do segundo suspeiro: "))
       
if (suspeito1 === suspeito2){
   console.log("Eles são exatamente iguais.")
} else if (suspeito1 == suspeito2){
   console.log("Eles dizem a mesma coisa, mas de formas diferentes.")
} else {
   console.log("Eles são diferentes.")
}
}

function exercicio6(){
let quantidadeItens = Number(prompt("Quantos itens foram comprados?"))
let valorTotal = Number(prompt("Qual foi o valor total da compra? (em R$)"))
    
if (quantidadeItens > 3 || valorTotal > 100) {
    alert("Desconto aplicado!")
} else {
    alert("Sem desconto dessa vez.")
}
}

function exercicio7(){
let pedido = prompt("Qual café deseja? (café, cappuccino, expresso)")

if (pedido === "café"){
    alert("Servindo café ")
} else if (pedido === "cappuccino"){
    alert("Servindo capuccino ")
} else if (pedido === "expresso"){
    alert("Servindo expresso ")
} else {
    alert("Desculpe, não temos esse tipo de café ")
}
}

function exercicio8(){
let combustivel = Number(prompt("Quanto de combustível há na nave?"))
let clima = prompt("Como está o clima? (bom ou ruim)")
    
if (combustivel > 50 && clima === "bom"){
    alert("Pouso autorizado!")
} else {
    alert("Abortar missão!")
}
}
function exercicio9(){
let nomeSorteado = prompt("Quem você tirou no presente secreto?")

if (nomeSorteado === "Carlos"){
    alert("Compre um livro ")
} else if (nomeSorteado === "Ana"){
    alert("Compre um chocolate ")
} else {
    alert("Compre um presente surpresa ")
}
}

function exercicio10(){
let pontos = Number(prompt("Qual a pontuação do jogador?"))

if (pontos >= 100){
    alert("Você venceu! ")
} else {
    alert("Continue jogando! ")
}
}

function exercicio11(){
let idade = Number(prompt("Qual é sua idade?"))

if (idade <= 12 || idade > 60){
    alert("Entrada gratuita ")
} else {
    alert("Precisa pagar ingresso ")
}
}

function exercicio12(){
let ingrediente1 = prompt("Digite o primeiro ingrediente: ")
let ingrediente2 = prompt("Digite o segundo ingrediente: ")

if (ingrediente1 === "pele de sapo" && ingrediente2 === "asa de morcego"){
    alert("Poção pronta!")
} else {
    alert("Mistura errada!")
}
}

function exercicio13(){
let nome = prompt("Qual seu nome?")
let temConvite = prompt("Tem convite? (sim/não)")
let lista = ["Amanda", "Carol", "Julia"]

if (lista.includes(nome) && temConvite === "sim") {
    alert("Entrada liberada!")
} else {
    alert("Você não pode entrar.")
}
}

function exercicio14(){
let estaChovendo = ("Está chovendo? sim/não")
let temTempo = ("Você tem tempo para o passeio? sim/não")

if (estaChovendo === "não" && temTempo === "não"){
    alert("Hora do passeio! ")
} else {
    alert("Hoje não vai dar... ")
}
}

function exercicio15(){
let sabor = prompt("Qual sabor de sorvete você quer?")

if (sabor === "baunilha" || sabor === "chocolate" || sabor === "morango"){
    alert("Servindo sorvete de: " + sabor)
} else {
    alert("Sabor indisponível ")
}
}

function exercicio16(){
let temIngredientePrincipal = confirm("Você tem o ingrediente principal?")
let temTemperoSecreto = confirm("Você tem o tempero secreto?")

if (temIngredientePrincipal || temTemperoSecreto){
    alert("Prato especial pronto! ")
} else {
    alert("Sem os ingredientes necessários. ")
}
}

function exercicio17(){
let valor1 = "100"
let valor2 = 100
    
console.log("== compara apenas o valor:")
console.log(valor1 == valor2) // true
console.log("=== compara valor e tipo:")
console.log(valor1 === valor2) // false
    
    alert("Veja o console (F12) para entender os operadores == e ===")
}
    

function exercicio18(){
let idade = Number(prompt("Qual a sua idade?"))
let temEquipamento = confirm("Você tem o equipamento completo?")

if (idade > 16 && temEquipamento){
    alert("Pode esquiar ")
} else {
    alert("Não liberado.")
}
}
    
function exercicio19(){
let tipoEnsino = prompt("Qual o tipo de ensino? (fundamental, médio, outro)")

if (tipoEnsino === "fundamental"){
    alert("Levar lápis ")
} else if (tipoEnsino === "médio"){
    alert("Levar caneta ")
} else {
    alert("Levar lápis e caneta ")
}
}

function exercicio20(){
let sinal1 = confirm("Sinal 1 está ativo?")
let sinal2 = confirm("Sinal 2 está ativo?")

if (sinal1 && sinal2) {
    alert("Sinal de paz enviado ")
} else {
    alert("Sem contato estabelecido.")
}
}

 