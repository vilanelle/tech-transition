import React from 'react';

interface TabProps {
    content: any;
}

export const ResourcesTab: React.FC<TabProps> = ({ content }) => {
  return (
    <div>
      {/* Should be replace with actual content */}
      {content}
    </div>
  );
};
