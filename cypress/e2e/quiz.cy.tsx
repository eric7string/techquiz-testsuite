describe('Tech Quiz E2E Test', () => {
  beforeEach(() => {
    // Intercept the API call to mock questions
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    
    // Visit the app's main page
    cy.visit('/');
  });

  it('completes the quiz and restarts successfully', () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').should('be.visible').click();

    // Wait for the questions to load
    cy.wait('@getQuestions');

    // Answer all questions
    for (let i = 0; i < 10; i++) {
      cy.get('h2').should('not.be.empty'); // Validate the question is displayed
      cy.get('button').eq(0).click(); // Select the first answer
    }

    // Validate final score is displayed
    cy.contains('Your score').should('be.visible');

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // Confirm the quiz has restarted
    cy.get('h2').should('be.visible');
  });

  it('validates questions and answers during the quiz', () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();
  
    // Wait for the API response and log it
    cy.wait('@getQuestions').then((interception) => {
      if (interception.response) {
      // Log the intercepted response to the Cypress console
      console.log('Intercepted API Response:', interception.response.body);
  
      // Optional: Assert the mock data is as expected
      expect(interception.response.body).to.have.length(10); // Validate 10 questions
      expect(interception.response.body[0]).to.have.property('question', 'What does HTML stand for?');
      } else {
        throw new Error('No response provided');
      }
    });
  
    // Validate the first question and answers
    cy.get('h2').should('contain.text', 'What does HTML stand for?');
    cy.get('div.alert.alert-secondary.mb-0.ms-2.flex-grow-1').eq(0).should('contain.text', 'HyperText Markup Language');
    cy.get('div.alert.alert-secondary.mb-0.ms-2.flex-grow-1').eq(1).should('contain.text', 'Home Tool Markup Language');
  
    // Answer the first question
    cy.get('button').eq(0).click();
  
    // Validate the next question
    cy.get('h2').should('not.contain.text', 'What does HTML stand for?');
  });
  
  it('does not allow skipping questions', () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    // Wait for the questions to load
    cy.wait('@getQuestions');

    // Validate the "Next" button is not visible without answering
    cy.get('button').contains('Next').should('not.exist');

    // Answer the question
    cy.get('button').eq(0).click();

    // Confirm the next question is displayed automatically
    cy.get('h2').should('not.be.empty');
  });
});
