import React from 'react';
import Div from '../components/common/div';
import WishlistButton from '../components/search/wishlist-button';
import ProfileButton from '../components/search/profile-button';
import { withRouter } from 'react-router-dom';
import { WISHLIST_PATH, CART_PATH } from '../configs/constants';
import CartButton from '../components/search/cart-button';

function SearchbarCtaContainer(props:any): React.ReactElement {
    
  return (
    <Div {...props}  padding="0">
      <WishlistButton active={props.match.path.match(WISHLIST_PATH) ? true : false} />
      <CartButton active={props.match.path.match(CART_PATH) ? true : false}  />
      <ProfileButton />
    </Div>
  );
}

export default withRouter(SearchbarCtaContainer);
