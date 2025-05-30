describe('template spec', () => {
  it('Order page successfully routing Success page', () => {
    cy.visit('http://localhost:5173/order');
    cy.get("[data-cy='küçük']").check().should('be.checked');
    cy.get("[data-cy='submit']").should('be.disabled');
    cy.get("[data-cy='kalınlık']")
      .select('Normal Kenar')
      .should('have.value', 'normal kenar');
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
    cy.get("[data-cy='success']").contains('SİPARİŞİN ALINDI!');
  });
});
