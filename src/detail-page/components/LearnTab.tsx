import React from 'react';

interface LearnProps {
  content: string;
}

export const LearnTab: React.FC<LearnProps> = ({ content }) => (
  <div>
    {/* Should be replace with actual content */}
    {content}
  </div>
);
