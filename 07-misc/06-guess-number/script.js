/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    let random = Math.floor(Math.random()*100) + 1;
    console.log(random);
    let guess = parseInt(prompt("guess a value 1-100"));
    console.log(guess);
    while (guess !== random) {
        if (guess < random)
            guess = parseInt(prompt("higher"));
        else if (guess > random)
            guess = parseInt(prompt("lower"));
    }
    alert("Correct!")


})();
