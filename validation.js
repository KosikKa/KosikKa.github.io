function validateString(data){

    if(data == null || data == undefined)
        return false;

    for(let i = 0; i < data.length;i++){

        let char = data.charAt(i);
        
        if(isDigit(char) || isSpecialSymbol(char))
            continue;

        if(!(isLowerCase(char) || isUpperCase(char)))
            return false;
    
    }   

    return true;
}

function isLowerCase(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startLowerCaseCode && code <= endLowerCaseCode);
}

function isUpperCase(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startUpperCaseCode && code <= endUpperCaseCode);

}

function isDigit(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startNumberCode && code <= endNumberCode);
}

function isSpecialSymbol(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    return specialSymbols.includes(symbol);
}