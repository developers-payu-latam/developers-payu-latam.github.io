$(function() {
    
    function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
        return false;
    }
    return true;
   }
   
   $(".number").keypress(function(e){     
       isNumber(e);
   });
    
  $.validator.addMethod('positiveNumber',
    function (value) { 
        return Number(value) > 0;
    }, 'Ingresa un valor positivo');
    
  $("#form").validate({

        rules: {
            apikey: {
                required: true,
                minlength: 18,
                maxlength: 32
            },
            merchanId: {
                required: true,
                minlength: 6,
                maxlength: 12,
                positiveNumber: true
            },
            referenceCode: {
                required: true,
                minlength: 1,
                maxlength: 255
            },
            amount: {
                required: true,
                minlength: 1,
                maxlength: 14,
                positiveNumber: true
            },
            currency: {
                required: true,
                minlength: 3,
                maxlength: 3
            }
            },

            messages: {
                apikey: {
                    required: "Ingresa un Apikey",
                    minlength: "Ingresa un Apikey de minimo 18 digitos",
                    maxlength: "Ingresa un Apikey de maximo 32 digitos",
                },
                merchanId: {
                    required: "Ingresa el id de comercio",
                    minlength: "Ingresa un id de comercio de minimo 6 digitos",
                    maxlength: "Ingresa un id de comercio de maximo 6 digitos",
                },
                referenceCode: {
                    required: "Ingresa una referencia",
                    minlength: "Ingresa una referencia",
                    maxlength: "Ingresa una referencia de maximo 255 digitos",
                },
                amount: {
                    required: "Ingresa un monto",
                    minlength: "Ingresa un monto",
                    maxlength: "Ingresa un monto de maximo 14 digitos",
                },
                currency: {
                    required: "Ingresa el codigo de la moneda en formato ISO 4217",
                    minlength: "Ingresa un codigo de minimo 3 digitos",
                    maxlength: "Ingresa un codigo de maximo 3 digitos"
                }
            },
            tooltip_options: {
                thefield: { placement: 'center' }
            }
    });

});