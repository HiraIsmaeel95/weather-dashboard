Feature: Weather app search functionality

  Scenario: Search for a city and view weather results
    Given I visit the weather app
    When I search for "London"
    Then I should see weather results for "London"
