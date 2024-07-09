/// <reference types="cypress"/>

describe('US-00: Funcionalidade: Busca por um filme', () => {

    beforeEach (() => {
        cy.visit('/')
    });

    afterEach (() => {
        cy.screenshot ()
    });

    it ('Buscar filmes', () => {
        
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')

    });

    it('Deve buscar filmes em uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            
            cy.get('#search-input').type(filmes[2].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[2].titulo)

        })

    });
    it.only ('Deve buscar todos os filmes em uma lista', () => {
        cy.fixture('filmes').each((filmes) => {
            
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)

        })

    });

})