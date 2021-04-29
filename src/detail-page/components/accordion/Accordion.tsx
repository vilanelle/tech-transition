import React from 'react';
import styled from 'styled-components';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  List,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { AccordionListItem } from './AccordionListItem';
import { Resource } from '../../../data/detail-page/resources/ResourcesInterfaces';

interface AccordionProps {
  header: string;
  resources: Resource[];
  panelNumber: number;
}

const StyledAccordion = styled(MuiAccordion)`
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  box-shadow: none;

  &:not(:first-child) {
    border-top: none;
  }

  &:before {
    height: 0;
  }

  &.Mui-expanded + & {
    border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }

  &.Mui-expanded {
    border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }
`;

const StyledAccordionSummary = styled(MuiAccordionSummary)`
  &.Mui-expanded {
    min-height: 24px;

    .MuiAccordionSummary-content.Mui-expanded {
      margin: 12px 0 0;
    }
  }
`;

const StyledAccordionDetails = styled(MuiAccordionDetails)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(0, 2, 1)};
`;

export const Accordion: React.FC<AccordionProps> = ({ header, resources, panelNumber }) => {
  const accordionPanelId = `panel${panelNumber}-header`;
  const accordionAriaControls = `panel${panelNumber}-content`;

  return (
    <StyledAccordion square>
      <StyledAccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={accordionPanelId}
        id={accordionAriaControls}
      >
        <Typography>{header}</Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <List disablePadding>
          {resources.map(listElement => (
            <AccordionListItem key={listElement.id} listElement={listElement} />
          ))}
        </List>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
