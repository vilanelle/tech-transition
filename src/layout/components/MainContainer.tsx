import styled from 'styled-components';

import backgroundImg from '../../img/background-img.png';

/* Main container with background img for all pages */
export const MainContainer = styled('div')`
    background: url(${backgroundImg}) center top / cover no-repeat;
    min-height: 100vh;
`;
