import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

      // before (function() {
      //       cy.log('Tudo aqui é executado antes de TODOS os casos de teste')
      // })

      // after (function() {
      //       cy.log('Tudo aqui é executado DEPOIS de TODOS os casos de teste')
      // })

      // beforeEach (function() {
      //       cy.log('Tudo aqui é executado sempre ANTES DE CADA caso de teste')
      // })

      // afterEach (function() {
      //       cy.log('Tudo aqui é executado sempre DEPOIS DE CADA caso de teste')
      // })

      // beforeEach(function() {
      //       cy.fixture('deliver').then((d)=>{
      //             this.deliver = d
      //       })
      // })

      it('User should be deliver', function () {


            var deliver = signupFactory.deliver()

            signupPage.go()
            signupPage.fillForm(deliver)
            signupPage.submit()


            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signupPage.modalContentSholdBe(expectedMessage)
      })

      it('Incorrect Document', function () {

            var deliver = signupFactory.deliver()

            deliver.cpf = '000AAABBB11'

            signupPage.go()
            signupPage.fillForm(deliver)
            signupPage.submit()
            const expectedMessage = 'Oops! CPF inválido'
            signupPage.alertMessageShouldBe(expectedMessage)

      })

      it('Incorrect Email', function () {

            var deliver = signupFactory.deliver()

            deliver.email = 'user.com.br'

            signupPage.go()
            signupPage.fillForm(deliver)
            signupPage.submit()
            const expectedMessage = 'Oops! Email com formato inválido.'
            signupPage.alertMessageShouldBe(expectedMessage)

      })


      //Esse contexto faz com que ele não quebre na hora de errar um teste
      context('Required fields', function () {

            const messages = [
                  { field: 'name', output: 'É necessário informar o nome' },
                  { field: 'cpf', output: 'É necessário informar o CPF' },
                  { field: 'email', output: 'É necessário informar o email' },
                  { field: 'postalcode', output: 'É necessário informar o CEP' },
                  { field: 'number', output: 'É necessário informar o número do endereço' },
                  { field: 'delivery_method', output: 'Selecione o método de entrega' },
                  { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
            ]

            before(function(){
                  signupPage.go()
                  signupPage.submit()
            })

            messages.forEach(function(msg){
                  it(`{$msg.field} is required`, function(){
                        signupPage.alertMessageShouldBe(msg.output)
                  })
            })
      })

      // it('Required fields', function () {

      //       signupPage.go()
      //       signupPage.submit()

      //       signupPage.alertMessageShouldBe('É necessário informar o nome')
      //       signupPage.alertMessageShouldBe('É necessário informar o CPF')
      //       signupPage.alertMessageShouldBe('É necessário informar o email')
      //       signupPage.alertMessageShouldBe('É necessário informar o CEP')
      //       signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
      //       signupPage.alertMessageShouldBe('Selecione o método de entrega')
      //       signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')

      // })
})