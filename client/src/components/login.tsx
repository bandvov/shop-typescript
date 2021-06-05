import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';

export const StyledLogin = styled(StyledDiv)`
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};
  padding: ${(props) => props.padding || ''};
`;
function Login(props: IProps): React.ReactElement {
  return <StyledLogin {...props} />;
}
export default Login;
