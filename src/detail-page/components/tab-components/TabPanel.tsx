import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return (
    <div
      role="tabpanel"
    >
      {children}
    </div>
  );
};
