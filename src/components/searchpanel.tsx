import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Div from './common/div';
import { faSave } from '@fortawesome/free-regular-svg-icons';

const StyledInput = styled.input<IProps>`
  margin: ${(props) => props.margin};
  border: none;
  outline: none;
  padding-left: 2.5rem;
  outline: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius || '35px'};
  background-color: ${(props) => props.theme.background.primary};
  box-shadow: ${(props) => props.theme.lightInsetShadow},
    ${(props) => props.theme.darkInsetShadow};
`;

function SearchPanel(props: IProps): React.ReactElement {
  return (
    <Div padding={'0'} width="100%" position="relative" borderRadius="35px">
      <FontAwesomeIcon
        style={{ position: 'absolute', top: '18px', left: '35px' }}
        icon={faSave}
      />
      <StyledInput {...props} />
    </Div>
  );
}
export default SearchPanel;
