/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function getSomePersons() {
        var result = await window.lib.getPersons();
        if (result !== undefined)
            console.log(result);
        else
            console.error(result);
    }
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        getSomePersons();
    })
})();
