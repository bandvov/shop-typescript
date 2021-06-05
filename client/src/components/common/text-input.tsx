import React from 'react';
import { StyledInput } from '../styled/styled-input';
import { ERROR_MESSAGE_COLOR } from '../../configs/constants';

export function Input({
  type,
  helperText,
  showHelperText,
  ...props
}: IProps): React.ReactElement {
  return (
    <div
      style={{
        minHeight: '65px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledInput type="text" {...props} />
      {(showHelperText && helperText) || (helperText && props.error) ? (
        <span
          style={{
            paddingLeft: '1rem',
            color: props.error ? ERROR_MESSAGE_COLOR : '',
          }}
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
