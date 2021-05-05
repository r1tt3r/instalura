/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';
import ProfileScreenPageObject from '../../../../src/components/screens/ProfileScreen/ProfileScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    describe('should open profile page', () => {
      it('open a modal and make a new post', () => {
        const loginScreen = new LoginScreenPageObject(cy);
        const profileScreen = new ProfileScreenPageObject(cy);
        const imageUrl = 'https://avatars.githubusercontent.com/u/13791385';

        loginScreen
          .fillLoginForm({ user: 'leandroritter1988', password: 'senhasegura' })
          .submitLoginForm();

        cy.url().should('include', '/app/profile');

        profileScreen
          .openModalPhotoUpload()
          .fillInputImageUrl(imageUrl)
          .formNextStep()
          .selectFilters();

        cy.get('#postPreview figure').should('have.class', 'filter-charmes');

        profileScreen.makePostButton();
      });
    });
  });
});
