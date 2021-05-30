import Div from '../components/common/div';
import Login from '../components/login';
import { Input } from '../components/common/text-input';
import { useState } from 'react';
import Button from '../components/common/button';
import {
  ERROR_MESSAGE_COLOR,
  BASE_API_URL,
  LOGIN_PATH,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  NAME_REGEXP,
  REGISTER_PATH,
} from '../configs/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(NAME_REGEXP, 'Invalid first name format')
    .required(),
  lastName: Yup.string()
    .matches(NAME_REGEXP, 'Invalid last name format')
    .required(),
  email: Yup.string().matches(EMAIL_REGEXP, 'Invalid email format').required(),
  password: Yup.string()
    .required()
    .min(8)
    .max(20)
    .matches(PASSWORD_REGEXP, 'Invalid password format'),
});

function RegisterPage(): React.ReactElement {
  const [loginError, setLoginError] = useState<string>('');

  const dispatch = useDispatch();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: (data) => {
      axios
        .post(BASE_API_URL + REGISTER_PATH, data)
        .then((res) => {
          if (res) {
            dispatch(res);
          }
          console.log('res', res);
        })
        .catch((e) => {
          if (e) {
            setLoginError(e.response?.data?.message);
            throw e.response?.data?.message;
          }
        });
    },
  });

  return (
    <Div direction={'column'} minHeight="100vh">
      <Login direction={'column'} minHeight="100px" width="300px">
        <h2>Sign Up</h2>
        <Div padding="0 3rem 2rem" direction="column">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              error={!!errors.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="Enter first name..."
              helperText={errors.firstName}
              showHelperText
              value={values.firstName}
            />
            <Input
              type="text"
              error={!!errors.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Enter last name..."
              helperText={errors.lastName}
              showHelperText
              value={values.lastName}
            />
            <Input
              type="text"
              error={!!errors.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email..."
              helperText={errors.email}
              showHelperText
              value={values.email}
            />
            <Input
              type="text"
              error={!!errors.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter password..."
              helperText={errors.password}
              value={values.password}
            />
            <Button type="submit">Sign Up</Button>
          </form>
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
            <span>Already have account?</span>
          </div>
          <Link style={{ width: '100%' }} to={LOGIN_PATH}>
            <Button
              background={
                'linear-gradient(180deg, rgba(157,249,161,1) 0%, rgba(157,249,161,1) 0%, rgba(17,150,70,1) 100%)'
              }
            >
              Sign In
            </Button>
          </Link>
        </Div>
      </Login>
    </Div>
  );
}

export default RegisterPage;
