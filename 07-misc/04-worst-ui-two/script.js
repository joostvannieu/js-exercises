/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    let phoneNmbr = document.getElementById("target").innerHTML;
    let pNmbrArr = [];
    let buttons = Array.from(document.getElementsByTagName("button"));

    //Create the initial phone number Array
    function initializeNumber(){
        pNmbrArr.push(phoneNmbr.slice(0,1) + "32");
        pNmbrArr.push(phoneNmbr.slice(1,4));
        pNmbrArr.push(phoneNmbr.slice(4,6));
        pNmbrArr.push(phoneNmbr.slice(6,8));
        pNmbrArr.push(phoneNmbr.slice(8,10));
    }
    initializeNumber();
    //
    //Setup eventlistener for all buttons
    buttons.forEach(checkClick);
    function checkClick(btn){
        btn.addEventListener("click", function () {
            setValue(this);
            //console.log(this.getAttribute("id"));
            createPhoneNumber(this);
            phoneNumberToString();
            document.getElementById("target").innerHTML = phoneNmbr;
        });
    }
    //
    //Get the value inside the button (increment by 1 on click)
    function getValue(button){
        let min = button.getAttribute("data-min");
        let max = button.getAttribute("data-max");
        let value = parseInt(button.innerHTML);
        if (value < max && value >= min)
            value++;
        else
            value = parseInt(min);
        return value;
    }
    //
    //Set the value inside the button
    function setValue(button){
        let btnValue = getValue(button);
        if(btnValue < 10)
            btnValue = "0" + btnValue;
        button.innerHTML = btnValue;
    }
    //
    //Create the phone number
    function createPhoneNumber(button){
        //let btnValue = button.getAttribute("data-min");
        if (button.getAttribute("id") === "part-one")
            pNmbrArr[1] = button.innerHTML;
        else if (button.getAttribute("id") === "part-two")
            pNmbrArr[2] = button.innerHTML;
        else if (button.getAttribute("id") === "part-three")
            pNmbrArr[3] = button.innerHTML;
        else if (button.getAttribute("id") === "part-four")
            pNmbrArr[4] = button.innerHTML;
    }
    //
    //Create a string out of the different parts of the phonenumber
    function phoneNumberToString() {
        phoneNmbr = "";
        pNmbrArr.forEach(function (part) {
            phoneNmbr += part;
        });
    }
    //
})();
