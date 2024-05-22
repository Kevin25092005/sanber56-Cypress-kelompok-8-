class editPage {
    firstName = '#firstname'
    editAccount = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    saveButton = '#form-validate > .actions-toolbar > div.primary > .action'
    editAddress = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'

    inputFirstName(firstName){
        cy.get(this.firstName).clear().type(firstName)
    }

    clickEditAccount(){
        cy.get(this.saveButton).click()
    }
    clickEditAddress(){
        cy.get(this.editAddress).click()
    }
}
export default editPage