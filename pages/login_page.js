const { I } = inject();

module.exports = {
  fields: {
    email: '~email',
    password: '#password'
  },
  buttons: {
    enter: '~login-button'
  },
  messages: {
    loginError: 'Erro ao realizar login'
  },
  doLogin(email, password) {
    I.waitForElement(this.fields.email, 10);
    I.fillField(this.fields.email, email);    
    I.fillField(this.fields.password, password);    
    I.tap(this.buttons.enter);
  },
  checkLoginError() {
    I.waitForElement(this.messages.loginError, 5);   
    I.seeElement(this.messages.loginError); 
  }
}
