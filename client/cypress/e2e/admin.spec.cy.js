import CommonPage from '../Pages/commonPage';

var Chance = require('chance');

var chance = new Chance();
const commonPage = new CommonPage();

describe("Test admin permissions", () => {
  it("'Create new hero' button should be available ", () => {
    const user = 'admin@test.com'
    const password = 'test123'
    commonPage.accessLoginPage()
    cy.get(commonPage.selectorsList().buttonPage).eq(0).click()
    cy.get(commonPage.selectorsList().emailField).type(user)
    cy.get(commonPage.selectorsList().passwordField).type(password)
    cy.get(commonPage.selectorsList().signInButton).click()
    cy.get(commonPage.selectorsList().createHeroButton)
  })

  it("Admin should be able to create a new hero", () => {
    const user = 'admin@test.com'
    const password = 'test123'
    const newHero = chance.word({ syllables: 3 })
    const price = chance.natural({ min: 10, max: 200 })
    const fans = chance.natural({ min: 10, max: 30 })
    const saves = chance.natural({ min: 1, max: 110 })
    const randomPower = chance.natural({ min: 0, max: 8 })
    commonPage.accessLoginPage()
    cy.get(commonPage.selectorsList().buttonPage).eq(0).click()
    cy.get(commonPage.selectorsList().emailField).type(user)
    cy.get(commonPage.selectorsList().passwordField).type(password)
    cy.get(commonPage.selectorsList().signInButton).click()
    cy.get(commonPage.selectorsList().createHeroButton).click();
    cy.get(commonPage.selectorsList().nameField).type(newHero)
    cy.get(commonPage.selectorsList().priceField).type(price)
    cy.get(commonPage.selectorsList().fansField).type(fans)
    cy.get(commonPage.selectorsList().savesField).type(saves)
    cy.get(commonPage.selectorsList().selectField).select(randomPower)
    cy.get(commonPage.selectorsList().uploadField).attachFile('avatar.jpg')
    cy.get(commonPage.selectorsList().buttonPage).eq(2).click()
  })
})