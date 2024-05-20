import loginPage from '../../support/PageObject/Login'

describe('Login', () => {
    function randomEmail(){
        const randomString = Math.random().toString(36).substring(2,10)
        const email = randomString + "@gmail.com"
        return email
    }

    let userEmail = randomEmail()
    beforeEach(() => {
        cy.visit('')
    })
        it('Succesfully login', () => {
          cy.get('.panel > .header > .authorization-link').click()
          cy.get('#email').type("rovianoro@gmail.com")
          cy.get('#pass').type('Kelompok-8')
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
          cy.url().should('include','magento')
        })
        it('Failed login - Blank email', () => {
           cy.get('.panel > .header > .authorization-link').click()
            cy.get('#pass').type('Kelompok-8')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('.message-error').should('contain.text','required')
          })
          it('Failed login - Blank password', () => {
            cy.get('.panel > .header > .authorization-link').click()
            cy.get('#email').type('rovianoro@gmail.com')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('.message-error').should('contain.text','required')
           })
          it('Failed login - Password incorrect', () => {
           cy.get('.panel > .header > .authorization-link').click()
           cy.get('#email').type(userEmail)
           cy.get('#pass').type('salah')
           cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
           cy.get('.message-error').should('contain.text','incorrect')
          })
          it.only('Failed login - Email invalid', () => {
            cy.get('.panel > .header > .authorization-link').click()
            cy.get('#email').type('salah')
            cy.get('#pass').type('salah')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('#email-error').should('contain.text','valid email')
           })
    })