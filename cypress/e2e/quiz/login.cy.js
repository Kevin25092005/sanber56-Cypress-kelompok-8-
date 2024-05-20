//import loginPage from cypress\support\PageObject\Login.js

describe('Login', () => {
    function randomEmail(){
        const randomString = Math.random().toString(36).substring(2,10)
        const email = randomString + "@gmail.com"
        return email
    }

    let userEmail = randomEmail()

        it('Succesfully login', () => {
          cy.visit('https://magento.softwaretestingboard.com/')
          cy.get('.panel > .header > .authorization-link').click()
          cy.get('#email').type("rovianoro@gmail.com")
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Kelompok-8')
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
          cy.url().should('include','magento')
        })
        it.only('Failed login - Blank email', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link').click()
            cy.get('#email').type(" ")
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Kelompok-8')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('#email-error').should('contain.text','required field.')
          })
          it('Failed login - Password incorrect', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link').click()
            cy.get('#email').type(userEmail)
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Kelompok-8')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('.message-error').should('contain.text','incorrect')
          })

    })