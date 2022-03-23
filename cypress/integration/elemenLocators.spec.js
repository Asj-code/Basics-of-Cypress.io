/// <reference types="cypress" />


describe('Our first site', () => {
    // beforeEach('hook for every test', () => {
    //     //repetitive  code
    // })

    it('description of first test', () => {

        cy.visit('/')
        // cy.get('a.ng-tns-c7-4 > .menu-icon > .eva > [data-name="Layer 2"] > g > rect').click()
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        
        //by tag name
        cy.get('input')
        //by id
        cy.get('#inputEmail1')
        //by className
        cy.get('.input-full-width')
        //by attribute name
        cy.get('[placeholder]') 
        //by attribute name and value
        cy.get('[placeholder="Email"]')
        //by Class value
        // cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // //by tag name and attribute with value
        // cy.get('[input[placeholder="Email"]]')
        // //by 2 different attributes
        // cy.get('[placeholder="Email"][fullwidth]')
        // //by tag name attribute with value id and classname
        // cy.get('[input][placeholder="Email"]#inputEmail1.input-full-width')

        /*the most recommended ways by cypress is c
        reate your own in the code of the application, 
        so developers can not change it*/
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second TC', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // cy.get('[data-cy="singInButton"]')
        // cy.contains('Sign in')
        // cy.contains('[status="warning"]', 'Sign in')
        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
        //           find this, contains this
    })

    // afterEach('hook every test at the end', () => {

    // })
})