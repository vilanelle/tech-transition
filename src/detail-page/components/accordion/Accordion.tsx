import React from 'react';
import styled from 'styled-components';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary,
  Link,
  List,
  ListItem as MuiListItem,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Resource } from '../../../data/detail-page/resources/resourcesInterfaces';
import { AccordionListItem } from './AccordionListItem';

interface AccordionProps {
  header: string;
  list: Resource[];
}

const StyledAccordion = styled((props) => <MuiAccordion {...props} />)`
  border: 1px solid ${({ theme }) => theme.palette.text.disabled};
  box-shadow: none;

  &:not(:first-child) {
    border-top: none;
  }

  &:before {
    height: 0;
  }

  &.Mui-expanded + & {
    border-top: 1px solid ${({ theme }) => theme.palette.text.disabled};
  }

  &.Mui-expanded {
    border-top: 1px solid ${({ theme }) => theme.palette.text.disabled};
  }
`;

const StyledAccordionDetails = styled(MuiAccordionDetails)`
  display: flex;
  flex-direction: column;
`;

export const Accordion: React.FC<AccordionProps> = ({ header, list }) => (
  <StyledAccordion square>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{header}</Typography>
    </AccordionSummary>
    <StyledAccordionDetails>
      <List>
        {list.map((listElement) => (
          <AccordionListItem key={listElement.id} listElement={listElement} />
        ))}
      </List>
    </StyledAccordionDetails>
  </StyledAccordion>
);
