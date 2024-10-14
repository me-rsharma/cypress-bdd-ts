@contact-us @regression
Feature: Contact us - webdriveruniversity.com

    Background: Navigate to webdriveruniveristy.com and click contact us link
        Given I visit webdriveruniversity homepage
        And I click on contactus link

    @positive
    Scenario: To verify the successful submission of contact us page
        When I enter the first name
        And I enter the last name
        And I enter the email address
        And I add the comments
        And I click on submit button
        Then I should see the success message

    @negative
    Scenario: To verify the unsuccessful submission of contact us page
        When I enter the first name
        And I enter the last name
        And I add the comments
        And I click on submit button
        Then I should see the failure message

    @positive
    Scenario: To verify the successful submission of feedback using cucumber expressions
        When I enter the first name "gauranga"
        And I enter the last name "das"
        And I enter the email address "gauranga.das@mail.com"
        And I add the comments "Hare Krishna Prabhuji, Hope you are going great by mercy of Lord Krishna."
        And I click on submit button
        Then I should see the success message "Thank You for your Message!"

    @data-driven
    Scenario Outline: To verify the valid and invalid submission of feedback using data driven testing
        When I enter the first name "<firstname>"
        And I enter the last name "<lastname>"
        And I enter the email address "<email>"
        And I add the comments "<comment>"
        And I click on submit button
        Then I should see the submission message "<message>"
        Examples:
            | firstname | lastname | email               | comment                                           | message                      |
            | gauranga  | das      | gauranga.das@ec.org | Hare Krishna Prabhuji                             | Thank You for your Message!  |
            | gauranga  | das      | \"\"                | Hope you are going great by mercy of Lord Krishna | Error: Invalid email address |
