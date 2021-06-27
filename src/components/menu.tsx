import React from 'react';
import Div from './common/div';
import styled from 'styled-components';
import MenuItem from './menuItem';
import { CATEGORIES, isTablet } from '../configs/constants';

const StyledDiv = styled(Div)`
box-shadow: 
    ${(props) =>
  props.theme.lightSmallOutShadow },
      ${(props) =>
      props.theme.darkSmallOutShadow};
      margin-bottom: .5rem;
`;
function Menu():React.ReactElement {
const slicedCategories =  isTablet?CATEGORIES.slice(0,5):CATEGORIES.slice(0,6);
    return (
        <StyledDiv justify='stretch' width='100%' height='70px'>
          {slicedCategories.map(category=>{
              return <MenuItem key={category.name} title={category.name}>{category.children}</MenuItem>;
          })}
        </StyledDiv>
    );
}

export default Menu;
