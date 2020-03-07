/*
* Author: Brett Kim
*/

var entry;
var TABLE_COLUMNS = 13;

$(function() {
    //Get the Google Sheets data formatted in JSON
    var sheetURL = 'https://spreadsheets.google.com/feeds/cells/1EMAV9BxUnAs-Jtvn6QsIpkik5LW6odRa8bLyxc4aMlw/1/public/full?alt=json';

    //Parse through the data
    $.getJSON(sheetURL, function(data) {
        entry = data.feed.entry;

        //The variable that will be displayed as HTML on the webpage
        output = "";

        //Create the table displayed on visualization.html
        output += "<table>";

        var newTableRow = false;
        var firstTime = true;

        //Parsing through the data from JSON to format it into a table
        var colCount = -1;
        for(i = 0; i < entry.length; i++) {

            colCount++;

            if(colCount == TABLE_COLUMNS) {
                output += "</tr>";
                firstTime = false;
                colCount = 0;
                newTableRow = true;
                console.log("Row");
                output += "<tr>";
            }
            if(firstTime) {
                output += "<th>";
                output += entry[i].content.$t;
                output += "</th>";
            }
            else {
              if(i==15){
                output += "<td>";
                output += "<a href='c1.html'>";
                output += entry[i].content.$t;
                output += "</a>";
                output += "</td>";
              }
              else if(i==28){
                output += "<td>";
                output += "<a href='c2.html'>";
                output += entry[i].content.$t;
                output += "</a>";
                output += "</td>";
              }
              else if(i==41){
                output += "<td>";
                output += "<a href='c3.html'>";
                output += entry[i].content.$t;
                output += "</a>";
                output += "</td>";
              }
              else if(colCount == 1) {
                    output += "<td class=\"score\">";
                    output += entry[i].content.$t;
                    output += "</td>";
                }
                else {
                    output += "<td>";
                    output += entry[i].content.$t;
                    output += "</td>";
                }
            }

            console.log("#: " + colCount + " Entry: " + entry[i].content.$t);
        }
        output += "</table>";

        //Display the output to the webpage.
        document.getElementById("team").innerHTML = output;

        //Used for debugging purposes solely.
        console.log(entry);
    })
});
