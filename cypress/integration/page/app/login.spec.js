/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('preencha os campos e va para pagina /app/profile', () => {
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="usuario"]').type('r1tt3r');
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
  });
});
