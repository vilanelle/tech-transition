import React from 'react';
import FetchJobContent from './TabJobContent/FetchJobContent';

interface JobProps {
  content: string;
}

export const JobsTab: React.FC<JobProps> = ({ content }) => (
  <div>
    <FetchJobContent />
  </div>
);
