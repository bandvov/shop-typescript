import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';
import React from 'react';
import { BREAKPOINT_SM, BREAKPOINT_MD, BREAKPOINT_LG, BREAKPOINT_XL, BREAKPOINT_XXL } from '../configs/constants';

const StyledCard = styled(StyledDiv)`
flex:1 1 calc(20% - 1em);
max-width: 20%;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};


  @media screen and (max-width: ${BREAKPOINT_SM}px) {
    flex:1 1 100%;
    max-width:100%;
}
  @media screen and (min-width: ${BREAKPOINT_SM}px) {
    flex:1 1 calc(40% - 10px);
    max-width: 40%;
}
  @media screen and (min-width: ${BREAKPOINT_MD}px) {
   flex: 1 1 calc(26% - 10px);
   max-width: 26%;
}
    
  @media screen and (min-width: ${BREAKPOINT_LG}px) {
 flex: 1 1 calc(28% - 10px);
 max-width: 28%;
}
  @media screen and (min-width: ${BREAKPOINT_XL}px) {
    flex:1 1 calc(20% - 10px);
    max-width: 20%;

}
  @media screen and (min-width: ${BREAKPOINT_XXL}px) {
    flex:1 1 calc(20% - 10px);
    max-width: 20%;

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
