import React from 'react';
import Div from '../components/common/div';
import WishlistButton from '../components/wishlist-button';
import ProfileButton from '../components/profile-button';
import { withRouter } from 'react-router-dom';
import { WISHLIST_PATH, PROFILE_PATH, CART_PATH } from '../configs/constants';
import CartButton from '../components/cart-button';

function SearchbarCtaContainer(props:any): React.ReactElement {
  
  
  return (
    <Div padding="0">
      <WishlistButton active={props.match.path.match(WISHLIST_PATH) ? true : false} />
      <CartButton active={props.match.path.match(CART_PATH) ? true : false}  />
      <ProfileButton />
    </Div>
  );
}

export default withRouter(SearchbarCtaContainer);
