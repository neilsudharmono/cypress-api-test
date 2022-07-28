
var qr_code_id,qr_id_not_found,qr_used

let UpdateQRWithValidParameter= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'description': 'This is the QR Description',
            'callback_url': 'http://callback-url.com/here',
            'amount': 5000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(200)
        expect(description).to.eq('OK')
        expect(body[0].description).to.eq('This is the QR Description')
        expect(body[0].callback_url).to.eq('http://callback-url.com/here')
        expect(body[0].amount).to.eq(5000)
      })

}

let UpdateQRDescription= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'description': 'This is the QR Description update'
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(200)
        expect(description).to.eq('OK')
        expect(body[0].description).to.eq('This is the QR Description update')
      })

}

let UpdateQRCallbackURL= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'callback_url': 'http://callback-url.com/update',
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(200)
        expect(description).to.eq('OK')
        expect(body[0].callback_url).to.eq('http://callback-url.com/update')
      })

}

let UpdateQRAmount= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'amount': 7000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(200)
        expect(description).to.eq('OK')
        expect(body[0].amount).to.eq(7000)
      })

}

let UpdateQRWithInvalidAuth= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{invalid auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'description': 'This is the QR Description',
            'callback_url': 'http://callback-url.com/here',
            'amount': 5000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(403)
        expect(description).to.eq('Forbidden')
        expect(body[0].description).to.not.eq('This is the QR Description')
        expect(body[0].callback_url).to.not.eq('http://callback-url.com/here')
        expect(body[0].amount).to.not.eq(5000)
      })

}

let UpdateQRInvalidCallbackURL= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'callback_url': 'update',
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(400)
        expect(description).to.eq('API_VALIDATION_ERROR')
      })

}

let UpdateQRBelowValidAmount= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'amount': 1000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(400)
        expect(description).to.eq('API_VALIDATION_ERROR')
      })

}

let UpdateQRBelowNegativeAmount= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'amount': -1000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(400)
        expect(description).to.eq('API_VALIDATION_ERROR')
      })

}

let UpdateQRMinAmount= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'amount': 1500
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(200)
        expect(description).to.eq('OK')
        expect(body[0].amount).to.eq(1500)
      })

}

let UpdateQRMaxAmount= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'amount': 5000000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(200)
        expect(description).to.eq('OK')
        expect(body[0].amount).to.eq(5000000)
      })

}

let UpdateQRAboveMaxAmount= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'amount': 10000000
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(400)
        expect(description).to.eq('API_VALIDATION_ERROR')
      })

}


let UpdateQRWithInvalidJSON= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_code_id, 
        body: {
            'description': 'This is the QR Description',
            'callback_url': 'http://callback-url.com/here',
            'amount': 5000,
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(400)
        expect(description).to.eq('INVALID_JSON_FORMAT')
      })

}

let UpdateQRWithNonExistentQR= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_id_not_found, 
        body: {
            'description': 'This is the QR Description',
            'callback_url': 'http://callback-url.com/here',
            'amount': 5000,
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(404)
        expect(description).to.eq('QR_CODE_NOT_FOUND_ERROR')
      })

}

let UpdateQRWithUsedQR= ()=> {
    cy.request({
        method: 'PATCH', 
        headers: {
            authorization: '{any auth that used}'
        },
        url: '/qr_codes/:'+qr_used, 
        body: {
            'description': 'This is the QR Description',
            'callback_url': 'http://callback-url.com/here',
            'amount': 5000,
          }
      }).then( ({ status,description,body }) => {
        expect(status).to.eq(400)
        expect(description).to.eq('QR_CODE_CODE_IN_USE')
      })

}


export {
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
    
}
