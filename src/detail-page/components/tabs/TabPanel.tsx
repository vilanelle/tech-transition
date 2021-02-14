import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => (
  <div
    role="tabpanel"
  >
    {children}
  </div>
);
