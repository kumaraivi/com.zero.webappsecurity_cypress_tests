const URL_='http://zero.webappsecurity.com/index.html'
const FEEDBACK="#feedback"


class WASHomePage{
    static visitURL(){
        cy.visit(URL_)
    }
    static clickOnFeedback(){
        cy.get(FEEDBACK).click({force:true})
    }
}
export default WASHomePage