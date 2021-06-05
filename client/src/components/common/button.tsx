import React from 'react';
import { StyledButton } from '../styled/styled-button';

function Button({ type, ...props }: IProps): React.ReactElement {
  return <StyledButton {...props} />;
}

export default Button;
