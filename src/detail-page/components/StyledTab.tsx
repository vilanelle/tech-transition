import React from 'react';
import { Tab } from '@material-ui/core';
import styled from 'styled-components';

const TabWithStyle = styled(Tab)`
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
    onClick: (index: number) => any;
  }

export const StyledTab: React.FC<TabProps> = ({ text, chosenTab, index, onClick }) => {
  /* Adding className active to chosen card for creating bold text */
  return (
    <TabWithStyle
      label={text}
      className={chosenTab === index ? 'active' : ''}
      onClick={() => onClick(index)}
    />
  );
};
