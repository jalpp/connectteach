import { Metadata, NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import Homepage from './Homepage';

export const metadata: Metadata = {
  title: 'Core',
  description: 'C.O.R.E Club',
};

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <Homepage/>
      <Stack alignItems="center" spacing={1}>
      </Stack>
    </Stack>
  );
};

export default Home;
