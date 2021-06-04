import React from 'react';
import Div from '../components/common/div';

import Header from '../components/header';

function HomePage(): React.ReactElement {
  return (
    <Div padding="0" minHeight="90vh" align="flex-start">
      <Header />
    </Div>
  );
}

export default HomePage;
