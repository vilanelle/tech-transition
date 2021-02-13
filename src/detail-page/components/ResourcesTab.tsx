import React from 'react';

interface ResourcesProps {
  content: any;
}

export const ResourcesTab: React.FC<ResourcesProps> = ({ content }) => {
  return (
    <div>
      {/* Should be replace with actual content */}
      {content}
    </div>
  );
};
