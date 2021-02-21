import styled from 'styled-components';

/* Main container with background img for all pages */
export const MainContainer = styled('div')`
    background: url('${process.env.PUBLIC_URL}/img/background-img.png') center top / cover no-repeat;
    min-height: 100vh;
`;
