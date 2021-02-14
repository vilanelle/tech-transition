import React from 'react';

interface LearnProps {
  content: any;
}

export const LearnTab: React.FC<LearnProps> = ({ content }) => (
  <div>
    {/* Should be replace with actual content */}
    {content}
  </div>
);
