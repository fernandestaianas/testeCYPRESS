class RegistroPage {

    go() {
        cy.visit('/Register.html')
    }

    fillUser(name, lastName) {
        cy.get('input[placeholder="First Name"]').type(name)
        cy.get('input[placeholder="Last Name"]').type(lastName)
    }

    fillAddress(address) {
        cy.get('textarea[rows="3"]').type(address)
    }

    fillEmail(email) {
        cy.get('input[type=email]').type(email)
    }

    fillPhone(phone) {
        cy.get('input[type=tel]').type(phone)
    }
    
    selectGender() {
        cy.get('input[value="Male"]').check()
    }

    selectHobbies() {
        cy.get('input[value="Cricket"]').check()
        cy.get('input[value="Movies"]').check()
    }

    selectSkills(skill) {
        cy.get('#Skills').select(skill)
    }

    selectCountry(country) {
        //'Denmark'
        cy.get('#country').select(country, {force: true})
    }

    selectDateOfBirth() {
        cy.get('#yearbox').select('1998')
        cy.get('select[placeholder="Month"]').select('April')
        cy.get('select[placeholder="Day"]').select('29')
    }

    fillPassword(pass, confirmPass) {
        cy.get('#firstpassword').type(pass)
        cy.get('#secondpassword').type(confirmPass)
    }

    uploadFile() {
        cy.get('#imagesrc').selectFile('cypress/fixtures/logo.png')
    }

    submitForm() {
        cy.get('#submitbtn').click()
    }
}

export default new RegistroPage()