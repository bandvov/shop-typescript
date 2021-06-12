import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'text' })<IProps>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.normal};
  background: ${(props) => {
   switch(props.background) {
     case 'primary':
     return props.theme.background.primary;
     case 'secondary':
     return props.theme.background.secondary;
     case 'transparent':
     return 'transparent';
     default:
     return props.background; 
   }
   }};
  width: ${(props) => props.width};
  height: ${(props) => props.height || props.theme.inputHeight};
  box-shadow: ${(props) => props.theme.darkInsetShadow},
    ${(props) => props.theme.lightInsetShadow};
  border-radius: ${(props) =>
    props.borderRadius || props.theme.borderRadius.primary};
  border: ${(props) =>
    props.error
      ? props.theme.border.primary.error
      : props.theme.border?.primary.default};
  padding: ${(props) => props.padding || props.theme.padding?.primary};
  outline: ${(props) => props.outline || 'none'};
  color: ${(props) => (props.error ? props.theme.error : '')};
  position: relative;
  ::placeholder {
    color: ${(props) => (props.error ? props.theme.error : '')};
  }
`;
