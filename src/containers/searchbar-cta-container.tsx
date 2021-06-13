import React from 'react';
import Div from '../components/common/div';
import WishlistButton from '../components/wishlist-button';
import ProfileButton from '../components/profile-button';

function SearchbarCtaContainer(): React.ReactElement {
  return (
    <Div padding="0">
      <WishlistButton />
      <ProfileButton active={true} />
      <ProfileButton />
    </Div>
  );
}

export default SearchbarCtaContainer;
