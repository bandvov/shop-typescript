import styled from 'styled-components';

export const StyledDiv = styled.div<IProps>`
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
  padding: ${(props) => props.padding || props.theme.padding.default};
  background: ${(props) => props.background || props.theme.background};
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight || props.theme.minHeight};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  border-radius: ${(props) => props.borderRadius};
  flex-direction: ${(props) => props.direction || 'row'};
  border: ${(props) => props?.border || 'none'};
  flex-wrap: ${(props) => props.wrap || ''};
  margin: ${(props) => props.margin};
  color: ${(props)=>props.color || 'black'};
  font-size:${(props)=>props.fontSize};
`;
