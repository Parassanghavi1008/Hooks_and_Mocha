describe('Login Page Tests', () => {
    
    // Runs once before all tests
    before(() => {
        cy.visit('https://internet.herokuapp.com/login'); 
    });

    beforeEach(() => {
        cy.reload(); 
    });

    it('should display the login button', () => {
        cy.get('button[type="submit"]').should('be.visible'); 
    });

    it('should have an email field with placeholder text "Enter email"', () => {
        cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Enter email'); 
    });

    afterEach(() => {
        cy.log('Test case completed');
    });

    
    after(() => {
        cy.log('All tests completed for login page');
    });
});
