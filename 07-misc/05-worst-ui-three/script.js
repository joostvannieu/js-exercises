/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
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
            let inputfield = this.previousSibling.previousSibling;
            setValue(inputfield);
            //console.log(this.getAttribute("id"));
            createPhoneNumber(inputfield);
            phoneNumberToString();
            document.getElementById("target").innerHTML = phoneNmbr;
        });
    }
    //
    //Get the value inside the button label (randomize on btn click)
    function getValue(label){
        let min = label.getAttribute("data-min");
        let max = label.getAttribute("data-max");
        let value = Math.floor(Math.random()*(max-min+1)) + parseInt(min);
        return value;
    }
    //
    //Set the value inside the button label
    function setValue(label){
        let lblValue = getValue(label);
        if(lblValue < 10)
            lblValue = "0" + lblValue;
        //label.value = lblValue;
        label.setAttribute("value", lblValue);
    }
    //
    //Create the phone number
    function createPhoneNumber(label){
        //let btnValue = button.getAttribute("data-min");
        if (label.getAttribute("id") === "part-one")
            pNmbrArr[1] = label.getAttribute("value");
        else if (label.getAttribute("id") === "part-two")
            pNmbrArr[2] = label.getAttribute("value");
        else if (label.getAttribute("id") === "part-three")
            pNmbrArr[3] = label.getAttribute("value");
        else if (label.getAttribute("id") === "part-four")
            pNmbrArr[4] = label.getAttribute("value");
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
