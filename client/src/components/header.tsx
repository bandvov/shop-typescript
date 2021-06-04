import Div from './common/div';
import SearchPanel from './searchpanel';
import SearchbarContainer from '../containers/searchbar-container';
import { Link } from 'react-router-dom';
import deliveryIcon from '../images/delivery-icon.svg';
import phone from '../images/phone.svg';
import logo from '../images/LOGO.svg';

function Header() {
  return (
    <Div padding="0" direction="column">
      <Div justify="center" width="98vw" minHeight="40px" background="black">
        <Div background="black" width="85vw" justify="space-between">
          <Div background="black">
            <Link
              style={{ color: 'white', textDecoration: 'none', margin: '0' }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 1rem',
              }}
              to="/about"
            >
              About
            </Link>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 1rem',
              }}
              to="/contacts"
            >
              Contacts
            </Link>
          </Div>
          <Div background="black">
            <a
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 2rem',
              }}
              href="tel:23123123123"
            >
              <img
                style={{
                  alignItems: 'center',
                  marginRight: '.5rem',
                  height: '13px',
                }}
                src={phone}
              />{' '}
              8 (068) 111-11-11
            </a>
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to="/delivery"
            >
              <img
                style={{
                  alignItems: 'center',
                  marginRight: '.5rem',
                  height: '13px',
                }}
                src={deliveryIcon}
              />
              Delivery
            </Link>
          </Div>
        </Div>
      </Div>
      <Div justify="space-between" align="center" padding="1rem 0" width="85vw">
        <div style={{ height: '100%' }}>
          <img src={logo} />
        </div>
        <SearchPanel margin="0 0 0 1rem" width="57vw" height="50px" />
        <SearchbarContainer />
      </Div>
    </Div>
  );
}

export default Header;
