import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import SmallShadowButton from './common/small-shadow-button';

function ProfileButton({ active }: { active?: boolean }): React.ReactElement {
  return (
    <Link to="/profile">
      <SmallShadowButton
        active={active}
        margin="0 0 0 1rem"
        borderRadius="20px"
        width="30px"
        height="30px"
        background="none"
        color="black"
      >
        <FontAwesomeIcon icon={faUser} />
      </SmallShadowButton>
    </Link>
  );
}

export default ProfileButton;
