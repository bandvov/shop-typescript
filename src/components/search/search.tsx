import React from 'react';
import Div from '../common/div';
import SearchPanel from './searchpanel';
import SearchbarCTAContainer from '../../containers/searchbar-cta-container';
import logo from '../../images/LOGO.svg';
import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../configs/constants';

const StyledLogoContainer = styled(Div)`
    @media (max-width: ${BREAKPOINT_MD}px) {
    position: absolute;
    top: -30px;
    left: 40px;
  }
`;

const StyledSeachContainer = styled(Div)`
    @media (max-width: ${BREAKPOINT_MD}px) {
      transition: all 0.5s ease-in-out;
    flex-direction: column-reverse;
    align-items: flex-end;
    padding: 0;
  }
`;

const StyledSearchbarCTAContainer = styled(SearchbarCTAContainer)`
    @media (max-width: ${BREAKPOINT_MD}px) {
    margin: 1rem 0.6rem 1rem 0;
  }
`;

function Search():React.ReactElement {

    return (
      <Div background="primary" justify="space-between" align="center" padding="1rem 0" width="100%">
        <StyledLogoContainer>          
          <img src={logo} />
        </StyledLogoContainer>    
        <StyledSeachContainer width='100%'>
        <SearchPanel margin="0 0 0 1rem" width="100%" height="50px" />
        <StyledSearchbarCTAContainer />
        </StyledSeachContainer>
      </Div>
    );
}

export default Search;
