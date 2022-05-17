function loadBanner(innerText) {
    var sp1 = document.createElement("div");
    sp1.setAttribute("id", "banner");
    var subdiv = document.createElement("div");
    subdiv.setAttribute("id", "banner-content");
    subdiv.innerHTML = innerText;

    var ele = document.querySelectorAll('[role="main"]')[0];
    var positionInfo = ele.getBoundingClientRect();
    var width = positionInfo.width;

    if( screen.width > 770 ) {
        sp1.style.marginLeft = "-48px"
        sp1.style.width = "" + width + "px"
        sp1.style.position = "fixed"; 
    } else {
        sp1.style.width = "97%"
        sp1.style.position = "initial";
    }

    sp1.appendChild(subdiv);

    var sp2 = document.querySelectorAll('[aria-label="breadcrumb"]')[0];
    var parentDiv = sp2.parentNode;
    parentDiv.insertBefore(sp1, sp2);

    if( screen.width > 770 ) {
        var elemHeight = sp1.getBoundingClientRect().height;
        var rems = Math.ceil(elemHeight/16);
        sp2.style.marginTop = rems+"rem";
    } else {
        document.getElementsByClassName('td-content')[0].style.marginTop = "1rem";
    }
}

function refreshBanner() {
    var EleName = document.getElementById("banner");

    if(EleName) {
        var ele = document.querySelectorAll('[role="main"]')[0];
        var positionInfo = ele.getBoundingClientRect();
        var width = positionInfo.width;
        var elemHeight = EleName.getBoundingClientRect().height;

        if(screen.width > 770 ) {
            EleName.style.width = "" + width + "px"
            EleName.style.position = "fixed";
            EleName.style.marginLeft = "-48px"
        } else {
            EleName.style.width = "97%"
            EleName.style.position = "initial";
            EleName.style.marginLeft = "initial"
        }

        var sp2 = document.querySelectorAll('[aria-label="breadcrumb"]')[0];
        
        if(screen.width > 770 ) {
            var rems = Math.ceil(elemHeight/16) - 1;
            sp2.style.marginTop = rems+"rem";
            document.getElementsByClassName('td-content')[0].style.marginTop = "initial";
        } else {
            document.getElementsByClassName('td-content')[0].style.marginTop = "1rem";
        }
    }
}