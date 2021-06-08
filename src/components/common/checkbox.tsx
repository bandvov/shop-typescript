import React from 'react';
import { StyledCheckbox } from '../styled/styled-checkbox';

function Checkbox(props: IProps): React.ReactElement {
  return <StyledCheckbox {...props} />;
}

export default Checkbox;
