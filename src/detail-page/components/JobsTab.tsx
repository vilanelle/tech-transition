import React from 'react';

interface JobProps {
  content: any;
}

export const JobsTab: React.FC<JobProps> = ({ content }) => {
  return (
    <div>
      {/* Should be replace with actual content */}
      {content}
    </div>
  );
};
