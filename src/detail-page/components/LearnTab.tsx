import React from 'react';

interface TabProps {
    content: any;
}

export const LearnTab: React.FC<TabProps> = ({ content }) => {
  return (
    <div>
      {/* Should be replace with actual content */}
      {content}
    </div>
  );
};
