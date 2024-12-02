// Import custom commands
import './commands';

// Optional: Handle uncaught exceptions to prevent test failures
Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Unhandled exception:', err);
  return false;
});
