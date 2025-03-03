describe("Realiza cadatro com sucesso", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    context('Verifica navegabilidade tela de cadastro', () => {
        it("Verifica abertura adequada do cadastro de usuário", () => {
            cy.contains('a', 'Cadastre-se')
                .should(`be.visible`)
                .click()
            cy.url().should('eq', 'http://localhost:3000/cadastro')
        })
    })
    context('Realiza cadastro', () => {
        it("Realiza cadastro dos dados básicos e técnicos adequadamente", () => {
            cy.contains('a', 'Cadastre-se').click()
            cy.contains('h2', 'Primeiro, alguns dados básicos:').should('be.visible')
            cy.get('[data-test="inputNome"]').type('Murilo Vinicius')
            cy.get('[data-test="inputCNPJ"]').type('67247499000107')
            cy.get('[data-test="inputEmail"]').type('email.teste@gmail.com')
            cy.get('[data-test="inputSenha"]').type('teste123')
            cy.get('[data-test="inputSenhaVerificada"]').type('teste123')
            cy.contains('button', 'Avançar').click()
            cy.get('[data-test="inputTelefone"]').type('44991398823')
            cy.get('[data-test="inputCEP"]').type('87080590')
            cy.get('[data-test="inputRua"]').type('Uziro Zarur')
            cy.get('[data-test="inputNumero"]').type('423')
            cy.get('[data-test="inputComplemento"]').type('Benner sistemas de saúde')
            cy.get('[data-test="inputEstado"]').type('Paraná')
            cy.contains('button', 'Cadastrar').click()
            cy.location('pathname').should('eq', '/login')
        })
    })

    context('Faz Login com usuário válido', () => {
        it.only("Realiza login com sucesso", () => {
            cy.login('email.teste@gmail.com', 'teste123')
        })
    })
})