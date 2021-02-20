import React from 'react';
import { Tab as MuiTab, TabProps as MuiTabProps } from '@material-ui/core';
import styled from 'styled-components';

const StyledTab = styled(MuiTab)`
  text-transform: none;
  opacity: 1;

  &.active {
    font-weight: bold;
  }
`;

type TabProps = {
  text: string;
  chosenTab: number;
  index: number;
  handleClick: (index: number) => void;
} & MuiTabProps;

export const Tab: React.FC<TabProps> = props => {
  const {
    text,
    chosenTab,
    index,
    handleClick,
    ...rest
  } = props;
  return (
    <StyledTab
      {...rest}
      label={text}
      className={chosenTab === index ? 'active' : ''}
      onClick={() => handleClick(index)}
    />
  );
};
