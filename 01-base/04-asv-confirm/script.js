/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    class user{
        constructor (age, gender, town){
            this.age = prompt("what is your age?");
            this.gender = prompt("what is your gender?");
            this.town = prompt("what town are your from?");
    }
    }
    do {
        person = new user();
    } while (!confirm("Your age is " + person.age +
        "\nYour gender is " + person.gender +
        "\nYour hometown is " + person.town +
        "\nIs this correct?"));
    alert("Thanks!");
})();
