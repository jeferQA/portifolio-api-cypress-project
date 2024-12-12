Cypress.Commands.add('insertRegister', (name, phone, address) => {
    cy.request({
        method: 'POST',
        url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo',
        body: {
            "name": name,
            "phone": phone,
            "address": address
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(201)
        expect(resp.body).property("name").to.eq(name)
        expect(resp.body).property('phone').to.eq(phone)
        expect(resp.body).property("address").to.eq(address)
    })
})

Cypress.Commands.add('alterRegisterName', (id, name) => {
    cy.request({
        method: 'PUT',
        url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo/'+ id,
        body: {
            "name": name,
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
        expect(resp.body).property("name").to.eq(name)
        expect(resp.body).property("id").to.eq(id)
    })
})

Cypress.Commands.add('alterRegisterPhone', (id, phone) => {
    cy.request({
        method: 'PUT',
        url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo/'+ id,
        body: {
            "phone": phone
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
        expect(resp.body).property("phone").to.eq(phone)
        expect(resp.body).property("id").to.eq(id)
    })
})

Cypress.Commands.add('alterRegisterAddress', (id, address) => {
    cy.request({
        method: 'PUT',
        url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo/'+ id,
        body: {
            "address": address
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
        expect(resp.body).property("address").to.eq(address)
        expect(resp.body).property("id").to.eq(id)
    })
})

Cypress.Commands.add('deleteLastRegister', () => {
    var listLength
    cy.request({
        method: 'GET',
        url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo',
    }).then((resp) =>{
        listLength = resp.body.length
        cy.request({
            method: 'DELETE',
            url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo/'+listLength,
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
        })
    })
})

Cypress.Commands.add('deleteRegister', (id) => {
    cy.request({
        method: 'DELETE',
        url: 'https://6734f1905995834c8a917363.mockapi.io/outsera_challenge/Exemplo/'+id,
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
    })
})
