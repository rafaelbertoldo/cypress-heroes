describe.skip("when not logged in", () => {
  it("clicking on like should alert the user they need to login", () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("[data-cy='like']").eq(2).click()
    cy.contains('You must log in to like.');
  });

  it("clicking on hire should alert the user they need to login", () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("[data-cy='money']").eq(2).click()
    cy.contains('You must log in to hire this hero.');
  });
});

describe("when normal user is logged in", () => {
  it.skip("clicking like on a hero should increase their fan count", () => {
    const user = 'admin@test.com';
    const password = 'test123';

    cy.visit('http://localhost:3000/heroes');
    cy.get('button').eq(0).click();
    cy.get("[name='email']").type(user);
    cy.get("[name='password']").type(password);
    cy.get(".text-white").click();

    cy.get("[data-cy='fans']").eq(0).then(($span) => {
      const initialFans = parseInt($span.text());

      cy.get("[data-cy='like']").eq(0).click();

      cy.get("[data-cy='fans']").eq(0).should(($newSpan) => {
        const newFans = parseInt($newSpan.text());
        expect(newFans).to.eq(initialFans + 1);
      });
    });
  });

  it("user should be able to hire a hero", () => {
    const user = 'admin@test.com';
    const password = 'test123';

    cy.visit('http://localhost:3000/heroes');
    cy.get('button').eq(0).click();
    cy.get("[name='email']").type(user);
    cy.get("[name='password']").type(password);
    cy.get(".text-white").click();

    cy.get("[data-cy='money']").eq(0).click();
    cy.get(".text-white").eq(1).click();

    cy.get("[data-cy='fans']").eq(0).then(($span) => {
      const initialFans = parseInt($span.text());

      cy.get("[data-cy='like']").eq(0).click();

      cy.get("[data-cy='fans']").eq(0).should(($newSpan) => {
        const newFans = parseInt($newSpan.text());
        expect(newFans).to.eq(initialFans + 1);
      });
    });
  });

  it.skip("Login with invalid credentials", () => {
    const user = 'test_123@test.com';
    const password = 'test123_test';

    cy.visit('http://localhost:3000/heroes');
    cy.get('button').eq(0).click();
    cy.get("[name='email']").type(user);
    cy.get("[name='password']").type(password);
    cy.get(".text-white").click();
    cy.get(".text-red-500");
  });
});
