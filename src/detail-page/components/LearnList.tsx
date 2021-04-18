import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import styled from 'styled-components';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { capitalizeFirst, getData } from './LearnList.helpers';

interface LearnListProps {
    professionId: ProfessionId;
  }

const StyledDiv = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledButton = styled(Button)`
    border-radius: 0;
    font-weight: bold;
    text-transform: none;
    border: 2px solid ${props => props.theme.palette.primary.main};
    margin-bottom: 1rem;

    &:hover {
        border: 2px solid ${props => props.theme.palette.primary.main};
    }
`;

const StyledList = styled('ul')`
    list-style: none;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 0;
`;

const StyledLi = styled('li')`
    display: flex;
    line-height: 1.2;
    margin: 0 0 .8rem;
`;

const Text = styled('p')`
  margin: 0;
  font-size: .95rem;
`;

const Bullet = styled(FiberManualRecordIcon)`
    width: .6rem;
    padding: 0 .5rem;
    font-size: 1rem;
    transform: translateY(1.5px);
`;

export const LearnList: React.FC<LearnListProps> = ({ professionId }) => {
  const data = getData(professionId);
  return (
    <StyledDiv>
      <StyledList>
        {data.list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StyledLi key={index}>
            <Bullet color="primary" />
            <Text>{capitalizeFirst(item)}</Text>
          </StyledLi>
        ))}
      </StyledList>
      {data.roadMapLink
      && (
        <StyledButton variant="outlined" color="primary" href={data.roadMapLink}>
          Go to developer roadmap
        </StyledButton>
      )}
    </StyledDiv>
  );
};
