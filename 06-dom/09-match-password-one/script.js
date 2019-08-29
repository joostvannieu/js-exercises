/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        let passOne = document.getElementById("pass-one").value;
        let passTwo = document.getElementById("pass-two").value;
        if (passOne !== passTwo){
            let inputFields = document.querySelectorAll("input");
            inputFields.forEach(function (field) {
                field.style.borderColor = "red";
            })
        }
        else {
            let inputFields = document.querySelectorAll("input");
            inputFields.forEach(function (field) {
                field.style.borderColor = "darkgrey";
            })
        }
    });
})();
