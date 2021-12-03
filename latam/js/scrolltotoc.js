var strLocation = window.location.pathname;
var strsplit = strLocation.split('/');
if (strsplit[1].length > 2) {
    var folder = '/' + strsplit[1];
    strLocation = strLocation.replace(folder, '');
}

var element = document.getElementById(strLocation);
element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
