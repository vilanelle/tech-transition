import React from 'react';
import { ProfessionKey } from '../../data/home-page/ITProfessions';

interface ResourcesProps {
  professionId: ProfessionKey;
}

export const ResourcesTab: React.FC<ResourcesProps> = ({ professionId }) => (
  <div>
    {/* Should be replace with actual content */}
    {professionId}
  </div>
);
