import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';
import { ProfessionKey } from '../../data/home-page/ITProfessions';
import { getData } from '../hooks/useLearnList';

interface LearnListProps {
    professionId: ProfessionKey;
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
`;

const StyledList = styled('ul')`
    list-style: none;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
`;

const StyledLi = styled('li')`
    margin: .8rem 0;
    font-size: .95rem;
    position: relative;

    &::before {
        content: '';
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        background-color: ${props => props.theme.palette.primary.main};
        position: absolute;
        left: -1.5rem;
        transform: translateY(6px)
    }
`;

export const LearnList: React.FC<LearnListProps> = ({ professionId }) => {
  const data = getData(professionId);
  return (
    <StyledDiv>
      <StyledList>
        {data.list.map((item, index) => (
          <StyledLi key={item}>{item}</StyledLi>))}
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
