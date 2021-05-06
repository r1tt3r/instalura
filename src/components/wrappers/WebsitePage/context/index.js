import React from 'react';

export const WebsitePageContext = React.createContext({
  toggleModal: () => {},
  getProfileData: () => {},
  setProfileData: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});
