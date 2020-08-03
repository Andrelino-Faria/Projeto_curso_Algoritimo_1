
function acaoBotao(){
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que cai ser verificado a idade:")
    contador = 0
        while(contador < limite){
            nome = prompt ("Digite o nome da pessoa: ")
            idade = prompt ("Digite a idade do " + nome)
            if (idade > 18)
                document.getElementById("paragrafo").innerText = nome + " Voce é maior de idade: "
            else
                document.getElementById("paragrafo").innerText = nome + " Voce é menor de idade: "
            contador++   
    
    
        }
}
    

