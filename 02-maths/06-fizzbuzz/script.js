/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var msg = "";
    var i = 1;

    for (i=1; i<=100; i++){
        if (i%3 === 0){
            msg = "fizz";
            if (i%5 === 0){
                msg += "buzz";
            }
        }
        else if (i%5 === 0){
            msg = "buzz";
        }
        else msg = i;

        //Output
        document.getElementById("result").innerHTML += "<p>"+ msg +"</p>";
        //reset msg
        msg = "";
    }

})();
