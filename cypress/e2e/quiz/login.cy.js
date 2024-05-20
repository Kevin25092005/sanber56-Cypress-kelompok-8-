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
          cy.userlogin('rovianoro@gmail.com','Kelompok-8')
          cy.url().should('include','magento')
        })
          it('Failed login - Password incorrect', () => {
           cy.userlogin(userEmail,'Kelompok-8')
           cy.get('.message-error').should('contain.text','incorrect')
          })
          it('Failed login - Email invalid', () => {
            cy.userlogin('salah','Kelompok-8')
            cy.get('#email-error').should('contain.text','valid')
           })
    })