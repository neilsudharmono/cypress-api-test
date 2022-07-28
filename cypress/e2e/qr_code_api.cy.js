import {
    UpdateQRWithValidParameter,
    UpdateQRDescription,
    UpdateQRCallbackURL,
    UpdateQRAmount,
    UpdateQRWithInvalidAuth,
    UpdateQRInvalidCallbackURL,
    UpdateQRBelowValidAmount,
    UpdateQRBelowNegativeAmount,
    UpdateQRMinAmount,
    UpdateQRMaxAmount,
    UpdateQRAboveMaxAmount,
    UpdateQRWithInvalidJSON,
    UpdateQRWithNonExistentQR,
    UpdateQRWithUsedQR
  } from './create_hackathon.method';
  var automationHackathonName;

describe('QR Code API Testing', function () {

    it('Update QR With Valid Parameter',function () {  
        UpdateQRWithValidParameter()
    })

    it('Update QR Description',function () {  
        UpdateQRDescription()
    }) 

    it('Update QR Callback URL',function () {  
        UpdateQRCallbackURL()
    }) 

    it('Update QR Amount',function () {  
        UpdateQRAmount()
    }) 

    it('Update QR With Invalid Auth',function () {  
        UpdateQRWithInvalidAuth()
    }) 

    it('Update QR Invalid Callback URL',function () {  
        UpdateQRInvalidCallbackURL()
    }) 

    it('Update QR Below Valid Amount',function () {  
        UpdateQRBelowValidAmount()
    }) 

    it('Update QR Below Negative Amount',function () {  
        UpdateQRBelowNegativeAmount()
    }) 

    it('Update QR Minimal Amount',function () {  
        UpdateQRMinAmount()
    }) 

    it('Update QR Maximum Amount',function () {  
        UpdateQRMaxAmount()
    }) 

    it('Update QR Above Maximum Amount',function () {  
        UpdateQRAboveMaxAmount()
    }) 

    it('Update QR With Invalid JSON',function () {  
        UpdateQRWithInvalidJSON()
    }) 

    it('Update QR With Non Existent QR',function () {  
        UpdateQRWithNonExistentQR()
    }) 

    it('Update QR With Used QR',function () {  
        UpdateQRWithUsedQR()
    }) 
    

    
})

