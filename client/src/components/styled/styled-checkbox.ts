import styled from 'styled-components';

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  :checked {
    color: green;
  }
`;
