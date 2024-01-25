describe("Login", () => {
  it("logs in with valid credentials", () => {
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
  });

  it("logs in with invalid credentials", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('form[id="registerForm"').within(() => {
      cy.get('[data-auth="login"]').click();
    });
    cy.wait(1000);
    cy.get('form[id="loginForm"').within(() => {
      cy.get('input[id="loginEmail"]').type(Cypress.env("email"));
      cy.wait(100);
      cy.get('input[id="loginPassword"]').type("wrongpassword");
      cy.wait(100);

      cy.get('button[type="submit"]').click();
    });
    cy.on("window:alert", (t) => {
      expect(t).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
