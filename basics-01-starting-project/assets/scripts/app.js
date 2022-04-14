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
    const enteredNumber = getUserNumberInput();
    if( calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ||
        enteredNumber === 0
    ){ //This will never run the way the code is structured.
        return;
    }
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

addBtn.addEventListener('click', calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener('click', calculateResult.bind(this,"SUBTRACT"));
multiplyBtn.addEventListener('click', calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener('click', calculateResult.bind(this,"DIVIDE"));

