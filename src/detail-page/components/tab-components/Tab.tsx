import React from 'react';
import { Tab as MuiTab } from '@material-ui/core';
import styled from 'styled-components';

const StyledTab = styled(MuiTab)`
  text-transform: none;
  opacity: 1;

  &.active {
    font-weight: bold;
  }
`;

interface TabProps {
  text: string;
  chosenTab: number;
  index: number;
  onClick: (index: number) => void;
}

export const Tab: React.FC<TabProps> = ({ text, chosenTab, index, onClick }) => {
  /* Adding className active to chosen card for creating bold text */
  return (
    <StyledTab
      label={text}
      className={chosenTab === index ? 'active' : ''}
      onClick={() => onClick(index)}
    />
  );
};
