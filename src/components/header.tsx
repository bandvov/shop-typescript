import Div from './common/div';

import deliveryIcon from '../images/delivery-icon.svg';
import phone from '../images/phone.svg';
import CallLink from './call-link';
import CustomLink from './custom-link';

function Header(): React.ReactElement {
  return (
    <Div padding="0" direction="column">
      <Div background="secondary" justify="center" width="100%" minHeight="40px">
        <Div width="85vw" justify="space-between">
          <Div>
            <CustomLink label="Home" url="/" />
            <CustomLink label="About" url="/about" />
            <CustomLink label="Contacts" url="/contacts" />
          </Div>
          <Div background="black">
            <CallLink
              url="tel:4343343434"
              icon={phone}
              label="8 (068) 111-11-11"
            />
            <CustomLink url="/delivery" icon={deliveryIcon} label="Delivery" />
          </Div>
        </Div>
      </Div>

    </Div>
  );
}

export default Header;
