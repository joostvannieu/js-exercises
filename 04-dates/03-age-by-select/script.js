/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        var dob = new Date();
        var dobD = document.getElementById("dob-day").value;
        var dobM = document.getElementById("dob-month").value - 1;
        var dobY = document.getElementById("dob-year").value;
        var age;

        dob.setFullYear(dobY, dobM, dobD);
        //alert(dob);
        age = Math.floor((Date.now()-dob)/(365.25*24*60*60*1000)); //days(incl. leapyears)*hours*minutes*seconds*miliseconds
        alert("You are " + age + " years old");
    })
    })();
