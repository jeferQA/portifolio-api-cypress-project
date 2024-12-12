describe('Testes automatizados API - Tarefas 1 e 2', () => {
    it('Validar a inserção de registro', () => {
        cy.insertRegister('jeferson', '4299961981', 'Rua Teste')
    })

    it('Validar a edição de nome do registro', () => {
        cy.alterRegisterName('1','Marcos da Silva')
    })

    it('Validar a edição de telefone do registro', () => {
        cy.alterRegisterPhone('1','4299887766')
    })

    it('Validar a edição de endereço do registro', () => {
        cy.alterRegisterPhone('1','Rua do Teste, 123')
    })

    it('Validar a exclusão do último registro', () => {
        cy.deleteLastRegister()
    })

    it('Validar a exclusão de um registro', () => {
        cy.deleteRegister(100)
    })
})