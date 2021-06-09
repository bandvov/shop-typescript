import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';

export const StyledRegistration = styled(StyledDiv)`
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};
  padding: ${(props) => props.padding || ''};
`;
function Registration(props: IProps): React.ReactElement {
  return <StyledRegistration {...props} />;
}
export default Registration;
