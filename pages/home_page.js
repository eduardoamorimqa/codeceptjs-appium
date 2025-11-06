const { I } = inject();

module.exports = {

  button: {
    select: 'Selecione seu endereço...',  
  }, 

  checkLoginSuccess() {
    I.waitForElement(this.button.select, 10);   
    I.seeElement(this.button.select); 
  }
}
