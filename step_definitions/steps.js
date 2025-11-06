// Impede erro "inject is not defined" ao gerar testes
// --- Proteção contra erros ao usar `npx codeceptjs gt` --- //
if (typeof inject === 'undefined') {
  global.inject = () => ({ I: {} });
}
if (typeof Given === 'undefined') {
  global.Given = () => {};
  global.When = () => {};
  global.Then = () => {};
}

const { I } = inject();
// Add in your custom step files

Given('I fill email', () => {
  I.waitForElement('~email', 10);      
  I.fillField('~email', 'teste@teste.com');        
});

Given('I fill password', () => {
  I.fillField('#password', '123456');
});

When('I tap on Entrar', () => {
  I.tap('~login-button');
});

Then('I see the Salvar button', () => {
  I.waitForElement('Selecione seu endereço...', 10);
  I.seeElement('Selecione seu endereço...');
});
