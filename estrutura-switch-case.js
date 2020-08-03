/*
var
// Seção de Declarações das variáveis
   valor01, valor02, resultado: real
   operacao: caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
// A proposta deste programa é calcular dois valores baseados na operação de sua escolha
   escreva("Digite o primeiro valor: ")
   leia(valor01)
   escreva("Digite a operação: EX: +, *, -, /: ")
   leia(operacao)
   escreva("Digite o Segundo valor: ")
   leia(valor02)
   
   escolha operacao
            caso "+"
             resultado := valor01 + valor02
            caso "-"
             resultado := valor01 - valor02
            caso "*"
             resultado := valor01 * valor02
             caso "/"
             resultado := valor01 / valor02

  fimescolha
   escreva("O resultado do calculo é: ", resultado)
   */

   function acaoBotao() {
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: EX: +, *, -, /: : ")
    valor02 = prompt("Digite o segundo valor: ")
    switch(operacao){
        case "+":
            resultado = parseInt( valor01 ) + parseInt(valor02)
        break;
    case "-":
        resultado = parseInt( valor01 ) - parseInt(valor02)
        break;
    case "*":
        resultado = parseInt( valor01 ) * parseInt(valor02)
        break;
    case "/":
        resultado = parseInt( valor01 ) / parseInt(valor02)
        break;        

    }
    document.getElementById("paragrafo").innerText = resultado  
}