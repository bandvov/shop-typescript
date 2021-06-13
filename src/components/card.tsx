import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';
import React from 'react';
import { BREAKPOINT_SM, BREAKPOINT_MD, BREAKPOINT_LG, BREAKPOINT_XL, BREAKPOINT_XXL } from '../configs/constants';

const StyledCard = styled(StyledDiv)`
flex: 0 1 calc(20% - 1em);
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};


  @media screen and (max-width: ${BREAKPOINT_SM}px) {
flex:0 1 100%;
}
  @media screen and (min-width: ${BREAKPOINT_SM}px) {
  min-width: calc(40% - 10px);
}
  @media screen and (min-width: ${BREAKPOINT_MD}px) {
    min-width: calc(26% - 10px);
}
    
  @media screen and (min-width: ${BREAKPOINT_LG}px) {
    min-width: calc(28% - 10px);
}
  @media screen and (min-width: ${BREAKPOINT_XL}px) {
    min-width: calc(16% - 10px);
}
  @media screen and (min-width: ${BREAKPOINT_XXL}px) {
    min-width: calc(16% - 10px);
}

div {
  height: 100%;
  width:100%;
}
/* image container  */
a  div {
  overflow: hidden;
  height: 200px;
    min-width: 100px;

  } 
`;

function Card(props: IProps): React.ReactElement {
  return <StyledCard {...props} />;
}

export default Card;
