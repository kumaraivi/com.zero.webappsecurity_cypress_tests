Feature: Web App Security Feedback page feature

Scenario: Validate web app secrity feedback page
Given I have given web app scurity home page
When I click on Feedback menu
Then I should see Feedback page
When I enter name subject email and questions
And I click on Send Message button
Then I should see successful message