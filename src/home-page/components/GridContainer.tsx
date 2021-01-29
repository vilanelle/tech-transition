import styled from 'styled-components';

/* Grid container for the main page */
export const GridContainer = styled('div')`
    max-width: 960px;
    width: 80%;
    display: grid;
    margin: auto; 
    margin-top: 2em;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
    grid-gap: 2em;
    justify-items: center;

    ${props => props.theme.breakpoints.down('sm')} {
      width: 90%;
      margin-top: 1.5em;
    }
`;
