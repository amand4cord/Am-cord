function exercicio22() {
    let ano = Number(prompt("Digite o ano para viajar:"))
    if (ano < 2020){
    alert("Viajando para o passado...")
    } else if (ano > 2020){
    alert("Rumo ao futuro!")
    } else {
    alert("Você está no presente!")
    }
    }
    
    function exercicio23() {
    let botao = prompt("Qual botão foi pressionado? (A ou B)").toUpperCase()
    if (botao === "A") {
    alert("Você pulou!")
    } else if (botao === "B") {
    alert("Você correu!")
    } else {
    alert("Botão desconhecido.")
    }
    }
    
    function exercicio24(){
    let ehFinalDeSemana = confirm("É final de semana?")
    let tempo = prompt("Como está o tempo?").toLowerCase()
    if (ehFinalDeSemana && tempo === "ensolarado"){
    alert("Bora pra praia!")
    } else {
    alert("Melhor ficar em casa.")
    }
    }
    
    function exercicio25(){
    let temAgua = ("Você está usando água?")
    let temSabao = ("Você está usando sabão?")
    if (temAgua && temSabao){
    alert("Espuma ativada! ")
    } else {
    alert("Nada acontece.")
    }
    }
    
    function exercicio26(){
    let dia = Number(prompt("Qual o dia de hoje?"))
    let mes = Number(prompt("Qual o mês de hoje? (Número, ex: 5 para Maio)"))
    
    const diaAniversario = 17
    const mesAniversario = 5
    
    if (dia === diaAniversario && mes === mesAniversario) {
    alert("Feliz Aniversário! ")
    } else {
    alert("Hoje não é seu aniversário.")
    }
    }
    
    function exercicio27() {
    let hora = Number(prompt("Que horas são agora? (0-23)"))
    if (hora < 12) {
    alert("Bom dia!")
    } else if (hora < 18) {
    alert("Boa tarde!")
    } else {
    alert("Boa noite!")
    }
    }
    
    function exercicio28() {
    let interruptor = prompt("O interruptor está ligado ou desligado?").toLowerCase()
    if (interruptor === "ligado") {
    alert("Luz acesa 💡")
    } else {
    alert("Luz apagada.")
    }
    }
    
    function exercicio29() {
    let temAlho = confirm("Você tem alho?")
    let temCruz = confirm("Você tem uma cruz?")
    if (temAlho || temCruz) {
    alert("Você venceu o vampiro!")
    } else {
    alert("Você corre perigo!")
    }
    }
    
    function exercicio30() {
    let codigoDigitado = prompt("Digite o código para desbloquear:")
    if (codigoDigitado === "1234") {
    alert("Celular desbloqueado ")
    } else {
    alert("Código incorreto! ")
    }
    }
    
    function exercicio31() {
    let tempoCorrida = Number(prompt("Digite o tempo da corrida (em segundos):"))
    if (tempoCorrida < 10) {
    alert("Você venceu! ")
    } else {
    alert("Tente novamente.")
    }
    }
    
    function exercicio32() {
    let vida = Number(prompt("Digite a vida atual do personagem:"))
    if (vida < 50) {
    alert("Usando cogumelo ")
    } else {
    alert("Não é necessário ainda.")
    }
    }
    
    
    function exercicio34() {
    let valor = Number(prompt("Insira o valor em reais:"))
    if (valor >= 5) {
    alert("Produto liberado!")
    } else {
    alert("Valor insuficiente.")
    }
    }
    
    function exercicio35() {
    let pontos = Number(prompt("Digite sua pontuação (0 a 100):"))
    if (pontos >= 80 && pontos <= 100) {
    alert("Medalha de ouro! ")
    } else {
    alert("Sem medalha. Continue treinando!")
    }
    }
    
    function exercicio36() {
    let cor1 = prompt("Digite a primeira cor:").toLowerCase()
    let cor2 = prompt("Digite a segunda cor:").toLowerCase()
    
    if ((cor1 === "azul" && cor2 === "amarelo") || (cor1 === "amarelo" && cor2 === "azul")) {
    alert("Resultado da mistura: verde ")
    } else {
    alert("Cor inválida para mistura.")
    }
    }
    
    function exercicio37() {
    let diasEntrega = Number(prompt("Quantos dias para entrega?"))
    if (diasEntrega < 2) {
    alert("Entrega expressa ")
    } else {
    alert("Entrega padrão.")
    }
    }
    
    function exercicio38() {
    let data = prompt("Qual a data de hoje? (formato: dd/mm)").trim()
    let temFantasia = confirm("Você está usando fantasia?")
    
    if (data === "31/10" && temFantasia) {
    alert("Doces para você! ")
    } else {
    alert("Nada de doces hoje...")
    }
    }
    
    
    function exercicio39() {
    let temperatura = Number(prompt("Qual a temperatura agora (em °C)?"))
    
    if (temperatura < 0) {
    alert("Água congelando! ")
    } else {
    alert("A temperatura está acima do congelamento.")
    }
    }
    
    function exercicio40() {
    let resposta = prompt("Digite a sequência de cores:")
    let respostaCerta = "azul, verde, vermelho"
    
    if (resposta.trim().toLowerCase() === respostaCerta) {
    alert("Você venceu a memória! ")
    } else {
    alert("Sequência incorreta. Tente novamente.")
    }
    }
    

