import Login from "../pages/login/index.login.js";
import Indicadores from "../pages/indicadores/index.indicadores.js";



describe('Indicadores', () => {

    beforeEach(() => {

        // Arrange

        Cypress.on('uncaught:exception', (err, runnable) => {
          
            // Ignora erro conhecido do Highcharts
            if (err.message.includes('Highcharts error #16')) {
                return false; // Evita que o Cypress falhe o teste
            }

            // Outros erros (você pode manter os anteriores também)
            if (err.message.includes("themeDisplay.getUser is not a function")) {
                return false;
            }

            });

        Login.visitarPagina();
        Login.preencherCredenciaisValidas();
        
    })


    it('Voltar a página de indicadores ao clicar em cancelar na página de inclusão', () => {
        
        // Act
        Indicadores.adicionarIndicadores();
        

        // Assert
        Indicadores.validarPageIndicadores();

    })


})