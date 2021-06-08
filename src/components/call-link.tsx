export function CallLink({
  label,
  icon,
  url,
}: {
  label?: string;
  url?: string;
  icon?: string;
}): React.ReactElement {
  return (
    <a
      style={{
        color: 'white',
        textDecoration: 'none',
        margin: '0 2rem',
      }}
      href={url}
    >
      <img
        style={{
          alignItems: 'center',
          marginRight: '.5rem',
          height: '13px',
        }}
        src={icon}
      />{' '}
      {label}
    </a>
  );
}

export default CallLink;
