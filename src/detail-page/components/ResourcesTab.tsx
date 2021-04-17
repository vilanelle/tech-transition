import React from 'react';
import { ProfessionId } from '../../data/home-page/ITProfessions';

interface ResourcesProps {
  professionId: ProfessionId;
}

export const ResourcesTab: React.FC<ResourcesProps> = ({ professionId }) => (
  <div>
    {/* Should be replace with actual content */}
    {professionId}
  </div>
);
