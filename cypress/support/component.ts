import { mount } from 'cypress/react';

// Dynamically create the root element if it doesn't already exist
before(() => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('data-cy-root', '');
  document.body.appendChild(rootElement);
});

// Clean the root element before each test
beforeEach(() => {
  const root = document.querySelector('[data-cy-root]');
  if (root) {
    root.innerHTML = '';
  }
});

// Export the mount function
Cypress.Commands.add('mount', (component, options = {}) => {
  return mount(component, { ...options });
});

declare global {
  namespace Cypress {
    interface Chainable {
      mount(component: React.ReactNode, options?: Record<string, any>): Chainable<any>;
    }
  }
}

// Example of importing this file in a test
export { mount };
