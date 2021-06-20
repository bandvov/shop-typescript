import React from 'react';
import Search from '../components/search/search';
import Div from '../components/common/div';
import { BREAKPOINT_MD } from '../configs/constants';
import styled from 'styled-components';

const Container = styled(Div)`
padding: 0 6rem;
background: ${(props)=>props.theme.background.primary};
  @media (max-width: ${BREAKPOINT_MD}px) {
        padding: 0 0.5rem;        
    }`;


function Wishlist():React.ReactElement {
    return (
        <Container direction='column'>
            <Search />
        </Container>
    );
}

export default Wishlist;
