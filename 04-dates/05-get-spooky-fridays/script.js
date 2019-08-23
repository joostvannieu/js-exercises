/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        var year = new Date();
        document.getElementById("output").innerHTML = "";
        year.setFullYear(document.getElementById("year").value, 0, 13);
        //alert(year);
        for (var i=0; i<12; i++){
            year.setMonth(i);
            console.log(year.getMonth());
            if (year.getDay() === 5)
                document.getElementById("output").innerHTML += "<h3>" + MONTHS[year.getMonth()] + "</h3>";
        }
    })

})();
