$(document).ready(function() {

    function generar() {
               
        var algoritmo = String(document.getElementById('signature_algorithm').value);
        var apikey = document.getElementById('signature_apikey').value;
        var merchanId = document.getElementById('signature_merchanId').value;
        var referenceCode = document.getElementById('signature_referenceCode').value;
        var amount = document.getElementById('signature_amount').value;
        var currency = document.getElementById('signature_currency').value;

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
        document.getElementById("signature_generate").style.display = "none"; // Se deshabilita el botón con id "generar"
        document.getElementById("signature_generate_again").style.visibility = "visible"; // Se habilita el boton con id "generarnuevo"
    }

/*
    function limpiar() {
        console.log("limpiar");
        document.getElementById('signature_apikey').value = "";
        document.getElementById('signature_merchanId').value = "";
        document.getElementById('signature_referenceCode').value = "";
        document.getElementById('signature_amount').value = "";
        document.getElementById('signature_currency').value = "";
        document.getElementById('signature').value = "";
        document.getElementById("signature_generate").style.display = ""; // Se habilita el botón con id "generar"
        document.getElementById("signature_generate_again").style.visibility = "hidden"; // Se  oculta el boton con id "generarnuevo"
    }

*/

    // Función validar campos, captura de parámetros y ejecución de Hash
    $('#signature_generate').click(function() {
        if ($('#form').valid()) {
            generar();

        } else {
            console.log("notvalid")
        }
    });

    // Función para limpiar campos y ejecución de la función inicial
    $("#signature_generate_again").click(function() {
        if ($('#form').valid()) {
            generar();

        } else {
            console.log("notvalid")
        }
    });

});