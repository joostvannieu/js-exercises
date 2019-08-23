/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var operandOne;
    var operandTwo;
    var result;

    var performOperation = function(operation) {
        operandOne = Number(document.getElementById("op-one").value);
        operandTwo = Number(document.getElementById("op-two").value);
        // perform the operation
        switch (operation) {
            case "addition":
                result = operandOne + operandTwo;
                break;
            case "subtraction":
                result = operandOne - operandTwo;
                break;
            case "multiplication":
                result = operandOne * operandTwo;
                break;
            case "division":
                result = operandOne / operandTwo;
                break;
        }
        document.getElementById("result").innerHTML = result;
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
