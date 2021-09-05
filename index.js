let op1Set = false;
let op1 = "";
let op2 = "";
let operand = "";
let operandSet = false;
let answer = ""


function numberEntered(num) {
    if (!op1Set) {

        op1 += num;
    }
    else {
        op2 += num;
    }
}

function operandEnter(op) {
    if (!operandSet) {
        operand += op;
        op1Set = true;
        operandSet = true;
    }
}

function calculate() {
    let num1 = parseInt(op1, 10);
    let num2 = parseInt(op2, 10);
    let ans = 0;
    if (operand == "+") {
        ans = num1 + num2;
        answer += ans;
    }
    else if (operand == "-") {
        ans = num1 - num2;
        answer += ans;
    }
    else if (operand == "*") {
        ans = num1 * num2;
        answer += ans;
    }
    else if (operand == "/") {
        if (num2 != 0) {
            ans = num1 / num2
            answer += ans;
        }
        else {
            answer += "Cannot divide by 0";
        }
    }
    document.getElementById("output-value").innerHTML = answer;

    answer = "";
    op1Set = false;
    op1 = "";
    op2 = "";
    operand = "";
    operandSet = false;

}


