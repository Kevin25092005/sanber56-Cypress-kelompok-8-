import editPage from "../../support/PageObject/PageEdit.cy";
import loginPage from "../../support/PageObject/Login.cy";

describe('Edit Account and address', () => {
    beforeEach(() => {
        cy.visit('')
    })
        it('Succesfully Edit - First Name & Last Name', () => {
            cy.userlogin('rovianoro@gmail.com','Kelompok-8')
            cy.visit('https://magento.softwaretestingboard.com/customer/account/')
            cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
            cy.get('#firstname').clear().type('Kelompok')
            cy.get('#lastname').clear().type('delapan')
            cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
            cy.url().should('include','magento')
            cy.get('.message-success').should('contain.text','saved')
        })
        it.only('Succesfully Edit - Blank First Name & Last Name', () => {
            cy.userlogin('rovianoro@gmail.com','Kelompok-8')
            cy.visit('https://magento.softwaretestingboard.com/customer/account/')
            cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
            cy.get('#firstname').clear()
            cy.get('#lastname').clear()
            cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
            cy.get('#firstname-error').should('contain.text','required field')
        })
          
    })