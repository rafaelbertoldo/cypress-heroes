import CommonPage from '../Pages/commonPage';

var Chance = require('chance');

var chance = new Chance();
const commonPage = new CommonPage();

describe("Test admin permissions", () => {
  it.skip("'Create new hero' button should be available ", () => {
    const user = 'admin@test.com'
    const password = 'test123'
    commonPage.accessLoginPage()
    cy.get('button').eq(0).click()
    cy.get("[name='email']").type(user)
    cy.get("[name='password']").type(password)
    cy.get(".text-white").click()
    cy.get("[href='/heroes/new']")
  })

  it.skip("Admin should be able to create a new hero", () => {
    const user = 'admin@test.com'
    const password = 'test123'
    const newHero = chance.word({ syllables: 3 })
    const price = chance.natural({ min: 10, max: 200 })
    const fans = chance.natural({ min: 10, max: 30 })
    const saves = chance.natural({ min: 1, max: 110 })
    const randomPower = chance.natural({ min: 0, max: 8 })
    adminPage.accessLoginPage()
    cy.get('button').eq(0).click()
    cy.get("[name='email']").type(user)
    cy.get("[name='password']").type(password)
    cy.get(".text-white").click()
    cy.get("[href='/heroes/new']").click();
    cy.get("[data-cy='nameInput']").type(newHero)
    cy.get("[data-cy='priceInput']").type(price)
    cy.get("[data-cy='fansInput']").type(fans)
    cy.get("[data-cy='savesInput']").type(saves)
    cy.get("select").select(randomPower)
    cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
    cy.get("button").eq(2).click()
  })
})