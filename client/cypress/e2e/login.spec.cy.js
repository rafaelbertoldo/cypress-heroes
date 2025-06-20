describe("Login tests", () => {
  it.skip("Login with admin valid credentials", () => {
    const user = 'admin@test.com'
    const password = 'test123'
    cy.visit('http://localhost:3000/heroes')
    cy.get('button').eq(0).click()
    cy.get("[name='email']").type(user)
    cy.get("[name='password']").type(password)
    cy.get(".text-white").click()
  })

  it.skip("Login with invalid credentials", () => {
    const user = 'test_123@test.com'
    const password = 'test123_test'
    cy.visit('http://localhost:3000/heroes')
    cy.get('button').eq(0).click()
    cy.get("[name='email']").type(user)
    cy.get("[name='password']").type(password)
    cy.get(".text-white").click()
    cy.get(".text-red-500")
  })
})