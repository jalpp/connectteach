import { Metadata } from 'next';
import StageForm from '../login/LoginForm';

export const metadata: Metadata = {
  title: 'Tutor App Signup',
  description: '_DESCRIPTION_',
};

/**
 * User LogUp page
 * @page Login
 */
const LogUpPage = () => {
  return (
    <>
      <StageForm stage='Sign Up'/>
    </>
  );
};

export default LogUpPage; 
