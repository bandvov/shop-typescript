import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';
import React from 'react';

const StyledCard = styled(StyledDiv)`
  flex: 1 16%;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};

  div {
    width: 100%;
  }
 
`;

function Card(props: IProps): React.ReactElement {
  return <StyledCard {...props} />;
}

export default Card;
