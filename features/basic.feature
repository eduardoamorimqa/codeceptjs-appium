Feature: Login
  Eu como usuario
  Gostaria de fazer login na aplicação
  Para acessar o sistema

  Scenario: Login successful
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
