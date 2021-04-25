import React from 'react';
import styled from 'styled-components';
import JobTab from './TabJobContent/JobTab';

const StyledTab = styled('div')`
  min-height: 500px;
`;

export const JobsTab: React.FC = () => (
  <StyledTab>
    <JobTab />
  </StyledTab>
);
