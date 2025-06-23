import CommonPage from '../Pages/commonPage';

const commonPage = new CommonPage();

describe.skip("when not logged in", () => {
  it("clicking on like should alert the user they need to login", () => {
    commonPage.accessLoginPage()
    cy.get(commonPage.selectorsList().likeButton).eq(2).click();
    cy.contains('You must log in to like.');
  });

  it("clicking on hire should alert the user they need to login", () => {
    commonPage.accessLoginPage()
    cy.get(commonPage.selectorsList().hireButton).eq(2).click()
    cy.contains('You must log in to hire this hero.');
  });
});

describe.skip("when normal user is logged in", () => {
  it("clicking like on a hero should increase their fan count", () => {
    const user = 'admin@test.com';
    const password = 'test123';

    commonPage.accessLoginPage();
    cy.get(commonPage.selectorsList().buttonPage).eq(0).click();
    cy.get(commonPage.selectorsList().emailField).type(user);
    cy.get(commonPage.selectorsList().passwordField).type(password);
    cy.get(commonPage.selectorsList().signInButton).click();

    cy.get(commonPage.selectorsList().fansCounterButton).eq(0).then(($span) => {
      const initialFans = parseInt($span.text());

      cy.get(commonPage.selectorsList().likeButton).eq(0).click();

      cy.get(commonPage.selectorsList().fansCounterButton).eq(0).should(($newSpan) => {
        const newFans = parseInt($newSpan.text());
        expect(newFans).to.eq(initialFans + 1);
      });
    });
  });

  it("user should be able to hire a hero", () => {
    const user = 'admin@test.com';
    const password = 'test123';

    commonPage.accessLoginPage();
    cy.get(commonPage.selectorsList().buttonPage).eq(0).click();
    cy.get(commonPage.selectorsList().emailField).type(user);
    cy.get(commonPage.selectorsList().passwordField).type(password);
    cy.get(commonPage.selectorsList().signInButton).click();

    cy.get(commonPage.selectorsList().hireButton).eq(0).click();
    cy.get(commonPage.selectorsList().signInButton).eq(1).click();

    cy.get(commonPage.selectorsList().fansCounterButton).eq(0).then(($span) => {
      const initialFans = parseInt($span.text());

      cy.get(commonPage.selectorsList().likeButton).eq(0).click();

      cy.get(commonPage.selectorsList().fansCounterButton).eq(0).should(($newSpan) => {
        const newFans = parseInt($newSpan.text());
        expect(newFans).to.eq(initialFans + 1);
      });
    });
  });

  it("Login with invalid credentials", () => {
    const user = 'test_123@test.com';
    const password = 'test123_test';

    commonPage.accessLoginPage();
    cy.get(commonPage.selectorsList().buttonPage).eq(0).click();
    cy.get(commonPage.selectorsList().emailField).type(user);
    cy.get(commonPage.selectorsList().passwordField).type(password);
    cy.get(commonPage.selectorsList().signInButton).click();
    cy.get(commonPage.selectorsList().alertMessage);
  });
});
