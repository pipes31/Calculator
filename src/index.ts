let firstNumber: number = 0;
let secondNumber: number = 0;
let displayId: HTMLElement | null = document.getElementById("display");
let value: string = "";
let setter: boolean = false;
let operator: string = "";
let dot: boolean = false;
let result: number = 0;
const operators = [
  "addition",
  "subtraction",
  "multiplication",
  "division",
  "equal",
];

const displayValue = (i?: string) => {
  if (displayId) {
    if (i === undefined) {
      i = "";
      displayId.textContent = value + i;
    } else {
      displayId.textContent = value + i;
    }
  }
};
const displayResult = () => {
  value = result.toString().slice(0, 9);
  firstNumber = result;
  displayValue();
};
// Función para borrar Datos
function reset() {
  firstNumber = 0;
  secondNumber = 0;
  value = "0";
  setter = false;
  operator = "";
  dot = false;
  result = 0;
  displayValue();
}

// function to display the number in the calculator
const displayNumber = (newNumber: string) => {
  value = (value + newNumber).slice(0, 9);
  value = parseFloat(value).toString();
  displayValue();
  numberChecker();
};

// Función de los operadores
const mathOperation = (id: string) => {
  switch (id) {
    case "addition":
      operator = "addition";
      value = "";
      break;
    case "subtraction":
      operator = "subtraction";
      value = "";
      break;
    case "multiplication":
      operator = "multiplication";
      value = "";
      break;
    case "division":
      operator = "division";
      value = "";
      break;
    case "equal":
      solution();
  }
  setter = true;
  dot = false;
  operator;
  console.log(value);
};

const addition = () => {
  result = firstNumber + secondNumber;
  displayResult();
};

const subtraction = () => {
  result = firstNumber - secondNumber;
  displayResult();
};

const multiplication = () => {
  result = firstNumber * secondNumber;
  displayResult();
};

const division = () => {
  result = firstNumber / secondNumber;
  displayResult();
};

// Checking the number inserted.
const numberChecker = () => {
  if (setter === false) {
    firstNumber = parseFloat(value);
  } else if (setter === true) {
    secondNumber = parseFloat(value);
  }
};
// function to get the solution
const solution = () => {
  switch (operator) {
    case "addition":
      addition();
      break;
    case "subtraction":
      subtraction();
      break;
    case "multiplication":
      multiplication();
      break;
    case "division":
      division();
      break;
  }
  setter = false;
  dot = false;
};

const sqrtResult = () => {
  if (firstNumber >= 0) {
    result = Math.sqrt(firstNumber);
    value = result.toString().slice(0, 9);
    displayValue();
  } else {
    result = Math.sqrt(firstNumber * -1);
    value = result.toString().slice(0, 9);
    displayValue("j");
  }
};

// Función para Cambiar de Signo el Número
document.getElementById("sign")?.addEventListener("click", function () {
  if (firstNumber != 0) {
    value = (-1 * parseFloat(value)).toString();
    displayValue();
    numberChecker();
  }
});

// Función de asignación de punto
document.getElementById("punto")?.addEventListener("click", function () {
  if (!dot) {
    value = (value + ".").slice(0, 8);
    displayValue();
  }
  dot = true;
});

document.getElementById("0")?.addEventListener("click", function () {
  if (firstNumber != 0) {
    value = value + "0";
    displayValue();
    numberChecker();
  }
});

document.getElementById("sqrt")?.addEventListener("click", function () {
  sqrtResult();
});

document.getElementById("on")?.addEventListener("click", function () {
  reset();
});

// Aplicando efecto al oprimir tecla
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {});
  function addClickEffect(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        element.style.opacity = "0.5";
        setTimeout(function () {
          element.style.opacity = "1";
        }, 50);
      });
    }
  }

  function clickedNumber(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        displayNumber(id);
      });
    }
  }

  function operationalKey(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        mathOperation(id);
      });
    }
  }

  for (let i = 0; i <= 4; i++) {
    const id = operators[i];
    operationalKey(id);
  }

  addClickEffect("on");
  addClickEffect("sign");
  addClickEffect("dividido");
  for (let i = 1; i <= 9; i++) {
    addClickEffect(i.toString());
    clickedNumber(i.toString());
  }
  addClickEffect("0");
  addClickEffect("mas");
  addClickEffect("menos");
  addClickEffect("por");
  addClickEffect("punto");
  addClickEffect("igual");
});
