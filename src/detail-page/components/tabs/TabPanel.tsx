import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  getTabContent: (categoryId: string) => ReactElement;
  syncTabWithPath: (categoryId: string) => void;
}

const StyledDiv = styled('div')`
    min-height: 62vh;
    display: flex;
`;

export const TabPanel: React.FC<Props> = ({ getTabContent, syncTabWithPath }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  useEffect(() => {
    syncTabWithPath(categoryId);
  }, [categoryId, syncTabWithPath]);
  return (
    <StyledDiv role="tabpanel">
      {getTabContent(categoryId)}
    </StyledDiv>
  );
};
