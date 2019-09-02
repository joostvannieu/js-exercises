/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let heroName, heroAlterEgo, heroPowers;
    let heroes = [];
    let hero = {};
    document.getElementById("run").addEventListener("click", function () {
        heroName = document.getElementById("hero-name").value;
        heroAlterEgo = document.getElementById("hero-alter-ego").value;
        heroPowers = document.getElementById("hero-powers").value.split(", ");

        const fetchString = "http://localhost:63342/js-exercises/_shared/api.json";
        fetch(fetchString)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.json();
            })
            .then(function (json) {
                let data = json.heroes;
                if (heroes.length === 0 && heroes.length < data.length){
                    heroes = data;
                }
                hero = {
                    id: parseInt(heroes.length +1),
                    name: heroName,
                    alterEgo: heroAlterEgo,
                    abilities: heroPowers
                };
                heroes.push(hero);
                console.log(heroes);
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
