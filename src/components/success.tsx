import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';

export const StyledSuccess = styled(StyledDiv)`
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};
  padding: ${(props) => props.padding || ''};
  height: ${(props)=> props.height};
  width: ${(props)=> props.width};
  border: ${(props)=> props.border};
  border-radius: ${(props)=> props.borderRadius};
`;
function Success(props: IProps): React.ReactElement {
  return <StyledSuccess {...props} />;
}
export default Success;
