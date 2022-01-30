///<reference types='cypress'/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import WASHomePage from '../../WebAppSecurityPOM/WAS_HomePage'
import WASFeedbackPage from '../../WebAppSecurityPOM/WAS_FeebackPage'

Given('I have given web app scurity home page', () => {
    WASHomePage.visitURL()
})
When('I click on Feedback menu', () => {
    WASHomePage.clickOnFeedback()
})
Then('I should see Feedback page', () => {
    WASFeedbackPage.validateFeedbackPage()
})
When('I enter name subject email and questions', () => {
    WASFeedbackPage.enterName()
    WASFeedbackPage.enterEmail()
    //WASFeedbackPage.enterSubject()
    //WASFeedbackPage.enterComment()
})
And('I click on Send Message button', () => {
    WASFeedbackPage.clickSendMessage()
})
Then('I should see successful message', () => {
cy.contains('Thank you for your comments').should('contain','Thank you')
})