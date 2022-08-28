const locator = require ('../locator/HomepageLocator');

class Hpage {
    async visit(baseUrl){
        cy.visit('https://www.fairprice.com.sg/');
        return cy.url().should('eq', 'https://www.fairprice.com.sg/');
    }

    //click promotions tab
    async tab_promotions(tab){
        return cy.get(locator.datatestid.tab_promotions).click().should('have.text', 'Promotions');
    }

    //verify PWP tab
    async pwp_tab(pwptab){
        return cy.get(locator.datatestid.pwp_tab).should('be.visible');
    }

    //verify Weekly tab
    async weekly_tab(week_tab){
        return cy.get(locator.datatestid.weekly_tab).should('be.visible');
    }

    //verify Digital Club Exclusiv tab
    async digital_tab(digi_tab){
        return cy.get(locator.datatestid.digital_tab).should('be.visible');
    }

    //click all tab
    async click_all(all){
        return cy.get(locator.datatestid.tag_all).click().should('have.text', 'All');
    }

    //click PWP tab
    async click_pwp(pwp){
        cy.wait(2000)
        return cy.get(locator.datatestid.pwp_tab).click().should('have.text', 'PWP');
    }

    //verify label PWP produk in PWP tab
    async pwp_label(pwp_lab){
        return cy.get(locator.datatestid.pwp_label).should('have.attr', 'PWP');
    }
}

module.exports = Hpage;