import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmallShadowButton from './common/small-shadow-button';

function WishlistButton({active}:{active: boolean}): React.ReactElement {
  return (
    <Link to="/wishlist">
      <SmallShadowButton
        active={active}
        margin="0 0 0 1rem"
        borderRadius="20px"
        width="30px"
        height="30px"
        background="none"
        color="black"
      >
        <FontAwesomeIcon size="1x" icon={faHeart} />
      </SmallShadowButton>
    </Link>
  );
}

export default WishlistButton;
