const buttons = document.querySelectorAll(".number");
const displayArea = document.querySelector("#displayArea");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

let displayContent = [];



buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayContent.push(e.target.textContent);
    showDisplay();
  });
});


// Press the CL button to clear the displayArea by emptying the array displayContent
clearButton.addEventListener("click", (e) => {
  clearDisplay();
});

equalsButton.addEventListener("click", (e) => {
  let result = evalExpr(displayContent);
  clearDisplay();
  displayContent.push(result);
  showDisplay();
})

function showDisplay() {
// Display Numbers in displayArea
  displayArea.textContent = displayContent.join(" ");
}


function clearDisplay() {
  displayContent = [];
  showDisplay();
}

function evalExpr(evalArr) {
  // Evaluate the expression found in evalArr. The function looks
  // for an operator symbol (+, -, *, /) in the evalArr and applies
  // the operation to the numbers in the array.


  // TODO zweistellige Zahlen fixen
  let numberArray = [];
  let foundObject = evalArr.join("").match(/[-+*/]/);
  let foundOperatorSymbol = foundObject[0];

  for(let elem of evalArr) {
    if(!isNaN(elem)) {
      numberArray.push(Number(elem));
    }
  }

  switch (foundOperatorSymbol){
  case "+":
    console.log("Plus Symbol");
    return numberArray.reduce((current, next) => current + next);
    break;
  case "-":
    console.log("Minus Symbol");
    return numberArray.reduce((current, next) => current - next);
    break;
  case "*":
    console.log("Multiplication Symbol");
    return numberArray.reduce((current, next) => current * next);
    break;
  case "/":
    console.log("Division Symbol");
    return numberArray.reduce((current, next) => current / next);
    break;
  default:
    return "ERROR";
  }
}
