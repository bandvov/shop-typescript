import styled from 'styled-components';

export const StyledCheckbox = styled.input.attrs<IProps>({ type: 'checkbox' })`
  :checked {
    color: green;
  }
`;
