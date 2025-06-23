class CommonPage {
  selectorsList() {
    const selectors = {
      loginUrl: 'http://localhost:3000/',
      buttonPage: 'button',
      emailField: "[name='email']",
      passwordField: "[name='password']",
      signInButton: ".text-white",
      newHeroButton: "[href='/heroes/new']",
      nameField: "[data-cy='nameInput']",
      priceField: "[data-cy='priceInput']",
      fansField: "[data-cy='fansInput']",
      savesField: "[data-cy='savesInput']",
      likeButton: "[data-cy='like']",
      hireButton: "[data-cy='money']",
      fansCounterButton: "[data-cy='fans']",
      alertMessage: ".text-red-500",
    }
    return selectors;
  }

  accessLoginPage() {
    cy.visit('http://localhost:3000/')
  }
}

export default CommonPage;