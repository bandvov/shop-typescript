import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledSmallShadowButton = styled(Button)`
  box-shadow: ${(props) =>
      !props.active ? props.theme.darkSmallOutShadow : props.theme.lightInsetShadow},
    ${(props) =>
      !props.active ? props.theme.lightSmallOutShadow : props.theme.darkInsetShadow};`;
function SmallShadowButton(props:IProps):React.ReactElement {
    return (
<StyledSmallShadowButton {...props} />
    );
}

export default SmallShadowButton;
