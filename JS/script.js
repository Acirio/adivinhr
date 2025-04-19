//TO DO LIST:

//FEEDBACK: FEITO
//HISTÓRICO DE TENTATIVAS: FEITO
//CONTADOR DE TENTATIVAS:  FEITO
//AO ACERTAR O NÚMERO, REVELÁ-LO: FEITO
//BÔNUS: ALTERAR A COR DO FEEDBACK DEPENDENDEDO DELE, SE PERTO, VER, SE LONGE, VERMELHO.

let secretNumber;
let numberHistory = [];

function numberGenerator(){
    secretNumber = Math.ceil(Math.random() * 100);
    console.log(secretNumber);
    return secretNumber;
}

window.onload = numberGenerator;



function compare(inputNumber){
    let subtraction = Math.abs(inputNumber - secretNumber);
    
    if (subtraction === 0){
        document.getElementById("secretNumber").textContent = secretNumber;
        return  "Você acertou!";
        
    } else if (subtraction >= 1 && subtraction <= 20){
            return  "Você está perto!";
        } else {
            return  "Você está longe!";
        }
}

function teste(){
    let inputNumber = document.getElementById("number").value;
    let result = compare(inputNumber);
    

    numberHistory.push(inputNumber);

    document.getElementById("tentativas").textContent = `${numberHistory.length}`;
    document.getElementById("number_history").textContent = `${numberHistory.join(",")}`;
    document.getElementById("feedback_text").textContent = result;
    
    document.getElementById("number").value = "";
}

function reset(){
    numberGenerator()

    numberHistory.length = 0;
    //Limpa o array. Mas se o array for uma const, eles não será redefinido.

    document.getElementById("tentativas").textContent = `0`;
    document.getElementById("number_history").textContent = ``;
    document.getElementById("feedback_text").textContent = "Tente um número de 1-100.";
    document.getElementById("secretNumber").textContent = "?";
    document.getElementById("number").value = "";
}