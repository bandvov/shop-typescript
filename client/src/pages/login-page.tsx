import Div from '../components/common/div';
import Login from '../components/login';
import { Input } from '../components/common/text-input';

function LoginPage(): React.ReactElement {
  return (
    <Div direction={'column'} minHeight='100vh'>
      <Login direction={'column'} minHeight="100px" width="300px">
               
          <Div padding='0 3rem' direction='column' border='1px solid red'>
            <Input placeholder='some placeholder' helperText={'hello'} showHelperText />
            <Input placeholder='some placeholder' helperText={'hello'} error/>     
            <Input placeholder='some placeholder' helperText={'hello'} error/>          
     
        </Div>      
      </Login>
    </Div>
  );
}

export default LoginPage;
