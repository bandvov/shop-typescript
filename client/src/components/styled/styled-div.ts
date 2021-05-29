import styled from 'styled-components';

export const StyledDiv = styled.div<IProps>`
  padding: ${(props) => props.padding || props.theme.padding.secondary};
  background: ${(props) => props.background || props.theme.background};
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight || props.theme.minHeight};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  border-radius: ${(props) =>
    props.borderRadius || props.theme.borderRadius?.secondary};
  flex-direction: ${(props) => props.direction || 'row'};
  border: ${(props) => props?.border || 'none'};
`;
