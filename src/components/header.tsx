import Div from './common/div';
import SearchPanel from './searchpanel';
import SearchbarContainer from '../containers/searchbar-container';
import deliveryIcon from '../images/delivery-icon.svg';
import phone from '../images/phone.svg';
import logo from '../images/LOGO.svg';
import CallLink from './call-link';
import CustomLink from './custom-link';

function Header(): React.ReactElement {
  return (
    <Div padding="0" direction="column">
      <Div justify="center" width="98vw" minHeight="40px" background="black">
        <Div background="black" width="85vw" justify="space-between">
          <Div background="black">
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
      <Div justify="space-between" align="center" padding="1rem 0" width="85vw">
        <div style={{ height: '100%' }}>
          <img src={logo} />
        </div>
        <SearchPanel margin="0 0 0 1rem" width="100%" height="50px" />
        <SearchbarContainer />
      </Div>
    </Div>
  );
}

export default Header;
