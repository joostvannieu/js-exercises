/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
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
                let template, clone, target, heroes;
                template = document.getElementById("tpl-hero");
                target = document.getElementById("target");
                heroes = json.heroes;

                heroes.forEach(function (hero, i) {
                    template.content.querySelector(".name").innerHTML = hero.name;
                    template.content.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                    template.content.querySelector(".powers").innerHTML = hero.abilities;
                    clone = template.content.cloneNode(true);
                    target.appendChild(clone);
                })

                /*heroes.forEach(function (hero, i) {
                    clone = document.importNode(template.content, true);
                    var name  = clone.querySelectorAll("name");
                    var alterego  = clone.querySelectorAll("alter-ego");
                    var powers  = clone.querySelectorAll("powers");
                    console.log(name);
                    name[0].textContent = hero.name;
                    alterego[0].textContent = hero.alterEgo;
                    powers[0].textContent = hero.abilities;

                    target.appendChild(clone);
                })*/

                /*for (let i = 0; i < json.heroes.length; i++) {
                    clone = document.importNode(template.content, true);
                    target.appendChild(clone);
                    document.getElementsByClassName("name")[i].innerHTML = json.heroes[i].name;
                }*/
                /*
                let i = 0;
                for (hero of json.heroes){
                    clone = document.importNode(template.content, true);
                    target.appendChild(clone);
                    document.getElementsByClassName("name")[i].innerHTML = hero.name;
                    i++;
                }*/
            })

                /*for (hero of json.heroes){
                    name = hero.name;
                    alterEgo = hero.alterEgo;
                    abilities = hero.abilities;
                }*/

            //optional for error handling
                /*
            })
            .catch(function(error) {
                var p = document.createElement('p');
                p.appendChild(
                    document.createTextNode('Error: ' + error.message)
                );
                document.body.insertBefore(p, myList);
            });*/
    })
})();
