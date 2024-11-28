import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the quiz start button', () => {
    mount(<Quiz />);
    cy.contains('Start').should('exist');
  });

  it('starts the quiz when the start button is clicked', () => {
    mount(<Quiz />);
    cy.contains('Start').click();
    cy.contains('Question 1').should('exist');
  });
});
