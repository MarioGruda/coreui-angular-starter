describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  describe('Initial State', () => {
    it('username and passwort inputs should be empty', () => {
      cy.get('[data-cy=username-input]').should('be.empty');
      cy.get('[data-cy=password-input]').should('be.empty');
    });

    it('login button should be deactivated with empty inputs', () => {
      cy.get('[data-cy=login-button]').should('be.disabled');
    });

    it('remember checkbox should be checked', () => {
      cy.get('[data-cy=remember-checkbox]').should('be.checked');
    });
  });

  describe('Actions', () => {
    it('login button should be activated with filled inputs', () => {
      cy.get('[data-cy=username-input]').type('username');
      cy.get('[data-cy=password-input]').type('password');

      cy.get('[data-cy=login-button]').should('not.be.disabled');
    });

    it('successful login should redirect to dashboard', () => {
      cy.get('[data-cy=username-input]').type('username');
      cy.get('[data-cy=password-input]').type('password');
      cy.get('[data-cy=login-button]').click();

      cy.url().should('include', '/dashboard');
    });
  });
});
