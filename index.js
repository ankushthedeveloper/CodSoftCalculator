let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  if (display.value === '0' || operator) {
    display.value = '';
  }
  display.value += number;
  currentInput += number;
}

function operate(op) {
  if (currentInput) {
    previousInput = currentInput;
    currentInput = '';
    operator = op;
  }
}

function calculate() {
  if (previousInput && currentInput && operator) {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
    }

    display.value = result;
    operator = '';
    currentInput = result.toString();
    previousInput = '';
  }
}
