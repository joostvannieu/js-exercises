/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let userInput = "";
    let regEX = new RegExp(/(\D*\d){2}/);
    // your code here
    document.getElementById("pass-one").addEventListener("input", function () {
        userInput = document.getElementById("pass-one").value;
        if (userInput.length >= 8){
            let enoughDigits = regEX.test(userInput);
            if (enoughDigits === true){
                document.getElementById("validity").innerHTML = "ok"
            }
        }
        else document.getElementById("validity").innerHTML = "Not ok"
    })

})();
