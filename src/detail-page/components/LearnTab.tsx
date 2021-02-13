import React from 'react';

interface LearnProps {
  content: any;
}

export const LearnTab: React.FC<LearnProps> = ({ content }) => {
  return (
    <div>
      {/* Should be replace with actual content */}
      {content}
    </div>
  );
};
