describe('Login', () => {
    it('realizar login com sucesso', () => {
        // Arrange
        cy.visit('https://fapsoftex.plataformatarget.com.br/web/fap/login'); 
        // Act
        cy.get('_58_login').type('lrgalhardo@hotmail.com')

        cy.get('_58_password').type('faptarget123')

        cy.get('.tg-form-login > .buttons > .btn').click()

        // Assert

    })
})