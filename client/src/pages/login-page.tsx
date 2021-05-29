import Div from '../components/common/div';
import Login from '../components/login';
import { Input } from '../components/common/text-input';
import { useState } from 'react';
import Button from '../components/common/button';
import { ERROR_MESSAGE_COLOR, BASE_API_URL } from '../configs/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function LoginPage(): React.ReactElement {
  const [loginError, setLoginError] = useState<string>('');
  const [userData, setUserData] = useState<IUser>({ email: '', password: '' });

  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData({
      ...userData,
      [e.target.name.trim().toLowerCase()]: e.target.value,
    });
  };
  const submitHandler = async () => {
    await axios
      .post(BASE_API_URL + '/login', userData)
      .then((res) => {
        if (res) {
          dispatch(res);
        }
        console.log('res', res);
      })
      .catch((e) => {
        setLoginError(e.response.data.message);
        throw e.response.data.message;
      });
  };

  return (
    <Div direction={'column'} minHeight="100vh">
      <Login direction={'column'} minHeight="100px" width="300px">
        <h2>Sign In</h2>
        <Div padding="0 3rem 2rem" direction="column">
          <Input
            name="email"
            onChange={changeHandler}
            placeholder="some placeholder"
            helperText={'hello'}
            showHelperText
          />
          <Input
            name="password"
            onChange={changeHandler}
            placeholder="some placeholder"
            helperText={'hello'}
            error={true}
          />
          <Button onClick={submitHandler}>Sign In</Button>
          <div
            style={{
              height: '30px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {loginError && (
              <span style={{ color: ERROR_MESSAGE_COLOR }}>{loginError}</span>
            )}
          </div>
          <div
            style={{
              padding: '0 0 0.4rem',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <span>Don&apos;t have account?</span>
          </div>
          <Button
            background={
              'linear-gradient(180deg, rgba(157,249,161,1) 0%, rgba(157,249,161,1) 0%, rgba(17,150,70,1) 100%)'
            }
          >
            Sign Up
          </Button>
        </Div>
      </Login>
    </Div>
  );
}

export default LoginPage;
