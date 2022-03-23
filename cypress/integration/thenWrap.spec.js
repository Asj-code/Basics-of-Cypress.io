/// <reference types="cypress" />

describe('Then and Wrap methods', () => {
    // it('verify label tags', () => {
    //     cy.visit('/')
    //     cy.contains('Forms').click()
    //     cy.contains('Form Layouts').click()

    //     cy.contains('nb-card', 'Using the Grid')
    //     .find('[for="inputEmail1"]')
    //     .should('contain', 'Email')

    //     cy.contains('nb-card', 'Using the Grid')
    //     .find('[for="inputPassword2"]')
    //     .should('contain', 'Password')

    //     //basic form
    //     cy.contains('nb-card', 'Basic form')
    //     .find('[for="exampleInputEmail1"]')
    //     .should('contain', 'Email address')

    //     cy.contains('nb-card', 'Basic form')
    //     .find('[for="exampleInputPassword1"]')
    //     .should('contain', 'Password')
    // })

    it('Cypress is asincorno, use THEN', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const firstLabelEmail = firstForm.find('[for="inputEmail1"]').text()
            const firstLabelPassword = firstForm.find('[for="inputPassword2"]').text()

            expect(firstLabelEmail).to.equal('Email')
            expect(firstLabelPassword).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const secondLabelPassword = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(firstLabelPassword).to.equal(secondLabelPassword)

                cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain', 'Email')
            })
        })

    })
})