 const displayElement = document.getElementById('input');

let firstNumber = "";
let secondNumber = "";
let operand = "";

document.querySelectorAll('.number')
.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    if (!operand) { 
      firstNumber += e.target.textContent;
      displayElement.value = firstNumber;
    } else {
      secondNumber += e.target.textContent;
      displayElement.value = secondNumber;
    }
  })   
});

document.querySelectorAll('.operator')
.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    if (firstNumber && operand && secondNumber) { 
      const result = calculate(); 
      displayElement.value = result; 
      firstNumber = result; 
      secondNumber = ""; 
      operand = e.target.innerText; 
      return; 
    }


    if (firstNumber) { 
      operand = e.target.innerText;
    }
    
  });
});

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {
  if (firstNumber && operand && secondNumber) { 
    const result = calculate(); 
    displayElement.value = result;
    firstNumber = result; 
    secondNumber = "";
  }
 
});

function calculate() {
  switch(operand) {
    case "+":
      return `${parseFloat(firstNumber) + parseFloat(secondNumber)}`;
    case "-":
      return `${parseFloat(firstNumber) - parseFloat(secondNumber)}`;
    case "x":
      return  `${parseFloat(firstNumber) * parseFloat(secondNumber)}`;
    case "/":
      return  `${parseFloat(firstNumber) / parseFloat(secondNumber)}`;
  };
};


document.getElementById('clear')
.addEventListener('click', (e) => {
  firstNumber = "";
  secondNumber = "";
  operand = "";
  displayElement.value = 0;
});



  








