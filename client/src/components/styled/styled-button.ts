import styled from 'styled-components';

export const StyledButton = styled.button<IProps>`
  height: ${(props) => props.height || props.theme.button.height};
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.color || props.theme.button.color?.primary};
  background: ${(props) =>
    props.background || props.theme.button.background?.primary};
  border: none;
  border-radius: ${(props) => props.borderRadius || '16px'};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: ${(props) => props.margin || '0.5rem 0'};
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};
  &:active {
    box-shadow: none;
  }
`;
