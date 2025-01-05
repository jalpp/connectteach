import { NextPage } from 'next';
import { Stack} from '@mui/material';
import MathCoursesPage from './Phycoursepage';


/**
 * Main page of the Application
 * @page Home
 */
const PhyPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <MathCoursesPage/>
    </Stack>
  );
};

export default PhyPage;