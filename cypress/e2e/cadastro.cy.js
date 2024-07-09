/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach (() => {
    cy.visit('/')

  });
  it('Cadastro de campos obrigatórios', () => {
   var email = `teste${Date.now()}@teste.com`
    cy.cadastrarUsuario ('Fabio' , 'Araujo', email, '998877665' , 'Teste@123') 
    cy.get('#signup-response').should ('contain' , '')
    
})
  it.only('Nome de usuário invalido', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.cadastrarUsuario ('Fabio2' , 'Araujo', email, '998877665' , 'Teste@123') 
    cy.get('#signup-response').should ('contain' , '')
   })
})

