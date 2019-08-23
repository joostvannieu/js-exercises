/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var timestamp = new Date();
    var currentTimeH = timestamp.getHours();
    var currentTimeM = timestamp.getMinutes();
    if (currentTimeM < 10)
        currentTimeM = "0" + currentTimeM;
    var currentTime = parseInt("" + currentTimeH + currentTimeM);
    //console.log(currentTime);
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    if (currentTime < 1730){
            document.getElementById("target").innerHTML = "<h1>Hello</h1>";
    }
    else{
        document.getElementById("target").innerHTML = "<h1>Good Evening</h1>";
    }

})();
