/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    function carouselLoop(x){
        document.getElementById("next").addEventListener("click", function () {
            if (x%5 === 0) {x = 0;}
            document.getElementsByTagName("figure").item(0).innerHTML = "<img alt=' ' src=" + gallery[x] +">";
            return x++;
        });
    }

    for (var i = 1; i<5 ;){
        i = carouselLoop (i);
        console.log(i);
    }

})();
