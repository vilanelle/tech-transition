import styled from 'styled-components';

export const GridContainer = styled('div')`
    width: 100%;
    display: grid;
    margin: 2em auto 0;
    padding-bottom: 2em;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
    grid-gap: 2em;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-top: 1.5em;
    }
`;
