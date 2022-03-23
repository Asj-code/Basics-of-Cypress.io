/// <reference types="cypress" />

describe('Invoke command', () => {
    it('Invoke', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    
        //n1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //n2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
        })

        //n3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        //n4 invoke in function status (checkbox checked)
        //invoke the attribute class and check the status is checked
        cy.contains('nb-card', 'Basic form')
        .find('nb-checkbox')
        .click()
        .find('.custom-checkbox')
        .invoke('attr', 'class')
        .should('contain', 'checked')
    })

    it.only('invoke date picker date', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker')
        .find('input')
        .then( input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Mar 17, 2022')
        })
    })
})