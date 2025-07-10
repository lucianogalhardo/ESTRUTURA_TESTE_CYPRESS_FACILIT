import { elements as el } from './elements.login.js';

class Login{
    visitarPagina() {
        cy.visit('https://fapsoftex.plataformatarget.com.br/web/fap/login');
    }

    preencherCredenciaisValidas() {
        cy.get(el.username).type('lrgalhardo@hotmail.com')

        cy.get(el.password).type('faptarget123')

        cy.get(el.loginButton).click()

    }

    preencherUsuarioNaoCadastrado() {
        cy.get(el.username).type('usuarioInvalido')

        cy.get(el.password).type('senhaInvalida')

        cy.get(el.loginButton).click()

        cy.get(el.ErrorLogin, { timeout: 10000 }).should('exist');
    }

    validarErroCredenciaisInvalidas() {
        cy.get(el.ErrorLogin).should('exist')
            .and('contain', 'A autenticação falhou, usuário não cadastrado no sistema.');
    }
}

export default new Login();