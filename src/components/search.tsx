import React, { useEffect, useState } from 'react';
import Div from './common/div';
import SearchPanel from './searchpanel';
import SearchbarCTAContainer from '../containers/searchbar-cta-container';
import logo from '../images/LOGO.svg';
import { searchProducts } from './API';

function Search():React.ReactElement {
    const [searchQuery, setSearchQuery] = useState({});
    useEffect(()=>{
    
      searchProducts(searchQuery).then((res)=>{
        console.log(res);    
      });
    
    },[searchQuery]);

    console.log(searchQuery);
    
    return (
        <Div background="primary" justify="space-between" align="center" padding="1rem 0" width="85vw">
        <div style={{ height: '100%' }}>
          <img src={logo} />
        </div>
        <SearchPanel onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearchQuery(e.target.value)} margin="0 0 0 1rem" width="100%" height="50px" />
        <SearchbarCTAContainer />
      </Div>
    );
}

export default Search;
