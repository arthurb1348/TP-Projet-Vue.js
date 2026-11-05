describe("test sur l'accessibilité et la conformité RGAA", () => {
    before("Visite la page des exercices sur les props et l'API", () => {
        cy.visit("http://localhost:5173/exercices/props-api");
    });
    it("Vérifie que chaque image a un attribut alt approprié", () => {
        cy.get("img").each(($img) => {
            cy.wrap($img).should("have.attr", "alt",).and("not.be.empty");
        });
    });
});