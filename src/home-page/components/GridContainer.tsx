import styled from 'styled-components';

/* Grid container for the main page */
export const GridContainer = styled('div')`
    width: 100%;
    display: grid;
    margin: 2em auto 0;
    padding-bottom: 2em;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
    grid-gap: 2em;

    ${props => props.theme.breakpoints.down('sm')} {
      width: 90%;
      margin-top: 1.5em;
    }
`;
