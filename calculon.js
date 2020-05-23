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


  /* TODO: Punkt vor Strich! */

  let foundObject = evalArr.join("").match(/[-+*/]/);
  let foundOperatorSymbol = foundObject[0];

  let numberArray = splitEquation(evalArr, foundOperatorSymbol).map(Number);

  switch (foundOperatorSymbol){
  case "+":
    return numberArray.reduce((current, next) => current + next);
    break;
  case "-":
    return numberArray.reduce((current, next) => current - next);
    break;
  case "*":
    return numberArray.reduce((current, next) => current * next);
    break;
  case "/":
    return numberArray.reduce((current, next) => current / next);
    break;
  default:
    return "ERROR";
  }
}


function splitEquation(equation, operator) {
  let operatorIndex = equation.indexOf(operator);
  let firstPart = equation.slice(0, operatorIndex).map(x => x.toString())
      .reduce((a,b) => a +b);
  let secondPart = equation.slice(operatorIndex + 1, ).map(x => x.toString())
      .reduce((a,b) => a +b);

  return [firstPart, secondPart];
}
  
/* operate Funktion erstellen, größere Gleichung in kleinere Gleichungen aufsplitten, 
 * die Gleichungen in ein Array packen und per .map Methode die operate Funktion auf sie
 * anwenden. 
 * IDEE: per for loop durch das array mit den Gleichungen loopen und die operate Funktion auf
 * alle Elemente anwenden die ungleich "+" oder "-" sind, so kann ich anschließend die operate funktion
 * auf diese eine große Gleichung in dem Array anwenden.
