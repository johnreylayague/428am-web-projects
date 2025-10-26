import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default AppProviders;
