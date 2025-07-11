import Login from '../pages/login/index.login.js';
import HomePage from '../pages/homePage/index.homepage.js';

describe('Login', () => {
    it('realizar login com sucesso', () => {
        
        // Arrange
        
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Verifica se o erro é o que você quer ignorar
            if (err.message.includes("themeDisplay.getUser is not a function")) {
                return false; // impede o Cypress de falhar o teste
                }
            });

        Login.visitarPagina();

        // Act
        
        Login.preencherCredenciaisValidas();

        // Assert

        HomePage.validarAcessoHomepage();

    })

    it ('realizar login com usuário não cadastrado', () => {

        // Arrange
        
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Verifica se o erro é o que você quer ignorar
            if (err.message.includes("themeDisplay.getUser is not a function")) {
                return false; // impede o Cypress de falhar o teste
                }
            });

        Login.visitarPagina();

        // Act
        
        Login.preencherUsuarioNaoCadastrado();

        // Assert

        Login.validarErroCredenciaisInvalidas();

    })
})