/// <reference types="Cypress" />

const baseUrl = "https://www.oysho.com/es/";
const expectedTitle =
  "OYSHO España / Spain | Deporte y Tiempo Libre | Sitio Oficial®";
const expectedUrl =
  "https://www.oysho.com/es/deporte/camiseta-tirantes-perfect-adapt-copas-c1010131105p136652022.html?colorId=800";
const expectedRegister = "https://www.oysho.com/es/signup";
const expectedLogged = "https://www.oysho.com/es/logon";

describe("Prueba de automatización de Oysho", () => {
  beforeEach(() => {
    cy.visit(baseUrl, {
      headers: {
        "Accept-Encoding": "gzip, deflate",
      },
    });
    cy.clearCookies();
    cy.url().should("eq", baseUrl);
  });

    it("Verificar el título de la página", () => {
    cy.title().should("eq", expectedTitle);
    cy.get("#onetrust-accept-btn-handler").click();
    

  });

  it("Verificar navegación", () => {
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('input[placeholder="Buscar"]').click();
    cy.get('img[alt="Camiseta tirantes perfect-adapt copas"]').click();
    cy.url().should('eq', expectedUrl, 'La URL cambió correctamente después del clic');

  });

  it("Registro de Usuario", () => {
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('button[data-testid="user-button"]').should('be.visible').click({ multiple: true });
    cy.wait(5000);
    
    cy.get('[data-testid="my-account-menu-signup"]').click();
    cy.get('[data-testid="user-button"]').click();
    cy.get('[data-testid="my-account-menu-signup"]').click();
    cy.url().should(
      "eq",
      expectedRegister,
      "Usuario accede a Register correctamente después del clic"
    );
    cy.get("#email-create-account").type("yegen53347@searpen.com");
    cy.get("#password").type("QA1password");
    cy.get('oy-privacy-policy input[data-testid="checkbox-input"]').check({ force: true });
    cy.get('button[data-testid="create-account"]').click();

  });

  it("Inicio de sesion de Usuario", () => {
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('button[data-testid="user-button"]').should('be.visible').click({ multiple: true });
    cy.wait(5000);
    cy.url().should(
      "eq",
      expectedLogged,
      "Usuario inicia sesión correctamente después del clic"
    );
    cy.wait(2500)
    cy.get("#email-login").type("yegen53347@searpen.com");
    cy.get("#password").type("QA1password");
    cy.get('button[data-testid="login-button"]').click();

  });
});
