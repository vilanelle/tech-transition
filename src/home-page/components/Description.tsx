import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const DescriptionContainer = styled('div')`
  text-align: center;
  margin: auto;
  width: 80%;
  margin-top: 2em;

  *:not(:last-child) {
    margin-bottom: 1em;
  }
  ${props => { return props.theme.breakpoints.down('sm'); }} {
    width: 90%;
    margin-top: 1.5em;

    *:not(:last-child) {
        margin-bottom: .8em;
      }
  }
`;

export const Description: React.FC<{}> = () => {
  return (
    <DescriptionContainer>
      <Typography>So you want to work in IT? Or you just curious about opportunities in the TECH world?</Typography>
      <Typography>You&apos;re in the right place!</Typography>
      <Typography>Explore the options below and decide which path works best for you.</Typography>
    </DescriptionContainer>
  );
};
