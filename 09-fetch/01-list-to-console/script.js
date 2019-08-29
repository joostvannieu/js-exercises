/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fetchString = "http://localhost:63342/js-exercises/_shared/api.json";
    // your code here
    document.getElementById("run").addEventListener("click", function () {
    fetch(fetchString)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        })
        .then(function (json) {
            for(var i = 0; i < json.heroes.length; i++) {
                console.log(json.heroes[i].id);
                console.log(json.heroes[i].name);
                console.log(json.heroes[i].alterEgo);
                console.log(json.heroes[i].abilities);
            }
        })
        .catch(function(error) {
            var p = document.createElement('p');
            p.appendChild(
                document.createTextNode('Error: ' + error.message)
            );
            document.body.insertBefore(p, myList);
        });
    })
})();
