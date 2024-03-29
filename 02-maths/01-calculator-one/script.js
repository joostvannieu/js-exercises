/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        document.getElementById("result").innerHTML =
            (Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value))
    });

    document.getElementById("subtraction").addEventListener("click", function() {
        // perform a substraction
        document.getElementById("result").innerHTML =
            (Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value))
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform a multiplication
        document.getElementById("result").innerHTML =
            (Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value))
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform a division
        document.getElementById("result").innerHTML =
            (Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value))
    });
})();
