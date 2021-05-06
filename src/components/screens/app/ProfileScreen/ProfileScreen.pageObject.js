export default class ProfileScreenPageObject {
  constructor(cy) {
    this.cy = cy;
  }

  openModalPhotoUpload() {
    this.cy.get('nav button[type="button"]').click();
    return this;
  }

  fillInputImageUrl(url) {
    this.cy.get('#photoUpload input[name="imageUrl"]').type(url);
    return this;
  }

  formNextStep() {
    this.cy.get('#nextStep').click();
    return this;
  }

  selectFilters() {
    this.cy
      .get('.carousel .flickity-viewport div .filter-clarendon')
      .trigger('drop')
      .click();

    this.cy
      .get('.carousel .flickity-viewport div .filter-crema')
      .trigger('drop')
      .click();

    this.cy
      .get('.carousel .flickity-viewport div .filter-charmes')
      .trigger('drop')
      .click();
    return this;
  }

  makePostButton() {
    this.cy.get('#makePost').click();
    return this;
  }
}
