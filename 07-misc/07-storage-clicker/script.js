/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    console.log(sessionStorage.getItem("value"));
    let target = document.getElementById("target");
    if (sessionStorage.getItem("value") === null)
        target.innerHTML = "0";
    else
        target.innerHTML = sessionStorage.getItem("value");

    // your code here
    document.getElementById("increment").addEventListener("click", function () {
        let value = parseInt(target.innerHTML);
        value++;
        target.innerHTML = value;
        sessionStorage.setItem("value", value);
    })

})();
