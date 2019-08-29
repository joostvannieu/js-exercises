/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let style = "<style>\n" +
        "table, th, td {border: 1px solid black;" +
        "border-collapse: collapse;" +
        "padding: 10px;}\n" +
        "</style>";
    let rows = 10;
    let columns = 10;
    let tableOpenTag = "<table>";
    let tableCloseTag = "</table>";
    let tableRowOpenTag = "<tr>";
    let tableRowCloseTag = "</tr>";
    let tableHeaderOpenTag = "<th>";
    let tableHeaderCloseTag = "</th>";
    let tableDatacellOpenTag = "<td>";
    let tableDatacellCloseTag = "</td>";

    function tableBuilder(r, c){
        let tableString = tableOpenTag + tableRowOpenTag;
        for (let x = 0; x < c; x++){
            tableString += tableHeaderOpenTag + (x+1) + tableHeaderCloseTag;
        }
        r--;
        tableString += tableRowCloseTag;
        for (let y = 0; y < r; y++ ){
            tableString += tableRowOpenTag;
            for (let x = 0; x < c; x++){
                tableString += tableDatacellOpenTag + (y+2)*(x+1) + tableDatacellCloseTag;
            }
            tableString += tableRowCloseTag;
        }
        tableString += tableCloseTag;
        return tableString;
    }
    // your code here
    document.getElementsByTagName("head").item(0).innerHTML += style;
    document.getElementById("target").innerHTML = tableBuilder(rows, columns);

})();
