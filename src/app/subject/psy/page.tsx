import { NextPage } from 'next';
import { Stack} from '@mui/material';
import PsyCoursesPage from './Psycoursepage';


/**
 * Main page of the Application
 * @page Home
 */
const PsyPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <PsyCoursesPage/>
    </Stack>
  );
};

export default PsyPage;