/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let heroes, input;
    const fetchString = "http://localhost:63342/js-exercises/_shared/api.json";
    fetch(fetchString)
        .then(function(response) {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.json();
            })
        .then(function (json) {
            heroes = json.heroes;
            document.getElementById("run").addEventListener("click", function () {
                document.getElementById("target").innerHTML = "";
                input = parseInt(document.getElementById("hero-id").value);
                const template = document.getElementById("tpl-hero");
                let target = document.getElementById("target");

                if (input >= heroes.length){
                    target.innerHTML = "enter a number between 0 and " + parseInt(heroes.length -1);
                }
                else {
                    template.content.querySelector(".name").innerHTML = heroes[input].name;
                    template.content.querySelector(".alter-ego").innerHTML = heroes[input].alterEgo;
                    template.content.querySelector(".powers").innerHTML = heroes[input].abilities;
                    let clone = template.content.cloneNode(true);
                    target.appendChild(clone);
                }

            });
            })
        .catch(function(error) {
                var p = document.createElement('p');
                p.appendChild(
                    document.createTextNode('Error: ' + error.message)
                );
                document.body.insertBefore(p, myList);
            });
})();
