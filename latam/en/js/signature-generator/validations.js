/*$(function() {
    
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
    
  
    
    $("#signature_form").validate({

        rules: {
            signature_apikey: {
                required: true,
                minlength: 5,
                maxlength: 32
            },
            signature_merchanId: {
                required: true,
                minlength: 5,
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
                    positiveNumber: errMerchantPosi,
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
                    positiveNumber: errAmountPosi,
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
    
    $("#signature_form_response_page").validate({

        rules: {
            signature_apikey_response_page: {
                required: true,
                minlength: 5,
                maxlength: 32
            },
            signature_merchanId_response_page: {
                required: true,
                minlength: 5,
                maxlength: 7,
                positiveNumber: true,
                number: true
            },
            signature_referenceCode_response_page: {
                required: true,
                minlength: 1,
                maxlength: 255
            },
            signature_amount_response_page: {
                required: true,
                minlength: 1,
                maxlength: 14,
                positiveNumber: true,
                number: true
            },
            signature_currency_response_page: {
                required: true,
                minlength: 3,
                maxlength: 3
            },
            signature_transaction_state_response_page: {
                required: true,
                minlength: 1,
                maxlength: 3
            }
            },

            messages: {

                signature_apikey_response_page: {
                    required: errApiKeyReq,
                    minlength: errApiKeyMin,
                    maxlength: errApiKeyMax,
                },
                signature_merchanId_response_page: {
                    required: errMerchantReq,
                    minlength: errMerchantMin,
                    maxlength: errMerchantMax,
                    number: errMerchantNum,
                },
                signature_referenceCode_response_page: {
                    required: errReferenceReq,
                    minlength: errReferenceMin,
                    maxlength: errReferenceMax,
                },
                signature_amount_response_page: {
                    required: errAmountReq,
                    minlength: errAmountMin,
                    maxlength: errAmountMax,
                    number: errAmountNum,
                },
                signature_currency_response_page: {
                    required: errCurrReq,
                    minlength: errCurrMin,
                    maxlength: errCurrMax
                },
                signature_transaction_state_response_page: {
                    required: errTsReq,
                    minlength: errTsMin,
                    maxlength: errTsMax
                }

            },
            tooltip_options: {
                thefield: { placement: 'center' }
            }
    }); 
    
    $("#signature_form_confirmation_page").validate({

        rules: {
            signature_apikey_confirmation_page: {
                required: true,
                minlength: 5,
                maxlength: 32
            },
            signature_merchanId_confirmation_page: {
                required: true,
                minlength: 5,
                maxlength: 7,
                positiveNumber: true,
                number: true
            },
            signature_referenceCode_confirmation_page: {
                required: true,
                minlength: 1,
                maxlength: 255
            },
            signature_amount_confirmation_page: {
                required: true,
                minlength: 1,
                maxlength: 14,
                positiveNumber: true,
                number: true
            },
            signature_currency_confirmation_page: {
                required: true,
                minlength: 3,
                maxlength: 3
            },
            signature_state_pol_confirmation_page: {
                required: true,
                minlength: 1,
                maxlength: 1
            }
            },

            messages: {

                signature_apikey_confirmation_page: {
                    required: errApiKeyReq,
                    minlength: errApiKeyMin,
                    maxlength: errApiKeyMax,
                },
                signature_merchanId_confirmation_page: {
                    required: errMerchantReq,
                    minlength: errMerchantMin,
                    maxlength: errMerchantMax,
                    number: errMerchantNum,
                },
                signature_referenceCode_confirmation_page: {
                    required: errReferenceReq,
                    minlength: errReferenceMin,
                    maxlength: errReferenceMax,
                },
                signature_amount_confirmation_page: {
                    required: errAmountReq,
                    minlength: errAmountMin,
                    maxlength: errAmountMax,
                    number: errAmountNum,
                },
                signature_currency_confirmation_page: {
                    required: errCurrReq,
                    minlength: errCurrMin,
                    maxlength: errCurrMax
                },
                signature_state_pol_confirmation_page: {
                    required: errSpReq,
                    minlength: errSpMin,
                    maxlength: errSpMax
                }

            },
            tooltip_options: {
                thefield: { placement: 'center' }
            }
    }); 

});*/