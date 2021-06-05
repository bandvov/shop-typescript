import styled from 'styled-components';
import { StyledDiv } from './styled/styled-div';

const StyledCard = styled(StyledDiv)`
  width: 19.9%;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  transition: 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.darkOutShadow},
    ${(props) => props.theme.lightOutShadow};

  div {
    width: 100%;
  }
  :hover div {
  }
`;

function Card(props: IProps) {
  return <StyledCard {...props} />;
}

export default Card;
