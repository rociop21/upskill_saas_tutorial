/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load'), function(){
    var theForm = $('#pro_form');
    var submitBtn = $('#form-signup-btn');
    //Set stripe public key
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
    //When user clicks form submit button prevent default submition
    submitBtn.click(function(event){
        event.preventDefault();
        submitBtn.val("Processing").prop('disabled', true);
       
        //colect credit card fields
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
        
    var error = false;
    
    if (!Stripe.card.validateCardNumber(ccNum)){
        error = true;
        alert('Credit card number appears to be invalid')
    }
    
    if (!Stripe.card.validateCVC(cvcNum)){
        error = true;
        alert('CVC number appears to be invalid')
    }
    
    if (!Stripe.card.validateExpiry(expMonth, expYear)){
        error = true;
        alert('Expiration date appears to be invalid')
    }
    
    if (error){
        submitBtn.val("Sign Up").prop('disabled', fase);
    } else{
        Stripe.createToken({
        nmber: ccNum, 
        cvc: cvcNum, 
        exp_month: expMonth, 
        exp_year: expYear
    }, stripeResponseHandler);   
    }
        
        //send info to stripe
    
    
    return false;   
    });
    
    function stripeResponseHandler(status, response){
        var token = response.id;    
    
        theForm.append($('<input type="hidden" name="user[stripe_card_token]">').val(token));
    
        theForm.get(0).submit();
    }
    
    //stripe will give us user token to put in the form and submit
});