import styled from 'styled-components';
import { Styleddiv } from './styled-div';

export const StyledLogin = styled(Styleddiv)`
box-shadow:${props=>props.theme.darkOutShadow},${(props)=>props.theme.lightOutShadow};
`