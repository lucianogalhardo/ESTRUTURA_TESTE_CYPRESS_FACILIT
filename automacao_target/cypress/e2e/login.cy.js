describe('Login', () => {
    it('realizar login com sucesso', () => {
        // Arrange
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Verifica se o erro é o que você quer ignorar
            if (err.message.includes("themeDisplay.getUser is not a function")) {
                return false; // impede o Cypress de falhar o teste
                }
            });

        cy.visit('https://fapsoftex.plataformatarget.com.br/web/fap/login'); 
        // Act
        cy.get('#_58_login').type('lrgalhardo@hotmail.com')

        cy.get('#_58_password').type('faptarget123')

        cy.get('.tg-form-login > .buttons > .btn').click()

        // Assert

    })
})