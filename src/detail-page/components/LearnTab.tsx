import React from 'react';
import styled from 'styled-components';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { LearnList } from './LearnList';

const TabContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  grid-gap: 2em;
  padding: 1.5em;
  width: 100%;
`;

interface LearnProps {
  professionId: ProfessionId;
}

export const LearnTab: React.FC<LearnProps> = ({ professionId }) => (
  <TabContainer>
    <LearnList professionId={professionId} />
    <div>
      {/* Should be replace with actual content */}
    </div>
  </TabContainer>
);
