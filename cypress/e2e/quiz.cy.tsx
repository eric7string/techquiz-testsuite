describe('Quiz App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('allows the user to complete a quiz and view the score', () => {
    cy.contains('Start').click();
    for (let i = 0; i < 10; i++) {
      cy.contains('Next').click();
    }
    cy.contains('Your score is').should('exist');
  });

  it('lets the user restart the quiz', () => {
    cy.contains('Start').click();
    for (let i = 0; i < 10; i++) {
      cy.contains('Next').click();
    }
    cy.contains('Start a New Quiz').click();
    cy.contains('Start').should('exist');
  });
});
