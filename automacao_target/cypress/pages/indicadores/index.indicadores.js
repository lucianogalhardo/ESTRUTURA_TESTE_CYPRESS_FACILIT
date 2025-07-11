import { elementsIndicadores as el } from "../indicadores/elements.indicadores.js";

class Indicadores {
      
    adicionarIndicadores() {
        cy.get(el.botaoIndicadores).filter((index, el) => {
            return Cypress.$(el).css('mask-image')?.includes('/html/svg-icons/indicadores.svg');
            })
            .first()
            .click({ waitForAnimations: false });
        
        // Verifica se o botão de indicadores está visível antes de clicar
        cy.get(el.subMenuIndicadores, { timeout: 10000 }).should('exist');
        
        
        cy.get(el.subMenuIndicadores).click();

        cy.get(el.botaoAdicionarIndicador).click();

        cy.get(el.botaoCancelarInclusao).click();
        //cy.url({ timeout: 10000 }).should('eq', el.urlIndicador);
    }

    validarPageIndicadores() {
        cy.url().should(
            'eq', el.urlIndicador);

        cy.screenshot('Acesso a Página Novo Indicador');
    
    }
    

}

export default new Indicadores();