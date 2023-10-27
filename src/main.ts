let firstNumber: number = 0;
let secondNumber: number = 0;
let displayId: HTMLElement | null = document.getElementById("display");
let value: string = "";
let setter: boolean = false;
let operator: number = 0;
let dot: boolean = false;
let result: number = 0;

// Función para borrar Datos
function reset() {
  firstNumber = 0;
  secondNumber = 0;
  value = "";
  setter = false;
  operator = 0;
  if (displayId) {
    displayId.innerHTML = "0";
  }
}

// Checking the number inserted.
const numberChecker = () => {
  if (setter === false) {
    firstNumber = parseFloat(value);
  } else if (setter === true) {
    secondNumber = parseFloat(value);
  }
};

// Función para mostrar en pantalla
function showNumber(a: string) {
  value = value + a;
  if (displayId) {
    displayId.innerHTML = value;
  }
  numberChecker();
}

// Función de los operadores
function mathOperation(a: number) {
  switch (a) {
    case 1:
      operator = 1;
      break;
    case 2:
      operator = 2;
      break;
    case 3:
      operator = 3;
      break;
    case 4:
      operator = 4;
      break;
  }
  value = "";
  setter = true;
  dot = false;
}

const addition = () => {
  result = firstNumber + secondNumber;
  value = result.toString();
  if (displayId) {
    displayId.innerHTML = value;
  }
};

const subtraction = () => {
  result = firstNumber - secondNumber;
  value = result.toString();
  if (displayId) {
    displayId.innerHTML = value;
  }
};

const multiplication = () => {
  result = firstNumber * secondNumber;
  value = result.toString();
  if (displayId) {
    displayId.innerHTML = value;
  }
};

const division = () => {
  result = firstNumber / secondNumber;
  value = result.toString();
  if (displayId) {
    displayId.innerHTML = value;
  }
};

// Función para mostrar el Resultado
function solution() {
  switch (operator) {
    case 1:
      addition();
      break;
    case 2:
      subtraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
  }
  setter = false;
  dot = false;
}

const sqrtResult = () => {
  result = Math.sqrt(firstNumber);
  value = result.toString();
  if (displayId) {
    displayId.innerHTML = value;
  }
};

// Función para Cambiar de Signo el Número
document.getElementById("sign")?.addEventListener("click", function () {
  value = (-1 * parseFloat(value)).toString();
  if (displayId) {
    displayId.innerHTML = value;
  }
  numberChecker();
});

// Función de asignación de punto
document.getElementById("punto")?.addEventListener("click", function () {
  if (!dot) {
    value = value + ".";
    if (displayId) {
      displayId.innerHTML = value;
    }
  }
  dot = true;
});

document.getElementById("0")?.addEventListener("click", function () {
  if (firstNumber != 0) {
    value = value + "0";
    if (displayId) {
      displayId.innerHTML = value;
    }
    numberChecker();
  }
});

// Aplicando efecto al oprimir tecla
document.addEventListener("DOMContentLoaded", function () {
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

  addClickEffect("on");
  addClickEffect("sign");
  addClickEffect("dividido");
  for (let i = 1; i <= 9; i++) {
    addClickEffect(i.toString());
  }
  addClickEffect("0");
  addClickEffect("mas");
  addClickEffect("menos");
  addClickEffect("por");
  addClickEffect("punto");
  addClickEffect("igual");
});
