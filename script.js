document.addEventListener("DOMContentLoaded", function() {

    const textDiv = document.getElementById("text");
    const clearButton = document.getElementById("clear");
    const zeroButton = document.getElementById("zero");
    const oneButton = document.getElementById("one");
    const twoButton = document.getElementById("two");
    const threeButton = document.getElementById("three");
    const fourButton = document.getElementById("four");
    const fiveButton = document.getElementById("five");
    const sixButton = document.getElementById("six");
    const sevenButton = document.getElementById("seven");
    const eightButton = document.getElementById("eight");
    const nineButton = document.getElementById("nine");
    const addButton = document.getElementById("add");
    const subtractButton = document.getElementById("subtract");
    const multiplyButton = document.getElementById("multiply");
    const divideButton = document.getElementById("divide");
    const equalButton = document.getElementById("equal");
    const plusMinusButton = document.getElementById("plusMinus");
    const decimalPointButton = document.getElementById("decimalPoint");
    const percentButton = document.getElementById("percent");



    let result = 0;
    let operator = "add";
    let resetScreen = false;
    let decimalDisabled = false;
    

    zeroButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "0";
        } else {
            textDiv.textContent = "0";
            resetScreen = true;
        }
    });

    oneButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "1";
        } else {
            textDiv.textContent = "1";
            resetScreen = true;
        }
    });

    twoButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "2";
        } else {
            textDiv.textContent = "2";
            resetScreen = true;
        }
    });

    threeButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "3";
        } else {
            textDiv.textContent = "3";
            resetScreen = true;
        }
    });

    fourButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "4";
        } else {
            textDiv.textContent = "4";
            resetScreen = true;
        }
    });

    fiveButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "5";
        } else {
            textDiv.textContent = "5";            
            resetScreen = true;
        }
    });

    sixButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "6";
        } else {
            textDiv.textContent = "6";
            resetScreen = true;
        }

    });

    sevenButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "7";
        } else {
            textDiv.textContent = "7";
            resetScreen = true;
        }

    });

    eightButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "8";
        } else {
            textDiv.textContent = "8";
            resetScreen = true;
        }
    });

    nineButton.addEventListener("click", function() {
        if (resetScreen == true) {
            textDiv.textContent += "9";
        } else {
            textDiv.textContent = "9";
            resetScreen = true;
        }
    });

    clearButton.addEventListener("click", function() {
        textDiv.textContent = "";
        result = 0;
        operator = "add";
        decimalDisabled = false;
    });

    addButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = Math.round((operate(result, secondNumber)) * 10000000000000) / 10000000000000;
        resetScreen = false;
        textDiv.textContent = result;
        operator = "add";
        decimalDisabled = false;
    });

    subtractButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = Math.round((operate(result, secondNumber)) * 10000000000000) / 10000000000000;
        resetScreen = false;
        textDiv.textContent = result;
        operator = "subtract";
        decimalDisabled = false;
    });

    multiplyButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = Math.round((operate(result, secondNumber)) * 10000000000000) / 10000000000000;
        resetScreen = false;
        textDiv.textContent = result;
        operator = "multiply";
        decimalDisabled = false;
    });

    divideButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = Math.round((operate(result, secondNumber)) * 10000000000000) / 10000000000000;
        resetScreen = false;
        textDiv.textContent = result;
        operator = "divide";
        decimalDisabled = false;
    });

    equalButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = Math.round((operate(result, secondNumber)) * 10000000000000) / 10000000000000;
        resetScreen = false;
        textDiv.textContent = result;
        result = 0;
        operator = "add";
        secondNumber = "";
        resetScreen = false;
    })

    plusMinusButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = -secondNumber;
        resetScreen = false;
        textDiv.textContent = result;
        operator = "add";
        decimalDisabled = false;
    })

    decimalPointButton.addEventListener("click", function () {
        if (resetScreen === true) {
        if (decimalDisabled === false) {        
            textDiv.textContent += ".";
            decimalDisabled = true;
        }
    }
    })

    percentButton.addEventListener("click", function() {
        let secondNumber = parseFloat(textDiv.textContent);
        result = secondNumber / 100;
        resetScreen = false;
        textDiv.textContent = result;
        operator = "add";
        decimalDisabled = false;
    })

    function operate(a,b) {

        if (operator === "add") {
            return a + b;
        }

        if (operator === "subtract") {
            return a - b;
        }

        if (operator === "multiply") {
            return a * b;
        }

        if (operator === "divide") {
            if (b === 0) {
                return "not a number";
            } else {
            return a / b;
            }
        }

    }

});











