const inputField = document.getElementById("input_field");
const outputField = document.getElementById("result_field");
const button = document.getElementById("calculate_button");

function calculateEntropy(password){

    let H = 0.0;

    for(let i = 0;i < password.length;i++){
        let probability = getProbability(password[i]);
        let log2 = Math.log2(probability);

        H += Math.abs((probability * log2));
    }
    
    return Math.fround(Math.abs(H));

};

function getProbability(char){
    if(isDigit(char))
        return 1 / totalNumbers;
    if(isSpecialSymbol(char))
        return 1 / totalSpecialSymbols;

    return 1 / totalChars;
}


button.addEventListener("click", ()=>{
    
    if(!validateString(inputField.value)){
        alert("Неверно заполнено поле пароля");
        outputField.value = 0.0;
        return;
    }

    outputField.value = calculateEntropy(inputField.value);
});