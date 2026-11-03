describe("Test sur le vomposant (Page) Login", () => {
    beforeEach(() => {
        cy.visit("https://library.mithridatem.fr/register")
    });
    it("Affiche le labels des inputs", () => {
        cy.get("label").should("contain.text", "Prenom");
        cy.get("label").should("contain.text", "Nom");
        cy.get("label").should("contain.text", "Email");
        cy.get("label").should("contain.text", "Mot de passe");
        cy.get("label").should("contain.text", "Confirmation");
    });
    it("Affiche le bouton d'inscription", () => {
        cy.get("button").should("have.attr", "type", "submit");
    });
});