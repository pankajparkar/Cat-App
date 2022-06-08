describe('Cat List Page', () => {
  it('Visits the app root url', () => {
    // given
    cy.visit('/');

    // when
    cy.wait(500);

    // then
    cy.url().should('include', '/cat/list');
    cy.contains('header .app-name', 'The Cat App');
    cy.contains('a.router-link-active', 'Cats');
    cy.get('.ant-input-search input').should('have.value', '');
    cy.get('.ant-table-content table tbody').find('tr').should('have.length', 10);
    cy.contains('#footer', 'Powered By:-');
  });

  it('Input should search by breed name', () => {
    // given
    cy.visit('/');

    // when
    cy.wait(200);
    cy.get('input').type('abys');
    cy.get('button.ant-input-search-button').click();
    cy.wait(500);

    // then
    cy.get('.ant-table-content table tbody').find('tr').should('have.length', 1);
  });

  it('It should refresh the table on allow clear close button click', () => {
    // given
    cy.visit('/');
    cy.get('input').type('abys');
    cy.get('button.ant-input-search-button').click();

    // when
    cy.wait(200);
    cy.get('.anticon-close-circle').click();
    cy.wait(500);
    // cy.wait('@ajax-requests');

    // then
    cy.get('.ant-table-content table tbody').find('tr').should('have.length', 10);
  });

  it('On click of edit button link should navigate to cat details page', () => {
    // given
    cy.visit('/');

    // when
    cy.wait(200);
    cy.get('.ant-table-tbody .ant-table-cell a').first().click();
    cy.wait(500);

    // then
    cy.url().should('contain', '/cat/');
  });
});
