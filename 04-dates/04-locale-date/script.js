/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    function setTime() {
        const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var monthName = MONTHS[month];
        var day = today.getUTCDate();
        var dayOfWeek = WEEKDAYS[today.getDay()];
        var dateString = dayOfWeek + " " + day + " " + monthName + " " + year;
        var timeString = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var t = setTimeout(setTime, 500);
        // your code here
        document.getElementById("target").innerHTML = "<h2>" + dateString + "\n" + timeString + "</h2>"
    }
    setTime();
})();

/*
* toLocalDateString is setable in the way it formats a dateString, check its prototype on MDN
* */
