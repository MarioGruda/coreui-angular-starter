describe('Startpage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('be.eq', 'CoreUI Angular Starter');
  });
});
