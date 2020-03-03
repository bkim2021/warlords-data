/*
* Author: Brett Kim
*/

//Column arrays
var col1 = [];
var col2 = [];
var col3 = [];
var col4 = [];

var entry;

var TABLE_COLUMNS = 13;

$(function() {
    var sheetURL = 'https://spreadsheets.google.com/feeds/cells/1EMAV9BxUnAs-Jtvn6QsIpkik5LW6odRa8bLyxc4aMlw/1/public/full?alt=json';

    $.getJSON(sheetURL, function(data) {
        entry = data.feed.entry;

        output = "";

        output += "<table>";

        var newTableRow = false;
        var firstTime = true;

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
            } else {
                if(colCount == 1) {
                    output += "<td class=\"score\">";
                    output += entry[i].content.$t;
                    output += "</td>";
                } else {
                  if(i==15){
                    output += "<td>";
                    output += "<a href='c1.html'>";
                    output += entry[i].content.$t;
                    output += "</a>";
                    output += "</td>";
                  }
                  if(i==28){
                    output += "<td>";
                    output += "<a href='c2.html'>";
                    output += entry[i].content.$t;
                    output += "</a>";
                    output += "</td>";
                  }
                  if(i==41){
                    output += "<td>";
                    output += "<a href='c3.html'>";
                    output += entry[i].content.$t;
                    output += "</a>";
                    output += "</td>";
                  }
                    output += "<td>";
                    output += entry[i].content.$t;
                    output += "</td>";
                }
            }

            console.log("#: " + colCount + " Entry: " + entry[i].content.$t);
        }
        output += "</table>";

        document.getElementById("team").innerHTML = output;

        console.log(entry);
    })
});
