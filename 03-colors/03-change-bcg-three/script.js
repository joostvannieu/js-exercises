/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const COLOR_VARIATIONS = 16777216; //possible variations in hexadecimal color notation (6 digits, 16 values each, so 16^6)
    function setColor(){
        //radix 16 is for hexadecimal value generation (10 would be for decimal etc etc)
        return ("#" + Math.floor(Math.random() * COLOR_VARIATIONS).toString(16));
    }
    // your code here
    document.getElementById("run").addEventListener("click", function() {
        document.body.style.background = setColor() + " url(../../_shared/img/becode-seal.png) top .5rem center no-repeat";
        document.body.style.backgroundSize = "auto 25vh";
    })
    })();
