import styled from 'styled-components';

export const StyledDiv = styled.div<IProps>`
  background: ${(props) => props.background || props.theme.background};
  width: ${(props) => props.width || props.theme.width};
  min-height: ${(props) => props.minHeight || props.theme.minHeight};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  border-radius: ${(props) =>
    props.borderRadius || props.theme.borderRadius?.primary};
`;
