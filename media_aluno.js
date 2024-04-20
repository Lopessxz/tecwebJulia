function calculaMedia(){

const nome = document.getElementById("nomeAluno").value
const nota1 = parseFloat(document.getElementById("number").value); //inputs
const nota2 = parseFloat(document.getElementById("number1").value);

media = (nota1+nota2)/2;//Calculo da variavel de saida

console.log(media);
console.log(nota1); // mostrar a variavel de saida
//Para aprovação considere media >= 7.0

if(media>=7){ 
    alert("O aluno "+nome+"obteve média= "+media+ " \n Resultado: "+ "Aprovado");
 }

 else{

    alert("O aluno "+nome+"obteve média= "+media+ " \n Resultado: "+ "Reprovado ");

}

}