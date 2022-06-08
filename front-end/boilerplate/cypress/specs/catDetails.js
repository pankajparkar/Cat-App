describe('Cat Details Page', () => {
  it('Visits details page', () => {
    // given
    cy.visit('/');
    cy.wait(500);
    cy.get('.ant-table-tbody .ant-table-cell a').first().click();

    // when
    cy.wait(500);

    // then
    cy.contains('.breed-title').should('not.exist');
    cy.contains('#map canvas').should('not.exist');
    cy.contains('.cat-details-card').should('not.exist');
    cy.contains('.ant-carousel').should('not.exist');
    cy.get('.ant-carousel .slick-list .slick-slide').should('have.length', 21);
    cy.get('.ant-carousel .anticon-right-circle').should('have.length', 1);
    cy.get('.ant-carousel .anticon-left-circle').should('have.length', 1);
  });

  it('Navigation to wiki page', () => {
    // given
    cy.visit('/');
    cy.wait(500);
    cy.get('.ant-table-tbody .ant-table-cell a').first().click();

    // when
    cy.wait(500);

    // then
    cy.get('.ant-card-actions a')
      .invoke('attr', 'href')
      .should('contains', 'https://en.wikipedia.org/');
  });
});
