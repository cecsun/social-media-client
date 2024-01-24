describe("Logout", () => {
  it("logs out when the logout button is clicked", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('form[id="registerForm"').within(() => {
      cy.get('[data-auth="login"]').click();
    });

    cy.wait(1000);
    cy.get('form[id="loginForm"').within(() => {
      cy.get('input[id="loginEmail"]').type(Cypress.env("email"));
      cy.wait(100);
      cy.get('input[id="loginPassword"]').type(Cypress.env("password"));
      cy.wait(100);

      cy.get('button[type="submit"]').click();
    });
    cy.url().should(
      "include",
      "/?view=profile&name=" + Cypress.env("username"),
    );

    cy.get('button[data-visible="loggedOut"]');

    cy.get('button[data-auth="logout"]').click();
    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
