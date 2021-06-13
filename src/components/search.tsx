import React from 'react';
import Div from './common/div';
import SearchPanel from './searchpanel';
import SearchbarCTAContainer from '../containers/searchbar-cta-container';
import logo from '../images/LOGO.svg';

function Search():React.ReactElement {


    return (
        <Div background="primary" justify="space-between" align="center" padding="1rem 0" width="85vw">
        <div style={{ height: '100%' }}>
          <img src={logo} />
        </div>
        <SearchPanel margin="0 0 0 1rem" width="100%" height="50px" />
        <SearchbarCTAContainer />
      </Div>
    );
}

export default Search;
