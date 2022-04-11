const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //stores the operations made.

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier,prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries)
}

function calculateResult(calculationType){
    if( calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE"
    ){ //This will never run the way the code is structured.
        return;
    }
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD"){
        currentResult = currentResult + enteredNumber; //Addition
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult = currentResult - enteredNumber; //Subtraction
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult = currentResult * enteredNumber;
        mathOperator = "*";
    } else {
        currentResult = currentResult / enteredNumber;
        mathOperator = "/";
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
    calculateResult("ADD");
}

function subtract(){
    calculateResult("SUBTRACT");
}

function multiply(){
    calculateResult("MULTIPLY");
}

function divide(){
    calculateResult("DIVIDE");
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

