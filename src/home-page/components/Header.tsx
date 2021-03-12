import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styled-components';

const HeaderTypography = styled(Typography)`
  width: 80%;
  text-align: center;
  font-weight: bold;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  margin: auto;
`;

export const Header: React.FC<{}> = () => (
  <HeaderTypography variant="h1">
    Power up your transITion
  </HeaderTypography>
);
