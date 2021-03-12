import React from 'react';
import FetchJobContent from './TabJobCotet/FetchJobContent';

interface JobProps {
  content: string;
}

export const JobsTab: React.FC<JobProps> = ({ content }) => (
  <div>
    <FetchJobContent />
    {content}
  </div>
);
