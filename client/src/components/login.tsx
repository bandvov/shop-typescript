import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';

export const StyledLogin = styled(StyledDiv)`
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};
  padding: ${(props) => props.padding || ''};
`;
export function Login(props: any): React.ReactElement {
  return <StyledLogin {...props} />;
}

export default Login;
