

import { Metadata, NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import RolesPage from './Rolespage';


export const metadata: Metadata = {
  title: 'Connect',
  description: 'Teach',
};

/**
 * Main page of the Application
 * @page Home
 */
const Roleview: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <RolesPage/>
      <Stack alignItems="center" spacing={1}>
      </Stack>
    </Stack>
  );
};

export default Roleview;