import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function ProfileButton({ active }: { active?: boolean }): React.ReactElement {
  return (
    <Link to="/profile">
      <Button
        active={active}
        margin="0 0 0 1rem"
        borderRadius="20px"
        width="30px"
        height="30px"
        background="none"
        color="black"
      >
        <FontAwesomeIcon icon={faUser} />
      </Button>
    </Link>
  );
}

export default ProfileButton;
