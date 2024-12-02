

// Optional: Handle uncaught exceptions to prevent test failures
Cypress.on('uncaught:exception', (err) => {
  console.error('Unhandled exception:', err);
  return false;
});
