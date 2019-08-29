/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x  = document.getElementsByTagName("img").item(0).getAttribute("data-hover");
    document.getElementsByTagName("img").item(0).addEventListener("mouseover", function () {
        //document.getElementsByTagName("figure").item(0).innerHTML = "<img alt='kiss heart' src=" + x +">";
        document.getElementsByTagName("figure").item(0).setAttribute("src", x);
    })
    
})();
