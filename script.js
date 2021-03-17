const displayElement = document.getElementById('input');

let firstNumber = "";
let secondNumber = "";
let operand = null;

document.querySelectorAll('.number')
.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
   
    if (!operand) { 
      firstNumber += e.target.textContent;
      displayElement.value = firstNumber;
    }
    else {
      secondNumber += e.target.textContent;
      displayElement.value = secondNumber;
    }
  })   
});

document.querySelectorAll('.operator')
.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    
    if (firstNumber && operand !== null && secondNumber) { 
      const result = calculate();
      displayElement.value = result;
      firstNumber = result;
      secondNumber = "";
      operand = e.target.innerText;
      return; 
    }

    if (firstNumber) { 
      operand = e.target.innerText;
      return; 
    }

  });
});


document.getElementById('equals')
.addEventListener('click', (e) => {
  const result = calculate();
  displayElement.value = result;
  firstNumber = result;
  secondNumber = "";
  operand = "";
});

function calculate() {
  switch(operand) {
    case "+":
      return parseFloat(firstNumber) + parseFloat(secondNumber);
    case "-":
      return parseFloat(firstNumber) - parseFloat(secondNumber);
    case "x":
      return  parseFloat(firstNumber) * parseFloat(secondNumber);
    case "/":
      return  parseFloat(firstNumber) / parseFloat(secondNumber);
  };
};

document.getElementById('clear')
.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operand = null;
    displayElement.value = 0;
});

  








