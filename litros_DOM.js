function mostrar(){
    alert ("Função acionada com sucesso (manipulação de DOM)!"); // Dentro da função o ";" é importante -> Boa prática
    
    tempo = parseFloat(document.getElementById("inpTempo").value);
    velocidade = parseFloat(document.getElementById("inpVelocidade").value);
    
    console.log(tempo , velocidade);
    
    distancia = tempo * velocidade;
    
    litros = distancia/12; 
    
    alert ("A velocidade média gastas na viagem foi de: "+velocidade + " KM/H \n"+ 
    "O tempo gasto na  viagem foi de: "+tempo + " horas\n"+
    "A distância percorrida foi de: "+distancia + " KM\n"+
    "A quantidade de litros usados foi de: "+litros + " Litros");
    
    
    //tempo = parseFloat(prompt("Informe o tempo gasto na viagem: "));
    
    //velocidade = parseFloat(prompt("Informe a velocidade média dirante a viagem: "));
 }
