import React from 'react';
import Div from '../components/common/div';
import SearchPanel from '../components/searchpanel';
import WishlistButton from '../components/wishlist-button';
import ProfileButton from '../components/profile-button';

function SearchbarContainer(): React.ReactElement {
  return (
    <Div padding="0">
      <WishlistButton />
      <ProfileButton active={true} />
      <ProfileButton />
    </Div>
  );
}

export default SearchbarContainer;
