/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type ('Fabio')
    cy.get('#signup-lastname').type ('Henrique')
    cy.get('#signup-email').type ('teste17@teste.com')
    cy.get('#signup-phone').type ('00998765557')
    cy.get('#signup-password').type ('Teste@123')
    cy.get('#signup-button').click ()
    cy.get('#signup-response').should ('contain' , 'Cadastro realizado com sucesso')
  })
})