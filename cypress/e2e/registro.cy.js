import registroPage from '../support/pages/index'

describe('registro', () => {

  context('Quando submeto o formulário', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    it('Deve registrar um usuário com sucesso', () => {

      const user = {
        name: 'John',
        lastName: 'Doe',
        address: 'QNM 36 Conj I cs 40',
        email: 'john.doe@gmail.com',
        phone: '1199999999',
        firstPass: 'pwd123',
        confirmPass: 'pwd123'
      }

      // vai até a pagina de cadastro
      registroPage.go()

      // preenche os campos de nome, ultimo nome, email e telefone
      registroPage.fillUser(user.name, user.lastName)
      registroPage.fillAddress(user.address)
      registroPage.fillEmail(user.email)
      registroPage.fillPhone(user.phone)

      // seleciona genero
      registroPage.selectGender()

      // seleciona hobbies
      registroPage.selectHobbies()

      // seleciona skills
      registroPage.selectSkills('Android')

      // seleciona país
      registroPage.selectCountry('Denmark')

      // Seleciona data de nascimento
      registroPage.selectDateOfBirth()

      // preenche os campos password e confirmação de password
      registroPage.fillPassword(user.firstPass, user.confirmPass)

      // anexa um arquivo
      registroPage.uploadFile()

      // Envia formulário
      registroPage.submitForm()



      // Campo languages não descobri como realizar a seleção, pois o mesmo tem uma div e não um select, uma sugestão seria o dev alterar aquele campo para o elemento correto

      // Campo Country não tem nenhuma opção listada para selecionar
    })
  })

})