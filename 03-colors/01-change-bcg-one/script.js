/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
   /*
   var buttons = parseInt(document.getElementsByTagName("button").length)-1;
   var i = 0;

   for (i = 0; i<=buttons; i++) {
       document.getElementsByTagName("button")[i].addEventListener("click", function (i) {
           document.body.style.backgroundColor = document.getElementsByTagName("button")[i].id;
       });
   }
   */
    document.getElementById("red").addEventListener("click", function() {
        document.body.style.backgroundColor = this.id;
    });
    document.getElementById("green").addEventListener("click", function() {
        document.body.style.backgroundColor = this.id;
    });
    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.backgroundColor = this.id;
    });
    document.getElementById("blue").addEventListener("click", function() {
        document.body.style.backgroundColor = this.id;
    });

})();
