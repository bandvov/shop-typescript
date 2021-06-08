import React from 'react';
import { Link } from 'react-router-dom';

function CustomLink({
  icon,
  label,
  url = '',
}: {
  icon?: string;
  label?: string;
  url?: string;
}): React.ReactElement {
  return (
    <Link
      style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}
      to={url}
    >
      {icon && (
        <img
          style={{
            alignItems: 'center',
            marginRight: '.5rem',
            height: '13px',
          }}
          src={icon}
        />
      )}
      {label}
    </Link>
  );
}

export default CustomLink;
