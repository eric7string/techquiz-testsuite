Cypress.Commands.add('startQuiz', () => {
  cy.get('[data-cy="start-quiz"]').click();
});

Cypress.Commands.add('answerQuestion', (answerText: string) => {
  cy.contains(answerText).click();
  cy.contains('Next', { timeout: 5000 }).click();
});

Cypress.Commands.add('completeQuiz', (answers: string[]) => {
  cy.startQuiz();
  answers.forEach((answer) => {
    cy.answerQuestion(answer);
  });
});

Cypress.Commands.add('checkScore', (expectedScore: string) => {
  cy.contains(`Your score is ${expectedScore}`).should('exist');
});
