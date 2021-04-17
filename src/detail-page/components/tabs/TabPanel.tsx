import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryId } from '../../../data/detail-page/tabs/tabsInterfaces';

interface Props {
  getTabContent: (categoryId: CategoryId) => ReactElement;
  syncTabWithPath: (categoryId: CategoryId) => void;
}

const StyledDiv = styled('div')`
  min-height: 62vh;
  display: flex;
  padding: ${({ theme }) => theme.spacing(3, 2)};
`;

export const TabPanel: React.FC<Props> = ({ getTabContent, syncTabWithPath }) => {
  const { categoryId } = useParams<{ categoryId: CategoryId }>();
  useEffect(() => {
    syncTabWithPath(categoryId);
  }, [categoryId, syncTabWithPath]);
  return (
    <StyledDiv role="tabpanel">
      {getTabContent(categoryId)}
    </StyledDiv>
  );
};
