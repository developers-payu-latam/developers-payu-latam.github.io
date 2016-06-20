$(function() {
    
    function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
     //   evt.preventDefault();
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
            signature_apikey: {
                required: true,
                minlength: 18,
                maxlength: 32
            },
            signature_merchanId: {
                required: true,
                minlength: 6,
                maxlength: 7,
                positiveNumber: true,
                number: true
            },
            signature_referenceCode: {
                required: true,
                minlength: 1,
                maxlength: 255
            },
            signature_amount: {
                required: true,
                minlength: 1,
                maxlength: 14,
                positiveNumber: true,
                number: true
            },
            signature_currency: {
                required: true,
                minlength: 3,
                maxlength: 3
            }
            },

            messages: {

                signature_apikey: {
                    required: errApiKeyReq,
                    minlength: errApiKeyMin,
                    maxlength: errApiKeyMax,
                },
                signature_merchanId: {
                    required: errMerchantReq,
                    minlength: errMerchantMin,
                    maxlength: errMerchantMax,
                    number: errMerchantNum,
                },
                signature_referenceCode: {
                    required: errReferenceReq,
                    minlength: errReferenceMin,
                    maxlength: errReferenceMax,
                },
                signature_amount: {
                    required: errAmountReq,
                    minlength: errAmountMin,
                    maxlength: errAmountMax,
                    number: errAmountNum,
                },
                signature_currency: {
                    required: errCurrReq,
                    minlength: errCurrMin,
                    maxlength: errCurrMax
                }

            },
            tooltip_options: {
                thefield: { placement: 'center' }
            }
    });

});