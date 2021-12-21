function performSearch(table, elem1, elem2) {
    var filter = searchBox.value.toUpperCase();
    var trs = table.tBodies[0].getElementsByTagName("tr");
    var results = 0;

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName("td");
        trs[i].style.display = "none";

        for (var j = 0; j < tds.length; j++) {
            if (tds[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                trs[i].style.display = "";
                results++;
                continue;
            }
        }
    }

    //var txtDiv = document.getElementById("ResultsDiv").innerHTML;
    if (results == 0) {
        table.style.display = "none";
        elem1.style.display = "none";
        elem2.style.display = "none";
    } else {
        table.style.display = "";
        elem1.style.display = "";
        elem2.style.display = "";
    }
    return results;
}

function findTables() {
    var allH2 = document.getElementsByTagName("h2");
    for (var e = 0; e < allH2.length; e++) {
        allH2[e].style.display = "";
    }
    var allTables = document.getElementsByTagName("table");
    for (var i = 0; i < allTables.length; i++) {
        var table = allTables[i];
        var sibling1 = table.previousElementSibling;
        var sibling2 = sibling1;
        if (sibling1.tagName == "P") {
            sibling2 = sibling1.previousElementSibling;
        }
        performSearch(table, sibling1, sibling2);
    }
    var elements = document.querySelectorAll('h2:not([style*="display: none"])');
    //document.getElementById("ResultsDiv").innerHTML = "Number of visible h2: "+elements.length;
    for (e = 0; e < elements.length; e++) {
        var hideH2 = true;
        let sib = elements[e].nextElementSibling;
        while (sib) {
            if (sib.tagName.toUpperCase() == "TABLE") {
                if (sib.style.display != "none") {
                    hideH2 = false;
                    break;
                }
            } else if (sib.tagName.toUpperCase() == "H2") {
                break;
            }
            sib = sib.nextElementSibling;
        }

        if (hideH2) {
            elements[e].style.display = "none";
            elements[e].nextElementSibling.style.display = "none";
        } else {
            elements[e].style.display = "";
            elements[e].nextElementSibling.style.display = "";
        }
    }

}