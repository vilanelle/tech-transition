import React from 'react';

interface ResourcesProps {
  content: string;
}

export const ResourcesTab: React.FC<ResourcesProps> = ({ content }) => (
  <div>
    {/* Should be replace with actual content */}
    {content}
  </div>
);
