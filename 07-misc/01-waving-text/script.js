/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let style = "<style>" +
        ".s0{font-size: 10px}\n" +
        ".s1{font-size: 16px}\n" +
        ".s2{font-size: 22px}\n" +
        ".s3{font-size: 28px}\n" +
        ".s4{font-size: 34px}\n" +
        "</style>";
    let waveString = document.getElementById("target").innerText.split("");
    let html = "";
    //let wrapper = document.createElement("div");
    //let el = document.getElementById("target");

    for (let i = 0; i < waveString.length;){
        let ud = 0;
        for (ud; ud < 4 && i < waveString.length; ud++){
            html += "<span class='s" + ud + "'>" + waveString[i] + "</span>";
            i++;
        }
        for (ud; ud > 0 && i < waveString.length; ud--){
            html += "<span class='s" + ud + "'>" + waveString[i] + "</span>";
            i++;
        }
    }

    document.getElementsByTagName("head").item(0).innerHTML += style;
    //document.getElementById("target").parentNode.insertBefore(wrapper, el);
    //wrapper.appendChild(el);
    document.getElementById("target").innerHTML = html;

})();
