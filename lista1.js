function exercicio2(){
let idade = Number(prompt("Digite sua idade: "));
let temEspadaMagica = prompt("Tem espada mágica? Sim/Não");

if(idade >= 18 && temEspadaMagica == "Sim"){
	console.log("Você pode lutar contra o dragão!")
} else {
	console.log("Fuja enquanto é tempo!")
}
}

function exercicio3(){
let temDinheiro = prompt("Tem dinheiro? Sim/Não");
let estaComFome = prompt("Está com fome? Sim/Não");
let hojeSexta = prompt("Hoje é sexta? Sim/Não");


if((temDinheiro && estaComFome) || hojeSexta){
    console.log("Vamos pedir pizza!")
} else {
    console.log("Hoje não é dia de pizza.")
}
}

function exercicio4(){
    let fruta = prompt("Digite a fruta para o suco: Laranja, Uva ou Morango");

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



