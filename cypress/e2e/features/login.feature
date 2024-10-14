@login @regression
Feature: Login Page - Webdriveruniversity.com

    @data-driven
    Scenario Outline: To verify login functionality using valid and invalid credentials
        Given I visit webdriveruniversity homepage
        And I click on login link
        When I enter a username <username>
        And I enter a password <password>
        And I waited for 5 seconds
        And I click on login button
        Then I should see the login alert notification "<message>"
        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver12  | validation failed    |