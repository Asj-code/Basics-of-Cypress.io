/// <reference types="cypress" />

describe('radio buttons and checkboxes', () => {
    it('radio button', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioBtn => {
            cy.wrap(radioBtn)
                .first()
                .check({force:true})
                .should('be.checked')
            
            cy.wrap(radioBtn)
                .eq(1)
                .check({force:true})

            cy.wrap(radioBtn)
                .first()
                .should('not.be.checked')
        })
    })

    it.only('checkboxes', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').check({force:true})
        cy.get('[type="checkbox"]').eq(0).click({force:true})
        cy.get('[type="checkbox"]').eq(1).check({force:true})
        cy.get('[type="checkbox"]').eq(2).click({force:true})

        
    })
})