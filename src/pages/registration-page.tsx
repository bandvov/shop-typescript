import Div from '../components/common/div';
import { Input } from '../components/common/text-input';
import { useState } from 'react';
import Button from '../components/common/button';
import {
  ERROR_MESSAGE_COLOR,
  LOGIN_PATH,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  NAME_REGEXP,
} from '../configs/constants';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Checkbox from '../components/common/checkbox';
import Registration from '../components/registration';
import Success from '../components/success';
import checkCircle from '../images/check-circle.svg';
import { registerUser } from '../components/API';

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
  agreedWithTerms: Yup.bool().isTrue(),
});

function RegisterPage(): React.ReactElement {
  const [loginError, setLoginError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreedWithTerms: false,
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: (userData) => {
      
    registerUser(userData)
        .then((res) => {           
            setSuccess(true);
        })
        .catch((e) => {
          if (e) {
            setLoginError(e.response?.data?.message);
            throw e.response?.data?.message;
          }
        });
    },
  });
  const inputHandler = (e: React.SyntheticEvent) => {
    setLoginError('');
    handleChange(e);
  };

  return (
    <Div background='primary' direction={'column'} minHeight="100vh">
     {success?<Div direction='column'>
      <Success border='2px solid #00BA12' 
      width='150px'
      height='150px'
      borderRadius='50%'><img src={checkCircle} /></Success>
      <span style={{color:'#00BA12',fontSize:'44px'}}>Success!</span>
      <p style={{width:'300px',textAlign:'center'}}>Account succesfully created! Please check your inbox for your confirmation link.</p>
     <Link to={LOGIN_PATH}><Button width='200px'>Done</Button></Link>
     </Div> : <Registration
        background='primary'
        borderRadius={'15px'}
        direction={'column'}
        minHeight="100px"
        width="300px"
        padding="0 1rem"
      >
        <h2>Sign Up</h2>
        <Div borderRadius="15px" padding="0 3rem 2rem" direction="column">
          <form onSubmit={handleSubmit}>
            <Input
              background='primary'
              type="text"
              error={!!errors.firstName}
              name="firstName"
              onChange={inputHandler}
              placeholder="Enter first name..."
              helperText={errors.firstName}
              showHelperText
              value={values.firstName}
            />
            <Input
              background='primary'
              type="text"
              error={!!errors.lastName}
              name="lastName"
              onChange={inputHandler}
              placeholder="Enter last name..."
              helperText={errors.lastName}
              showHelperText
              value={values.lastName}
            />
            <Input
              background='primary'
              type="text"
              error={!!errors.email}
              name="email"
              onChange={inputHandler}
              placeholder="Enter email..."
              helperText={errors.email}
              showHelperText
              value={values.email}
            />
            <Input
              background='primary'
              type="text"
              error={!!errors.password}
              name="password"
              onChange={inputHandler}
              placeholder="Enter password..."
              helperText={errors.password}
              value={values.password}
            />
            <div>
              <label>
                <Checkbox
                  name="agreedWithTerms"
                  checked={values.agreedWithTerms}
                  onChange={inputHandler}
                />
                <span style={{ fontSize: '13px' }}>
                  By checking this checkbox you accept{' '}
                </span>
              </label>
              <Link to="/terms">Terms and conditions</Link>
            </div>
            {errors.agreedWithTerms && (
              <span style={{ color: ERROR_MESSAGE_COLOR }}>
                {'Please agree with terms'}
              </span>
            )}
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
      </Registration>
}
    </Div>
  );
}

export default RegisterPage;
