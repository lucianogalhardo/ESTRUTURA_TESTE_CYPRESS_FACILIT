

class HomePage {
    validarAcessoHomepage() {
        cy.url().should(
            'eq', 'https://fapsoftex.plataformatarget.com.br/web/fap/2025/home#/');

        cy.screenshot('acesso a homePage');
    }
}

export default new HomePage();