import React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: unknown;
    value: unknown;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {(value === index) ? children : null}
    </div>
  );
};
