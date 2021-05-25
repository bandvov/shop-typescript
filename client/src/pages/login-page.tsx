import Div from '../components/common/div';
import Login from '../components/login';
import { Input } from '../components/common/text-input';

function LoginPage(): React.ReactElement {
  return (
    <Div direction={'column'}>
      <Login direction={'column'} minHeight="200px" width="300px">
        <Input />
        <Input />
        <Input />
      </Login>
    </Div>
  );
}

export default LoginPage;
