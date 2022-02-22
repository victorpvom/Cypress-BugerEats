var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

      deliver: function() {

            var firstName = faker.name.firstName()
            var lastName = faker.name.lastName()

            var data = {
                  name: `${firstName} ${lastName}`,
                  cpf: cpf.generate(),
                  email: faker.internet.email(firstName),
                  whatsapp: '85986070231',
                  address: {
                        postalcode: '60861105',
                        street: 'Rua 1º de Abril',
                        number: '607',
                        details: 'Baixo',
                        district: 'Boa Vista-Castelão',
                        city_state: 'Fortaleza/CE'
                  },
                  delivery_method: 'Moto',
                  cnh: '/images/cnh-digital.jpg'
            }

            return data

      }

}