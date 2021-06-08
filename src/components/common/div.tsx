import { StyledDiv } from '../styled/styled-div';
import React from 'react';

function Div(props: IProps): React.ReactElement {
  return <StyledDiv {...props} />;
}

export default Div;
