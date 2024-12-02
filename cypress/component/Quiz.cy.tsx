
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    // Intercept the API call with mock data
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    mount(<Quiz />);
  });

  it('renders the Start Quiz button', () => {
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz when Start Quiz is clicked', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('h2').should('be.visible');
  });

  it('navigates to the next question after answering', () => {
    cy.get('button').click()
    cy.wait('@getQuestions');
    cy.get('button').eq(0).click() // Simulates answering a question
    cy.get('h2').should('not.be.empty'); // Validates question progression
  });

  it('shows the final score after completing the quiz', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    for (let i = 0; i < 10; i++) { // Answer all 10 questions
      cy.get('button').first().click();
    }
    cy.contains('Your score').should('be.visible');
  });

  it('restarts the quiz when Restart button is clicked', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    for (let i = 0; i < 10; i++) {
      cy.get('button').first().click();
    }
    cy.contains('Take New Quiz').click();
    cy.get('h2').should('be.visible');
  });
});