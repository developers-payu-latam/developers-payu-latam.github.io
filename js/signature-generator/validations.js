$(function() {


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
                maxlength: 12
            },
            referenceCode: {
                required: true,
                minlength: 1,
                maxlength: 255
            },
            amount: {
                required: true,
                minlength: 1,
                maxlength: 14
            },
            currency: {
                required: true,
                minlength: 3,
                maxlength: 3
            }
            },

            messages: {
                apikey: {
                    required: "Por favor ingrese un Apikey",
                    minlength: "Por favor ingrese un Apikey de minimo 18 digitos",
                    maxlength: "Por favor ingrese un Apikey de maximo 32 digitos",
                },
                merchanId: {
                    required: "Por favor ingrese el id de comercio",
                    minlength: "Por favor ingrese un id de comercio de minimo 6 digitos",
                    maxlength: "Por favor ingrese un id de comercio de maximo 6 digitos",
                },
                referenceCode: {
                    required: "Por favor ingrese una referencia",
                    minlength: "Por favor ingrese una referencia",
                    maxlength: "Por favor ingrese una referencia de maximo 255 digitos",
                },
                amount: {
                    required: "Por favor ingrese un monto",
                    minlength: "Por favor ingrese un monto",
                    maxlength: "Por favor ingrese un monto de maximo 14 digitos",
                },
                currency: {
                    required: "Por favor ingrese el codigo de la moneda en formato ISO 4217",
                    minlength: "Por favor ingrese un codigo de minimo 3 digitos",
                    maxlength: "Por favor ingrese un codigo de maximo 3 digitos"
                }
            }        
    });

});