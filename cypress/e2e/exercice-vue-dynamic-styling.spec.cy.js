describe('Test sur le Composant (Page) Dynamic Styling', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/corrections/dynamic-styling')
    });
    it('Affiche le titre de la page', () => {
        // cy.visit('http://localhost:5173/corrections/dynamic-styling')
        cy.get('h3').should('contain.text', 'Dynamic Styling (Class)')
    });

    it('Affiche le nom sur les cartes', () => {
            // cy.visit('http://localhost:5173/corrections/dynamic-styling')
        cy.get('.card').eq(0).should('contain.text', 'Carte 1 via style')
        cy.get('.card').eq(1).should('contain.text', 'Carte 2 via style')
        cy.get('.card').eq(2).should('contain.text', 'Carte 3 via class')
        cy.get('.card').eq(3).should('contain.text', 'Carte 4 via class')
    });
    it('Une carte changera de couleur au clic sur le bouton', () => {
        cy.get('.card').eq(0).should('have.css', 'background-color', 'rgb(0, 255, 255)')
        cy.get('.card').eq(0).click()
        cy.get('.card').eq(0).should('have.css', 'background-color', 'rgb(255, 0, 0)')
        cy.get('.card').eq(0).click()
        cy.get('.card').eq(0).should('have.css', 'background-color', 'rgb(0, 255, 255)')
        cy.get('.card').eq(1).should('have.css', 'background-color', 'rgb(238, 130, 238)')
        cy.get('.card').eq(1).click()
        cy.get('.card').eq(1).should('have.css', 'background-color', 'rgb(0, 128, 0)')
        cy.get('.card').eq(1).click()
        cy.get('.card').eq(1).should('have.css', 'background-color', 'rgb(238, 130, 238)')
    });
    it('Une carte changera de classe au clic sur le bouton', () => {
        cy.get('.card').eq(2).should('not.have.class', 'class1')
        cy.get('.card').eq(2).click()
        cy.get('.card').eq(2).should('have.class', 'class1')
        cy.get('.card').eq(2).click()
        cy.get('.card').eq(2).should('not.have.class', 'class1')
        cy.get('.card').eq(3).should('not.have.class', 'class2')
        cy.get('.card').eq(3).click()
        cy.get('.card').eq(3).should('have.class', 'class2')
        cy.get('.card').eq(3).click()
        cy.get('.card').eq(3).should('not.have.class', 'class2')
    });
})