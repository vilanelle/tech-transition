import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const HeaderTypography = styled(Typography)`
  width: 80%;
  text-align: center;
  font-weight: bold;
  padding-top: 2em;
  margin: auto;
`;

export const Header: React.FC<{}> = () => {
  return (
    <HeaderTypography variant="h1">
      Power up your transITion
    </HeaderTypography>
  );
};
