// cypress/integration/tests/test.spec.js

describe('My Test Suite', () => {
  it('should pass this test', () => {
    cy.visit('http://localhost:8080'); // Adjust URL as needed
    cy.get('#login-btn').click();
    cy.get('#current-user').should('contain.text', 'Current user: rohan, isAuthenticated: Yes');
  });
});
