$(document).ready(function() {

    function generar() {
               
        var algoritmo = String(document.getElementById('algoritmo').value);
        var apikey = document.getElementById('apikey').value;
        var merchanId = document.getElementById('merchanId').value;
        var referenceCode = document.getElementById('referenceCode').value;
        var amount = document.getElementById('amount').value;
        var currency = document.getElementById('currency').value;

        switch(algoritmo) {                
                case "md5":
                var signature = String(CryptoJS.MD5(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency));
                 break;                
                case "sha1":
                var signature = String(CryptoJS.SHA1(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency));
                 break;                 
                 case "sha256":
                var signature = String(CryptoJS.SHA256(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency));
                 break;                
}

        
        document.getElementById('signature').value = signature;
        console.log(algoritmo);
        console.log(signature);
        document.getElementById("generar").style.display = "none"; // Se deshabilita el botón con id "generar"
        document.getElementById("generarnuevo").style.visibility = "visible"; // Se habilita el boton con id "generarnuevo"
    }

/*
    function limpiar() {
        console.log("limpiar");
        document.getElementById('apikey').value = "";
        document.getElementById('merchanId').value = "";
        document.getElementById('referenceCode').value = "";
        document.getElementById('amount').value = "";
        document.getElementById('currency').value = "";
        document.getElementById('signature').value = "";
        document.getElementById("generar").style.display = ""; // Se habilita el botón con id "generar"
        document.getElementById("generarnuevo").style.visibility = "hidden"; // Se  oculta el boton con id "generarnuevo"
    }

*/

    // Función validar campos, captura de parámetros y ejecución de Hash
    $('#generar').click(function() {
        if ($('#form').valid()) {
            generar();

        } else {
            console.log("notvalid")
        }
    });

    // Función para limpiar campos y ejecución de la función inicial
    $("#generarnuevo").click(function() {
        generar();
    });

});