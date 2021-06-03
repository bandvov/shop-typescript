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
  margin: ${(props) => props.margin || '0.5rem 0'};
  box-shadow: ${(props) => !props.active ? props.theme.darkOutShadow : props.theme.lightInsetShadow},
    ${(props) =>!props.active ? props.theme.lightOutShadow : props.theme.darkInsetShadow};
  color: ${(props)=>props.active ? 'blue' : ''};
  &:active {
    box-shadow: none;
    color: blue;
    box-shadow: ${(props) =>  props.theme.lightInsetShadow},
    ${(props) => props.theme.darkInsetShadow};

  }
`;
