import React from 'react';
import Button from './common/button';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartButton({active}:{active: boolean}): React.ReactElement {
  return (
    <Link to="/cart">
      <Button
        active={active}
        margin="0 0 0 1rem"
        borderRadius="20px"
        width="30px"
        height="30px"
        background="none"
        color="black"
      >
        <FontAwesomeIcon size="1x" icon={faHeart} />
      </Button>
    </Link>
  );
}

export default CartButton;