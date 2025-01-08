import { Metadata, NextPage } from 'next';
import LoginForm from './LoginForm';

/**
 * User Login page
 * @page Login
 */
const LoginPage: NextPage = () => {
  return (
    <>
      <LoginForm stage='Sign In'/>
    </>
  );
};

export const metadata: Metadata = {
  title: 'Tutor App Login',
  description: '_DESCRIPTION_',
};

export default LoginPage;
