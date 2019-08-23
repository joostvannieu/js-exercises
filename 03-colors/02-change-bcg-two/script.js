/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        var color = document.getElementById("color").value;
        document.body.style.background = color + " url(../../_shared/img/becode-seal.png) top .5rem center no-repeat";
        //document.body.style.backgroundColor = color;
        document.body.style.backgroundSize = "auto 25vh";
    })
    })();
