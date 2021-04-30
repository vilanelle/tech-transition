import React from 'react';
import styled from 'styled-components';
import { Link, ListItem as MuiListItem, Typography } from '@material-ui/core';
import { Resource } from '../../../data/detail-page/resources/ResourcesInterfaces';

interface AccordionListItemProps {
  listElement: Resource;
}

const StyledListItem = styled(props => <MuiListItem {...props} />)`
  padding-left: 0;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledListElementDescription = styled(Typography)`
  display: block;
`;

export const AccordionListItem: React.FC<AccordionListItemProps> = ({
  listElement,
}) => {
  const { url, title, description } = listElement;
  const hasDescription = description !== null;

  return (
    <StyledListItem>
      <Link href={url} variant="body2">{title}</Link>
      {hasDescription && (
        <StyledListElementDescription>
          {description}
        </StyledListElementDescription>
      )}
    </StyledListItem>
  );
};
