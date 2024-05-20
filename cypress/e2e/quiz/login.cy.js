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
          cy.userlogin('rovianoro@gmail.com','Kelompok-8')
          cy.url().should('include','magento')
        })
        it('Failed login - Blank email', () => {
           cy.get('.panel > .header > .authorization-link').click()
           cy.get('#pass').type('Kelompok-8')
           cy.get('#send2').click()
           cy.get('.message-error').should('contain.text','required')
          })
          it('Failed login - Password incorrect', () => {
           cy.get('.panel > .header > .authorization-link').click()
           cy.userlogin(userEmail,'Kelompok-8')
           cy.get('.message-error').should('contain.text','incorrect')
          })
          it.only('Failed login - Email invalid', () => {
            cy.get('.panel > .header > .authorization-link').click()
            cy.userlogin('salah@','Kelompok-8')
            cy.get('#email-error').should('contain.text','valid')
           })
    })