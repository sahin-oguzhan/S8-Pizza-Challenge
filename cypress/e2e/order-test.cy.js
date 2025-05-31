describe('Form sayfasına ulaşma', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  ['sipariş1', 'sipariş2', 'sipariş3'].forEach((button) => {
    it(`${button} butonu order sayfasına yönlendirmeli`, () => {
      cy.get(`[data-cy="${button}"]`).click();
      cy.url().should('include', '/order');
    });
  });
});
describe('Form Gönderme', () => {
  it('Form başarılı bir şekilde doldurulunca sipariş ver butonu aktif oluyor ve yönlendirme yapıyor', () => {
    cy.visit('http://localhost:5173/order');
    cy.get("[data-cy='küçük']").check().should('be.checked');
    cy.get("[data-cy='submit']").should('be.disabled');
    cy.get("[data-cy='kalınlık']")
      .select('Normal Kenar')
      .should('have.value', 'Normal Kenar');
    cy.get("[data-cy='submit']").should('be.disabled');
    cy.get("[data-cy='extras']").check([
      'Pepperoni',
      'Kanada Jambonu',
      'Sucuk',
      'Mısır',
      'Sarımsak',
    ]);
    cy.get("[data-cy='submit']").should('be.disabled');
    cy.get("[data-cy='isim']").type('Oğuzhan');
    cy.get("[data-cy='submit']").should('be.enabled');
    cy.get("[data-cy='submit']").click();
    cy.url().should('include', 'http://localhost:5173/success');
  });
});
