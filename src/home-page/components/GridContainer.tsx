import styled from 'styled-components';

/* Grid container for the main page */
export const GridContainer = styled('div')`
    max-width: 960px;
    width: 80%;
    display: grid;
    margin: 2em auto 0;
    padding-bottom: 2em;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
    grid-gap: 2em;
    justify-items: center;

    ${props => { return props.theme.breakpoints.down('sm'); }} {
      width: 90%;
      margin-top: 1.5em;
    }
`;
