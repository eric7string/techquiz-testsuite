/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to start the quiz
     */
    startQuiz(): Chainable<void>;

    /**
     * Custom command to answer a question
     * @param answerText - The text of the answer to select
     */
    answerQuestion(answerText: string): Chainable<void>;

    /**
     * Custom command to complete the quiz
     * @param answers - An array of answers to select
     */
    completeQuiz(answers: string[]): Chainable<void>;

    /**
     * Custom command to check the quiz score
     * @param expectedScore - The expected score to verify
     */
    checkScore(expectedScore: string): Chainable<void>;
  }
}
