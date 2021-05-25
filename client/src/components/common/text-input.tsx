import React from 'react';
import { StyledInput } from '../styled/styled-input';

export function Input(props: IProps): React.ReactElement {
  return <StyledInput type="text" {...props} />;
}
