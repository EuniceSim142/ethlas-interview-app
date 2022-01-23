describe("Navigate from home to launches", () => {
  it("should navigate to the launches page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "launches" and click it
    cy.get('a[href*="launches"]').click();

    // The new url should include "/category/launches"
    cy.url().should("include", "/category/launches");

    // The new page should contain a title with "Launches page"
    cy.get("title").contains("Launches");
  });
});

describe("Navigate from spacecrafts to crew", () => {
  it("should navigate to the crew page", () => {
    // Start from the Spacecrafts page
    cy.visit("http://localhost:3000/category/spacecrafts");

    // Find a link with an href attribute containing "crew" and click it
    cy.get('a[href*="./crew"]').click();

    // The new url should include "/category/crew"
    cy.url().should("include", "/category/crew");

    // The new page should contain a title with "Crew page"
    cy.get("title").contains("Crew");
  });
});

describe("Navigate from launches to crew", () => {
  it("should navigate to the crew page", () => {
    // Start from the launches page
    cy.visit("http://localhost:3000/category/launches");

    // Find a link with an href attribute containing "crew" and click it
    cy.get('a[href*="./crew"]').click();

    // The new url should include "/category/crew"
    cy.url().should("include", "/category/crew");

    // The new page should contain a title with "Crew page"
    cy.get("title").contains("Crew");
  });
});

describe("Navigate from launches to spacecrafts", () => {
  it("should navigate to the spacecrafts page", () => {
    // Start from the launches page
    cy.visit("http://localhost:3000/category/launches");

    // Find a link with an href attribute containing "spacecrafts" and click it
    cy.get('a[href*="./spacecrafts"]').click();

    // The new url should include "/category/spacecrafts"
    cy.url().should("include", "/category/spacecrafts");

    // The new page should contain a title with "Spacecrafts page"
    cy.get("title").contains("Dragons and Rockets");
  });
});
