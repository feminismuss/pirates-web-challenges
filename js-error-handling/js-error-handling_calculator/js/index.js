console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  // hier steht die Anleitung fuers teilen samt Bedingung, und Fehlermeldung
  divide: (a, b) => { 
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  // hier muss die Fehlermeldung eingefuegt werden, weil hier die Berechnung auf "click" stattfindet 
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
  } 
  // der catch muss den error als parameter definiert bekommen, sonst kannt er ihn nicht anzeigen
  catch (error) {
    output.innerText = error.message;
  }
});
