/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        let removalId = document.getElementById("hero-id").value;

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
                console.log("before removal");
                for (let hero of data)
                    console.log(hero);

                if (isNaN(removalId) || removalId >= data.length) {
                    console.log("error, enter digit from 0 to " + parseInt(data.length - 1));}
                else {
                    data.splice(removalId, 1);
                    console.log("after removal");
                    for (let hero of data)
                        console.log(hero);
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
