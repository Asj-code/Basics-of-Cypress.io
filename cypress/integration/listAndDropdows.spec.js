/// <reference types="cypress" />

describe('list and dropdowns', () => {
    it('dropdowns', () => {
        cy.visit('/')

        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
    })

})