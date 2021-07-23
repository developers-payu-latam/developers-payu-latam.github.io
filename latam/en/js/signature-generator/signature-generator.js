$(document).ready(function() {

    function generar(id) {       
               
        //console.log("id del apikey" + $('#'+id).children().children('signature_apikey').value);
               
        console.log("generar func " + " " + id);
        
        if (id == "signature_form")
        {   
            var algoritmo = String(document.getElementById('signature_algorithm').value);
            var apikey = document.getElementById('signature_apikey').value;
            var merchanId = document.getElementById('signature_merchanId').value;
            var referenceCode = document.getElementById('signature_referenceCode').value;
            var amount = document.getElementById('signature_amount').value;
            var currency = document.getElementById('signature_currency').value;
            
            switch(algoritmo)
            {                
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
            
            document.getElementById('signature_generated').value = signature;
            console.log(algoritmo);
            console.log(signature);
            document.getElementById("signature_generate").style.display = "none"; // Se deshabilita el botón con id "generar"
            document.getElementById("signature_generate_again").style.visibility = "visible"; // Se habilita el boton con id "generarnuevo"
        }
        
        else if (id == "signature_form_response_page")
        {
            var algoritmo = String(document.getElementById('signature_algorithm_response_page').value);
            var apikey = document.getElementById('signature_apikey_response_page').value;
            var merchanId = document.getElementById('signature_merchanId_response_page').value;
            var referenceCode = document.getElementById('signature_referenceCode_response_page').value;
            var amount = document.getElementById('signature_amount_response_page').value;
            var currency = document.getElementById('signature_currency_response_page').value;            
            var transactionState = document.getElementById('signature_transaction_state_response_page').value;            
            
            switch(algoritmo)
            {                
                case "md5":
                    var signature = String(CryptoJS.MD5(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency + "~" + transactionState));
                    break;
                
                case "sha1":                    
                    var signature = String(CryptoJS.SHA1(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency + "~" + transactionState));
                    break;             
                 
                case "sha256":           
                    var signature = String(CryptoJS.SHA256(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency + "~" + transactionState));
                    break;                    
            }
            
            document.getElementById('signature_generated_response_page').value = signature;
            console.log(algoritmo);
            console.log(signature);
            document.getElementById("signature_generate_response_page").style.display = "none"; // Se deshabilita el botón con id "generar"
            document.getElementById("signature_generate_again_response_page").style.visibility = "visible"; // Se habilita el boton con id "generarnuevo"
        }
        
        else
        {
            var algoritmo = String(document.getElementById('signature_algorithm_confirmation_page').value);
            var apikey = document.getElementById('signature_apikey_confirmation_page').value;
            var merchanId = document.getElementById('signature_merchanId_confirmation_page').value;
            var referenceCode = document.getElementById('signature_referenceCode_confirmation_page').value;
            var amount = document.getElementById('signature_amount_confirmation_page').value;
            var currency = document.getElementById('signature_currency_confirmation_page').value;            
            var statePol = document.getElementById('signature_state_pol_confirmation_page').value;
            
            switch(algoritmo)
            {                
                case "md5":
                    var signature = String(CryptoJS.MD5(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency + "~" + statePol));
                    break;
                
                case "sha1":                    
                    var signature = String(CryptoJS.SHA1(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency + "~" + statePol));
                    break;             
                 
                case "sha256":           
                    var signature = String(CryptoJS.SHA256(apikey + "~" + merchanId + "~" + referenceCode + "~" + amount + "~" + currency + "~" + statePol));
                    break;                    
            }
            
            document.getElementById('signature_generated_confirmation_page').value = signature;
            console.log(algoritmo);
            console.log(signature);
            document.getElementById("signature_generate_confirmation_page").style.display = "none"; // Se deshabilita el botón con id "generar"
            document.getElementById("signature_generate_again_confirmation_page").style.visibility = "visible"; // Se habilita el boton con id "generarnuevo"
        }
    }

    // Función para ejecutar  la función generar() del formulario de datos
    $('#signature_generate').click(function(){   
        if ($('#signature_form').valid()) 
        {
            var id = $(this).parent().attr('id');
            console.log(id);
            generar(id);
        }         
        else 
        {
            console.log("notvalid")
        }
    });

    // Función para volver a ejecutar  la función generar() del formulario de datos
    $("#signature_generate_again").click(function() {
        if ($('#signature_form').valid()) 
        {
            var id = $(this).parent().attr('id');
            console.log(id);
            generar(id);

        } 
        else
        {
            console.log("notvalid")
        }
    });
    
    // Función para ejecutar  la función generar() de la pagina de respuesta
    $('#signature_generate_response_page').click(function(){   
        if ($('#signature_form_response_page').valid()) 
        {
            var id = $(this).parent().attr('id');
            console.log(id);
            generar(id);
        }         
        else 
        {
            console.log("notvalid")
        }
    });

    // Función para volver a ejecutar  la función generar() de la pagina de respuesta
    $("#signature_generate_again_response_page").click(function() {
        if ($('#signature_form_response_page').valid()) 
        {
            var id = $(this).parent().attr('id');
            console.log(id);
            generar(id);

        } 
        else
        {
            console.log("notvalid")
        }
    });  
    
    // Función para ejecutar  la función generar() de la pagina de confirmación
    $('#signature_generate_confirmation_page').click(function(){   
        if ($('#signature_form_confirmation_page').valid()) 
        {
            var id = $(this).parent().attr('id');
            console.log(id);
            generar(id);
        }         
        else 
        {
            console.log("notvalid")
        }
    });

    // Función para volver a ejecutar  la función generar() de la pagina de confirmación
    $("#signature_generate_again_confirmation_page").click(function() {
        if ($('#signature_form_confirmation_page').valid()) 
        {
            var id = $(this).parent().attr('id');
            console.log(id);
            generar(id);

        } 
        else
        {
            console.log("notvalid")
        }
    });  
   
});