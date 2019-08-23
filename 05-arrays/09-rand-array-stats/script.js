/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var numbers=[];
    const SIZE = 10;
    function fillNumbers(size) {
        for (let i = 0; i < size; i++)
            numbers.push(Math.floor(Math.random()*100 + 1))
    }
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        numbers.length = 0;
        fillNumbers(SIZE);
        let max = Math.max(... numbers);
        let min = Math.min(... numbers);
        /*
        However, both spread (...) and apply will either fail or return the wrong result if the array has too many
        elements, because they try to pass the array elements as function parameters. See Using apply and built-in
        functions for more details. The reduce solution does not have this problem.
        !! Reduce in next exercise !!
        */
        let sum = numbers.reduce((total,currentValue) => total + currentValue, 0);
        /*
        Same as:
        numbers.reduce(function(total,currentValue){
           return total + currentValue
          }, 0);
        */
        let avg = sum / SIZE;
        //console.log(numbers, max, min, sum, avg);

        function write() {
            for ( i = 0; i < SIZE; i++){
                document.getElementById("n-"+(i+1)).innerHTML = numbers[i];
            }
            document.getElementById("min").innerHTML = min;
            document.getElementById("max").innerHTML = max;
            document.getElementById("sum").innerHTML = sum;
            document.getElementById("average").innerHTML = avg;
        }
        write();
    })


})();
