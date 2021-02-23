import React from 'react';

interface JobProps {
  content: string;
}

export const JobsTab: React.FC<JobProps> = ({ content }) => (
  <div>
    {/* Should be replace with actual content */}
    {content}
  </div>
);
