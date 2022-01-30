const FAQ="#faq-link"
const NAME="#name"
const EMAIL="#email"
const SUB="#subject"
const COMMENT="#comment"
const SEND_BTN=".btn-primary"

class WASFeedbackPage{
    static validateFeedbackPage(){
        cy.get(FAQ).should('contain','Frequently Asked Questions')
    }
    static enterName(){
        cy.get(NAME).type('Avinash Kumar')
    }
    static enterEmail(){
        cy.get(EMAIL).type('abc@gmail.com')
    }
    static enterSubject(){
        cy.get(SUB).type('Need Help')
    }
    static enterComment(){
        cy.get(COMMENT).type('Hello XYZ, I want to talk with you.')
    }
    static clickSendMessage(){
        cy.get(SEND_BTN).click()
    }
}
export default WASFeedbackPage