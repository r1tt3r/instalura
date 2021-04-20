import React from 'react';

export const WebsitePageContext = React.createContext({
  toggleModal: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});
