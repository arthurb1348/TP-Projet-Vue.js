describe("Test sur le vomposant (Page) Login", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/login")
    });
    it("Vérifie que le composant Login est visible", () => {
        cy.get(".login-container").should("be.visible");
    });
    it("Vérifie que le titre de la page est correct", () => {
        cy.get("h1").should("contain.text", "Se Connecter");
    });
    it("Vérifie que le formulaire de connexion est présent", () => {
        cy.get("form").should("be.visible");
    });
    it("Vérifie que les champs de saisie sont présents", () => {
        cy.get('input[type="email"]').should("be.visible");
        cy.get('input[type="password"]').should("be.visible");
    });
    it("Vérifie que le bouton de connexion est présent", () => {
        cy.get('button[type="submit"]').should("be.visible");
    });
    it("Vérifie que le lien d'inscription est présent", () => {
        cy.get('a[href="/register"]').should("be.visible");
    });
    it("vérifie que le lien d'inscription redirige vers la page d'inscription", () => {
        cy.contains('a', 'Inscrivez-vous').click();
        cy.url().should("include", "/register");
    });
    it("Vérifie que le champ email est requis", () => {
        cy.get('input[type="email"]').should("have.attr", "required");
    });
    it("Vérifie que le champ mot de passe est requis", () => {
        cy.get('input[type="password"]').should("have.attr", "required");
    });
    
    it("Vérifie que le formulaire de connexion est soumis avec succès", () => {
        // On passe un tableau contenant les deux clés privées à cy.env()
        cy.env(['TEST_USER_EMAIL', 'TEST_USER_PASSWORD']).then((secrets) => {
            // Saisie de l'email
            cy.get('input[type="email"]').type(secrets.TEST_USER_EMAIL)
            // Saisie du mot de passe (sans l'afficher dans les logs)
            cy.get('input[type="password"]').type(secrets.TEST_USER_PASSWORD, { log: false })
        })
        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/admin");
    });
});