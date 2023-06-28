let result = '0';

function updateResult() {
  document.getElementById('result').value = result;
}

function appendNumber(number) {
  if (result === '0') {
    result = number;
  } else {
    result += number;
  }
  updateResult();
}

function appendOperator(operator) {
  if (result.endsWith('+') || result.endsWith('-') || result.endsWith('*') || result.endsWith('/')) {
    result = result.substring(0, result.length - 1) + operator;
  } else {
    result += operator;
  }
  updateResult();
}

function calculatePercentage() {
  result = String(parseFloat(result) / 100);
  updateResult();
}

function calculateResult() {
  result = String(eval(result));
  updateResult();
}

function clearResult() {
  result = '0';
  updateResult();
}

function deleteLastCharacter() {
  result = result.substring(0, result.length - 1);
  if (result === '') {
    result = '0';
  }
  updateResult();
}

updateResult();